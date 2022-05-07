

class friends {
    constructor(db) {
    this.db = db
    }


    createfriends(friendship){   
        return new Promise((resolve, reject) => {
            if(false) {
              reject();
            } else {
                console.log("HELLOO : createfriends se lance")
                console.log(friendship)
                this.isFriend(friendship.user_login1,friendship.user_login2)
                .then(() => {
                    console.log("AMITIER SE CREER")
                    this.db.friends.insert(friendship) //On insert dans la base //
                    resolve()
                })
                .catch(() => {
                    console.log("AMITIER EXISTE DEJA")
                    reject()
                    
                })
              
            }
          });
        
    }
    


    addFriend(user1_id,user2_id){ //fonction qui permet d'ajouter un user en ami //
        var friendship = {"follower_id" : user1_id, "followed_id" : user2_id, "date" : newDate()}
        this.db.friends.insert(friendship)
             
    }   
    

    isFriend(user1_id,user2_id) {
        return new Promise((resolve, reject) => {

            this.db.friends.find({"user_login1":user1_id,"user_login2":user2_id},(err, docs) => {
                if (err) {
                console.log("Erreur dans isFriend !!!!!!!")
                reject()
                }
                console.log("isFriend continu :")
                console.log(docs)
                if(docs.length===0){
                    /////////////////////////////////////////////////////////
                    this.db.friends.find({"user_login1":user2_id,"user_login2":user1_id},(err, docs) => {
                        if (err) {
                        console.log("Erreur dans isFriend !!!!!!!")
                        reject()
                        }
                        console.log("isFriend continu :")
                        console.log(docs)
                        if(docs.length===0){
                            console.log("pas de friendship trouvé")
                            resolve()
                        } else {
                            console.log("friendship existe !")
                            reject()
                        
                        }
                    })
                    ////////////////////////////////////////////////////////
                } else {
                console.log("friendship existe !")
                reject()
                
                }
            })
        });
      }

    removeFriend(user1_id,user2_id){

    }
   
}
  
exports.default = friends;
  
  