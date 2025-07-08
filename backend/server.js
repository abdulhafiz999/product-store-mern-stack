// //import the dotenv to load environment variables
// import express from "express"; // Import express
// import connectDb from "./config/db.js"; // Import the connectDB function
// import dotenv from "dotenv";
// import ProductModel from "./models/product.model.js";

// dotenv.config();

// //get the express app instance
// const app = express();

// app.use(express.json()); // Middleware to parse JSON bodies

// //create a get request handler for the root path
// app.get("/", (req, res) => {
//   //send a response
//   res.send("Hello World from Express");
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     await connectDb(); // Ensure the database is connected before fetching products
//     // Fetch all products from the database
//     const products = await ProductModel.find({});
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// });
// app.post("/api/products/:id", async (req, res) => {
//   const { id } = req.params; // Extract the product ID from the request parameters

//   try {
//     if (
//       !newProduct.name ||
//       !newProduct.description ||
//       !newProduct.imageUrl ||
//       !newProduct.stock ||
//       !newProduct.price
//     ) {
//       return res
//         .status(400)
//         .json({ message: "Name, description, and imageUrl are required" });
//     }

//     //create a new product object
//     const product = ProductModel({
//       name: newProduct.name,
//       description: newProduct.description,
//       imageUrl: newProduct.imageUrl,
//       stock: newProduct.stock,
//       price: newProduct.price,
//     });

//     //save the product to the database
//     await product.save();

//     res.status(201).json({
//       message: "Product created successfully",
//       product: newProduct,
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error creating product", error: error.message });
//   }
// });

// const PORT = process.env.PORT;

// //start the server
// app.listen(PORT, () => {
//   connectDb(); // Call the connectDB function to connect to MongoDB
//   console.log(`Server is running on port 5000 and we are ready to go! ${PORT}`);
// });

// Import the dotenv dep to load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import express
import express from "express";
import ProductModel from "./models/product.model.js";
import connectDB from "./config/db.js";

// Get the express app instance
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Create a get request handler for the root route
app.get("/", (req, res) => {
  res.send("Hello from the backend server!");
});

// Fetch all products from the database endpoint
app.get("/api/products", async (req, res) => {
    try{
        await connectDB(); // Connect to the database
         
        // Fetch all products from the database
        const products = await ProductModel.find({});

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

// fectch a product buy id endpoint
app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params;

    try{
        await connectDB(); // Connect to the database
         
        // Fetch all products from the database
        const product = await ProductModel.findById(id);

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

// Create a new product endpoint
app.post("/api/products", async (req, res) => {
//   const newProduct = req.body;
const { name, price, description, imageUrl, stock } = req.body;

console.log("Received product data:", req.body);

  try {
    await connectDB(); // Connect to the database

    // Validate the product data
    if (!name || !price || !description || !imageUrl || stock === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new product object
    const product = new ProductModel({
        name,
        price,
        description,
        imageUrl,
        stock,
    });

    // Save the product to the database
    await product.save();

    res.status(201).json({
      message: "Product created successfully",
      product
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
});

// Update a product by ID endpoint
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;

    // Destructure the product data from the request body
  const { name, price, description, imageUrl, stock } = req.body;

    try {
        await connectDB(); // Connect to the database
    
        // Validate the product data
        if (!name || !price || !description || !imageUrl || stock === undefined) {
        return res.status(400).json({ message: "All fields are required" });
        }
    
        // Find the product by ID and update it
        const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        { name, price, description, imageUrl, stock },
        { new: true } // Return the updated document
        );
    
        if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
        }
    
        res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
});

// Delete a product by ID endpoint
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await connectDB(); // Connect to the database

    // Find the product by ID and delete it
    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
});

const PORT = process.env.PORT;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});