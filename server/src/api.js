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

    router.post("/user/login", async (req, res) => {
        try {
            const { login, password } = req.body; //on decoupe le coprs de la requete //
            // Erreur sur la requête HTTP
            if (!login || !password) {
                res.status(400).json({ //il renvoie une erreur dans le res //
                    status: 400,
                    "message": "Requête invalide : login et password nécessaires"
                });
                return;
            }
            if(! await users.exists(login)) {
                res.status(401).json({
                    status: 401,
                    message: "Utilisateur inconnu"
                });
                return;
            }
            let userid = await users.checkpassword(login, password);
            if (userid) {
                // Avec middleware express-session
                req.session.regenerate(function (err) { 
                    if (err) {
                        res.status(500).json({
                            status: 500,
                            message: "Erreur interne"
                        });
                    }
                    else {
                        // C'est bon, nouvelle session créée
                        req.session.userid = userid;
                        res.status(200).json({
                            status: 200,
                            message: "Login et mot de passe accepté"
                        });
                    }
                });
                return;
            }
            // Faux login : destruction de la session et erreur
            req.session.destroy((err) => { });
            res.status(403).json({
                status: 403,
                message: "login et/ou le mot de passe invalide(s)"
            });
            return;
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
        const { login, password, lastname, firstname } = req.body;
        if (!login || !password || !lastname || !firstname) {
            res.status(400).send("Missing fields");
        } else {
            users.create({login, password, lastname, firstname})
                .then((user_id) => res.status(201).send({ id: user_id }))
                .catch((err) => res.status(500).send(err));
        }
    });

//===========================================================================================================

    router.put("/messages", (req, res) => {
        ////////////////////////////////////////////////////////////Pas sur pour la promesse . . . . 
        return new Promise((resolve, reject) => {

            console.log("HELLOO : router.put(/messages se lance")
            const { login, texte ,imgUrl } = req.body;
            console.log({ login, texte ,imgUrl })
            if (!login || !texte || !imgUrl) {
                res.status(406).send("Missing fields");
            } else {
                console.log("ca passe ou pas?")
                messages.createMessage({login, texte,imgUrl})
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
                .then((message) => {res.status(201).send(message)})
                .catch((err) => {
                    console.log("HELLOO : messages.getMessages() n'a pas fonctionné")
                    res.sendStatus(406);
                })

                /*
                const messages = await messages.getMessages()
                if (!messages){
                    const tp = await console.log("TRAUMAT")

                    res.sendStatus(404);
                }
                else {
                    const tp = await console.log("TRAUMAT")

                    res.send(messages);
                }
                */
            }
            catch (e) {
                console.log("HELLOO00000")

                res.status(512).send(e);
            }
        })

    return router;
}
exports.default = init;

