
class messages{
    constructor(db){
        this.db = db
    }
  
    createMessage(message){
        console.log("HELLOO : createMessage se lance")
        return new Promise((resolve, reject) => {
            if(false) {
              reject();
            } else {
                this.db.messages.insert(message) //On insert le message dans la base //
                
              
            }
          });
        
    }

    getMessages(){ //On retourne la liste de nos propres messages //
        console.log("HELLOO : getMessages se lance")
        return new Promise((resolve, reject) => {
            this.db.messages.find({}).sort({"createdAt":-1}).exec( (err, docs) => {
             if (err) {
              reject(err);
             }
             resolve(docs);
            });
           });
        
    }


    liker2(props) {
        return new Promise((resolve, reject) => {

            const { login,text } = props;
            this.db.messages.update(
                {"login" : login,"texte": text},
                {$inc: { "likes" : 1}}
            )
            .then(() => {
                resolve()
            })
        });

    }

    liker(props) {
        return new Promise((resolve, reject) => {
            this.nbLikePlus1(props)
            .then((resp) => {
                console.log("bien incrementé... MTN ...")
                console.log(typeof resp)
                const { login,texte } = props;
                this.db.messages.update(
                    {"login" : login,"texte": texte},
                    {$set: { "likes" : resp}}
                );
            })
            .catch((err) => {
                console.log("Probleme pouur liker")
                res.status(501).send(err);
            })
        });

    }

    nbLikePlus1(props) {
        return new Promise((resolve, reject) => {

            const { login,texte } = props;
            console.log(login)
            console.log(texte)
            this.db.messages.find({"login" : login,"texte": texte},(err, docs) => {
                if (err) {
                    console.log("Erreur dans exists !!!!!!!")
                    reject(err)
                }
                console.log("NIIIIIIIIIIIICE")
                console.log(docs[0].likes)
                const l = docs[0].likes
                console.log(typeof l)
                const y = parseFloat(l)+parseFloat(1)
                console.log(y)
                resolve(y)
            })
        });

    }









}

exports.default = messages
  
