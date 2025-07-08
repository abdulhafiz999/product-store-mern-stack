//import the dotenv to load environment variables 
import express from 'express'; // Import express
import connectDb from './config/db.js'; // Import the connectDB function
import dotenv from 'dotenv';

dotenv.config();


//get the express app instance
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

//create a get request handler for the root path
app.get('/', (req, res) => {
    //send a response
    res.send('Hello World from Express');
});


app.get('/api/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: "Product 1",
      description: "This is product 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      name: "Product 2",
      description: "This is product 2",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      name: 'Product 3',
      description: 'This is product 3',
      imageUrl: 'https://via.placeholder.com/150', 
    }
  ]);
})
app.post('/api/products', (req, res) => {
   const newProduct = req.body;

   res.status(201).json({
        message: 'Product created successfully',
        product: newProduct
   })
});

const PORT = process.env.PORT;


//start the server
app.listen(PORT, () => {
    connectDb(); // Call the connectDB function to connect to MongoDB
    console.log(`Server is running on port 5000 and we are ready to go! ${PORT}`);

});