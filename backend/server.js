//import the dotenv to load environment variables 
import express from 'express'; // Import express
import connectDb from './config/db.js'; // Import the connectDB function
import dotenv from 'dotenv';

dotenv.config();


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


//start the server
app.listen(PORT, () => {
    connectDb(); // Call the connectDB function to connect to MongoDB
    console.log(`Server is running on port 5000 and we are ready to go! ${PORT}`);

});