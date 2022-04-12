
class messages{
    constructor(db){
        this.db = db
    }
  
    createMessage(message){
        return new Promise((resolve, reject) => {
            if(err) {
                reject();
            } else {
                resolve(message);
                console.log(message) //On affiche le message //
                this.db.messages.insert(message) //On insère le message dans la bd //
            }
        });
        
    }

    getMessages(messages){ //On retourne la liste de nos propres messages //
        return new Promise((resolve, reject) => {
            this.db.messages.find({}, function(err,docs){
                if(err){
                    reject(err)
                }
                else{
                    resolve(docs)
                    console.log(messages)
                }
            }
        });
    }
}      
exports.default = messages
  
