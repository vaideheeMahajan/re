let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser')

var app = express();

const billRoute = require('../backend/routes/bill.route')

//port no.
const port = 4000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
});

//testing server
app.get('/', (req, res) => {
  res.send("hii vaidehee")
})

//connet to mongodb
// mongoose.connect('mongodb://localhost/angular8mean');

mongoose.connect("mongodb://localhost:27017/angular8mean", {
   useNewUrlParser: true,
   useUnifiedTopology: true 
   }).then(() => {
   console.log('Database connected sucessfully ')
   },
   error => {
   console.log('Could not connected to database : ' + error)
   }
   );


mongoose.connection.on("connected",()=>{
  console.log("connected to mongodb database @ 27017")
});

mongoose.connection.on("error",(err)=>{
  if(err){
    console.log("unable to connect mongodb database @ 27017" + err)
  }
});


//adding middleware
var corsOptions = {
  origin: function (origin, callback) {
    // if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    // } else {
    //   callback(new Error('Not allowed by CORS'))
    // }
  }
}
app.use(cors(corsOptions));

// body-parser
app.use(bodyParser.json());

// static files
app.use('/', express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));

// routes
app.use('/api', billRoute)




// Connecting mongoDB
// mongoose.Promise = global.Promise;
// mongoose.connect(mongodb://localhost:27017/angular8mean, {
// useNewUrlParser: true
// }).then(() => {
// console.log('Database connected sucessfully ')
// },
// error => {
// console.log('Could not connected to database : ' + error)
// }
// )

// Set up express js port
// const billRoute = require('../backend/routes/bill.route')
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
// extended: false
// }));
// app.use(cors());
// app.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));
// app.use('/', express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));
// app.use('/api', billRoute)
// 
// // Create port
// const port = process.env.PORT || 4000;
// const server = app.listen(port, () => {
// console.log('Connected to port ' + port)
// })
// 
// // Find 404 and hand over to error handler
// app.use((req, res, next) => {
// next(createError(404));
// });
// 
// // error handler
// app.use(function (err, req, res, next) {
// console.error(err.message);
// if (!err.statusCode) err.statusCode = 500;
// res.status(err.statusCode).send(err.message);
// });
