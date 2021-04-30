const express = require('express');
const bodyParser = require('body-Parser');

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true})); 
app.listen(port, ()) => {
	console.log('listening on port 3000');
})
app.get(''/bmicalculator', (req, res) => {
	res.sendFile(__dirname + '/bmicalculator.html');
})