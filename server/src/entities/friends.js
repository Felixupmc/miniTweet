

class friends {
    constructor(db) {
    this.db = db
    }
    createfriends(){   //On créer une liste d'amies, inutile //
        const friendsliste = [
            {
                name: "John",
                age: 19,
            },
            {
                name: "Candy",
                age: 18,
            },
            {
                name: "mandy",
                age: 20,
            },
        ];
        console.log(useState)
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
        }

    }

    removeFriend(user1_id,user2_id){

    }
   
}
  
exports.default = friends;
  
  