const path = require('path');
const api = require('./api.js');
var DataStore = require ('nedb')
var cors = require("cors")

db = {}
db.friends = new DataStore({ filename: './friend', autoload: true })
db.messages = new DataStore({ filename: './messages', autoload: true, timestampData : true })
db.users = new DataStore({ filename: './users', autoload: true })

/*
//==============================================================================================================
// 1 - connecter base de donnée
// 2 - creer objet react avec une instance de la base de donnée
// 3 - creer une instance dans bd avec infos de la page client

var msg = { text: 'world'
               , n: 5
               , today: new Date()
               , nedbIsAwesome: true
               , notthere: null
               , notToBeSaved: undefined  // Will not be saved
               , fruits: [ 'apple', 'orange', 'pear' ]
               , infos: { name: 'nedb' }
               };

db.messages.insert(msg, function (err, newDoc) {   // Callback is optional

  // newDoc is the newly inserted document, including its _id
  // newDoc has no key called notToBeSaved since its value was undefined
});

//==============================================================================================================
*/

const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

express = require('express');
const app = express()
api_1 = require("./api.js");
const session = require("express-session");

app.use(cors())

app.use(session({
    secret: "technoweb rocks"
}));

app.use('/', api.default(db));

// Démarre le serveur
app.on('close', () => {
});
exports.default = app;

