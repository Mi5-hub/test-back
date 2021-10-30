const mongoose = require('mongoose');
const url = "mongodb+srv://saynatest:saynatest@cluster0.rpee7.mongodb.net/test-back?retryWrites=true&w=majority"

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("Connexion avec mongoDB etablit"))
  .catch(err=>
    console.log(err)
)

