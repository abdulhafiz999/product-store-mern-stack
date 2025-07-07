//import the dotenv to load environment variables 
import dotenv from 'dotenv';

//import express
import express from 'express';

//get the express app instance
const app = express();

//start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000 and we are ready to go!');
});