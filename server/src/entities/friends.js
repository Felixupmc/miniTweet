

class friends {
    constructor(db) {
    this.db = db
    }


    createfriends(friendship){   
        console.log("HELLOO : createfriends se lance")
        return new Promise((resolve, reject) => {
            if(false) {
              reject();
            } else {
                console.log(friendship)
                this.db.friends.insert(friendship) //On insert dans la base //
                
              
            }
          });
        
    }
    


    addFriend(user1_id,user2_id){ //fonction qui permet d'ajouter un user en ami //
        var friendship = {"follower_id" : user1_id, "followed_id" : user2_id, "date" : newDate()}
        this.db.friends.insert(friendship)
             
    }   
    
    isFriend(user1_id,user2_id){
        return new Promise((resolve, reject) => {
            var contrainte = {"follower_id" : user1_id, "followed_id" : user2_id}
            this.db.friends.find(contrainte, function(err,docs){
                if(false){
                    reject(err)
                }
                else{
                    resolve(docs.size() > 0)
                }
            })
        });

    }

    removeFriend(user1_id,user2_id){

    }
   
}
  
exports.default = friends;
  
  