//import the dotenv to load environment variables 
import dotenv from 'dotenv';
dotenv.config();

//import express
import express from 'express';
import { dot } from 'node:test/reporters';

//get the express app instance
const app = express();

//create a get request handler for the root path
app.get('/', (req, res) => {
    //send a response
    res.send('Hello World from Express');
});


app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' }
  ]);
})
const PORT = process.env.PORT;

app.
//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port 5000 and we are ready to go! ${PORT}`);
});