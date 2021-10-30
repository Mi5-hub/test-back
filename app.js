const express = require('express')
require('dotenv').config();
require('./config/config.db')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUIexp = require ('swagger-ui-express');
const router = express.Router();
const cors = require('cors');
require('./views/index.html')

const bodyParser = require("body-parser")


const app = express()

// router.get('https://test-back-sayna.herokuapp.com/', function (req, res, next) {
//   return res.sendFile(path.join(__dirname + './views/index.html'));
// });
app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'content-type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

const swaggerOptions = {
  definition: {
    servers: [
      {
        url: "http://localhost:5000"
      }
    ],
  },
  apis: ["./src/routes/*.js"]
};

const spec = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUIexp.serve, swaggerUIexp.setup(spec))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const authRoute = require('./src/routes/auth');
const userRoute = require('./src/routes/users');




app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);



// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Serveur lancer sur le port ${process.env.PORT}`);
});