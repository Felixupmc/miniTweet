

class users {
  constructor(db) {
    this.db = db
  }

  create(user) {
    return new Promise((resolve, reject) => {
     
      if(false) {
        reject();
      } else {
        this.db.users.insert(user) //On insert le user dans la base //
        .then(() => {
          resolve(user);
        })
        
      }
    });
  }

  get(userid) {
    return new Promise((resolve, reject) => {
      const user = {
         login: "pikachu",
         password: "1234",
         lastname: "chu",
         firstname: "pika"
      }; // À remplacer par une requête bd

      if(false) {
        //erreur
        reject();
      } else {
        if(userid == 1) {
          resolve(user);
        } else {
          resolve(null);
        }
      }
    });
  }

  exists(userLogin) {
    this.db.users.find({"login":userLogin},(err, docs) => {
      if (err) {
        console.log("Erreur dans users.exists !!!!!!!")
        return false;
      }
      console.log(docs)
      if(docs.length===0){
        console.log("utilisateur PAS PAS PAS trouvé dans users.exists ")
        return false
      } else {
        console.log("utilisateur trouvé dans users.exists ")
        return true
      }
          
      });
  }

  

}

exports.default = users;

