const express = require("express");
const Users = require("./entities/users.js");
const Messages = require("./entities/messages.js");
const Friends = require("./entities/friends.js");

function init(db) {

    const users = new Users.default(db);
    const messages = new Messages.default(db);
    const friends = new Friends.default(db);


    const router = express.Router();
    // On utilise JSON
    router.use(express.json());
    // simple logger for this router's requests
    // all requests to this router will first hit this middleware
    router.use((req, res, next) => {
        console.log("--------------------------------");
        console.log("--------------------------------");
        console.log('API: method %s, path %s', req.method, req.path);
        console.log('Body', req.body);
        console.log("--------------------------------");

        next();
    });


    router
        .route("/user/login") //le front demande le login //
        .put(async (req, res) => {
            try {
                const { login, password } = req.body; //on decoupe le coprs de la requete //

                // Erreur sur la requête HTTP
                if (!login || !password) {
                    res.status(411).json({ //il renvoie une erreur dans le res //
                        status: 400,
                        "message": "Requête invalide : login et password nécessaires"
                    });
                    return;
                }

                
                await users.checkpasswordAndLogin(login, password)
                    .then((resp) => {
                        //TOUT EST OK ON PEUT LOGIN LE USER
                        console.log("users.checkpassword")
                        console.log("GOOD PASSWOOOORD")
                        console.log(resp)
                        res.status(201).send(resp)
                        return;
                    })
                    .catch(() => {
                        // Faux login : destruction de la session et erreur
                        console.log("BAD PASSWOOOORD")
                        req.session.destroy((err) => { });
                        res.status(452).json({
                            status: 403,
                            message: "login et/ou le mot de passe invalide(s)"
                        });
                        return;
                    })
                
            } catch (e) {
                // Toute autre erreur
                res.status(500).json({
                    status: 500,
                    message: "erreur interne",
                    details: (e || "Erreur inconnue").toString()
                });
            }

    });

    router
        .route("/user/:user_id") //On verifie que la route existe //
        .get(async (req, res) => { 
            try {
                const user = await users.get(req.params.user_id); //present dans la route //
                if (!user)
                    res.sendStatus(404);
                else
                    res.send(user);
            }
            catch (e) {
                res.status(500).send(e);
            }
        })
        .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`)); //on accède à la même route pour delete //

    router.put("/user", (req, res) => {
        const { login, password, lastname, firstname, avatar } = req.body;
        if (!login || !password || !lastname || !firstname || !avatar) {
            res.status(400).send("Missing fields");
        } else {
            users.create({login, password, lastname, firstname, avatar})
                .then((user_id) => {
                    console.log("user a été ajouté !")
                    res.status(201).send({ id: user_id })
                })
                .catch((err) => {
                    console.log("user with same login allready exists")
                    res.status(501).send(err);
                })
        }
    });

    router.post("/getUser", (req, res) => {
        return new Promise((resolve, reject) => {

            console.log("HELLOO : get /user  se lance")
            const { login } = req.body;
            console.log({ login })
            if (!login) {
                console.log("err Missing fields dans get/user" )
                res.status(406).send("Missing fields");
            } else {
                users.get(login)
                    .then((u) => {
                        console.log("post/getUser réussit avec user trouvé de login : ")
                        console.log(u)
                        resolve(u)
                    })
                    .catch((err) => reject(res.status(500).send(err)));
            }
        })
        
    } )

    
    router
        .route("/getUserAvatar/:user_login")
        .get(async (req, res) => {
            try {
                const user = await users.get(req.params.user_login);
                if (!user){
                    console.log("/getUserAvatar/"+req.params.user_login +"    n'a rien trouvé")
                    res.sendStatus(404);
                }
                else{
                    console.log("/getUserAvatar/"+req.params.user_login + "   a trouvé : ")
                    const { loginn,  password,  lastname,  firstname,  avatar,  _id } = user
                    console.log(user)
                    console.log(avatar)
                    res.status(201).send(avatar)
                }
                    
            }
            catch (e) {
                console.log("erreur dans console.log(/getUserAvatar/"+req.params.user_login)
                res.status(500).send(e);
            }
        })
    
        

//===========================================================================================================

    router.put("/messages/poster", (req, res) => {
        return new Promise((resolve, reject) => {

            console.log("HELLOO : router.put(/messages se lance")
            const { login, texte ,imgUrl } = req.body;
            const likes = 0
            const dislikes = 0
            console.log({ login, texte ,imgUrl })
            if (!login || !texte || !imgUrl) {
                res.status(406).send("Missing fields");
            } else {
                console.log("ca passe ou pas?")
                users.get(login)
                .then((userr) => {
                    console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
                    console.log(userr)
                    const avatar = userr.avatar
                    messages.createMessage({login, texte,imgUrl,likes,dislikes,avatar})
                        .then((user_id) => resolve(res.status(201).send({ id: user_id })))
                        .catch((err) => reject(res.status(500).send(err)));
                })
                .catch(() => {
                    res.sendStatus(404);
                })
                    
            }
        }).then(() =>{
            
            resolve("ca passe")
        })

    });

    router
        .route("/messages")
        .get(async (req, res) => {
            try {
                messages.getMessages()
                .then((message) => {
                    console.log("HELLOO : messages.getMessages() a fonctionné et renvois les messages :")
                    console.log(message)
                    res.status(201).send(message)
                })
                .catch((err) => {
                    console.log("HELLOO : messages.getMessages() n'a pas fonctionné")
                    res.sendStatus(406);
                })
            }
            catch (e) {
                console.log("HELLOO00000")

                res.status(512).send(e);
            }
        })




    router
        .route("/friend") 
        .put(async (req, res) => { 
            const { user_login1,user_login2 } = req.body;
            if (!user_login2 || !user_login1) {
                res.status(400).send("Missing fields");
            } else {
                friends.createfriends({user_login1,user_login2})
                    .then((user_id) => {
                        console.log("user a été ajouté !")
                        res.status(201).send({ id: user_id })
                    })
                    .catch((err) => {
                        console.log("user with same login allready exists")
                        res.status(501).send(err);
                    })
            }
        })
        .get(async (req, res) => { 
            try {
                const user = await users.get(req.params.user_id); //present dans la route //
                if (!user)
                    res.sendStatus(404);
                else
                    res.send(user);
            }
            catch (e) {
                res.status(500).send(e);
            }
        })
        .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`)); //on accède à la même route pour delete //





        router.put("/messages/liker", (req, res) => {
            console.log("heyyoooooooooooooo")
            const { login,texte } = req.body;
            if (!login || !texte) {
                console.log(login)
                console.log(texte)
                res.status(400).send("Missing fields");
            } else {
                messages.liker({login,texte})
                .then(() => {
                    console.log("user a bien liiker !")
                    res.status(201).send({ id: user_id })
                })
                .catch((err) => {
                    console.log("Probleme pour liiker")
                    res.status(501).send(err);
                })
            }
        })











    return router;
}
exports.default = init;

