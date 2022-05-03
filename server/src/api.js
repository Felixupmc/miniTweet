const express = require("express");
const Users = require("./entities/users.js");
const Messages = require("./entities/messages.js");

function init(db) {

    const users = new Users.default(db);
    const messages = new Messages.default(db);


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
        .route("/user/login")
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
                
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
            }
            catch (e) {
                // Toute autre erreur
                res.status(500).json({
                    status: 500,
                    message: "erreur interne",
                    details: (e || "Erreur inconnue").toString()
                });
            }

    });

    router
        .route("/user/:user_id(\\d+)")
        .get(async (req, res) => {
        try {
            const user = await users.get(req.params.user_id);
            if (!user)
                res.sendStatus(404);
            else
                res.send(user);
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
        .delete((req, res, next) => res.send(`delete user ${req.params.user_id}`));

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

    router.get("/user", (req, res) => {
        const { login } = req.body;
        try {
            user.get({login})
            .then((u) => {
                console.log(u)
                res.status(201).send(u)
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
    } )

//===========================================================================================================

    router.put("/messages/poster", (req, res) => {
        ////////////////////////////////////////////////////////////Pas sur pour la promesse . . . . 
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
                messages.createMessage({login, texte,imgUrl,likes,dislikes})
                    .then((user_id) => resolve(res.status(201).send({ id: user_id })))
                    .catch((err) => reject(res.status(500).send(err)));
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

    return router;
}
exports.default = init;

