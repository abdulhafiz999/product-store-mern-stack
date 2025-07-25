import { Button } from "@radix-ui/themes";
import React from "react";
import { toast } from "sonner";


function ConfirmModal({ setShowModal, productId, refreshProducts }) {
  async function deleteProduct(id) {
    console.log("Deleting product with ID:", id);
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.json();

      if (response.ok) {
        console.log("Product Deleted Successfully!");
        refreshProducts();
        toast("Product Deleted Successfully!!! 🎉");

      }
      return data.product;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md p-6 rounded-lg shadow-2xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 transition-colors">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Confirm Product Deletion
        </h2>

        <div className="flex gap-2 !items-center">
          <Button
            onClick={() => setShowModal(false)}
            variant="outline"
            className="!cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            className="!cursor-pointer"
            onClick={() => {
              deleteProduct(productId);
              setShowModal(false);
            }}
            variant="solid"
            color="red"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;