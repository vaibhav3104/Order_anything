const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const addItems = require('./helpers/addItems')
const app = express()

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


// CONNECTION
mongoose.connect('mongodb://localhost:27017/order_anything',{ useNewUrlParser: true });

// MIDDLEWARE
app.use(bodyParser.json())

// ADD ITEMS TO DATABASE
// use only one time otherwise it will create copy in db
// addItems()

// ROUTES
const routes = require('./routes')
routes(app)


// LISTEN ON PORT 3000
app.listen('3000', () => {
	console.log('******************')
	console.log('server started at port 3000')
	console.log('******************')
})