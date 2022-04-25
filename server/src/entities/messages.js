
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
}

exports.default = messages
  
