// import mongoose
import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50, // Maximum length of the product name
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      default: 0, // Default price is 0 if not provided
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0, // Stock cannot be negative
      default: 0, // Default stock is 0 if not provided
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

//export the product model
const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;
