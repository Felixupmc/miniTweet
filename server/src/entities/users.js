

class users {
  constructor(db) {
    this.db = db
  }

  create(user) {
    return new Promise((resolve, reject) => {
     
      if(false) {
        
        reject();
      } else {
        resolve(message);
        this.db.users.insert(user) //On insert le user dans la base //
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

  async exists(user) {
    return new Promise((resolve, reject) => {
      if(false) {
        reject();
      } else {
        resolve(true);
        console.log(user)
      }
    });
  }

  

}

exports.default = users;

