// import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CartValue from "./components/CartValue";
import ProductCard from "./components/ProductCard";
import { useContext } from "react";
import { MyShop } from "./Context/MyWebsite";

const App = () => {
  let Products = [
    {
      id: 1,
      title: "Apple iPhone 16",
      category: "Electronics",
      brand: "Apple",
      price: 69999,
      discountPrice: 64999,
      rating: 4.8,
      reviews: 2450,
      stock: 15,
      image: "https://placehold.co/400x400?text=iPhone+16",
      description: "Powerful smartphone with an advanced camera system.",
      colors: ["Black", "White", "Pink"],
      isFeatured: true,
    },
    {
      id: 2,
      title: "Samsung Galaxy Buds FE",
      category: "Electronics",
      brand: "Samsung",
      price: 9999,
      discountPrice: 6999,
      rating: 4.5,
      reviews: 1250,
      stock: 30,
      image: "https://placehold.co/400x400?text=Galaxy+Buds",
      description:
        "Wireless earbuds with immersive sound and noise cancellation.",
      colors: ["Black", "White"],
      isFeatured: false,
    },
    {
      id: 3,
      title: "Men's Casual T-Shirt",
      category: "Clothing",
      brand: "Roadster",
      price: 999,
      discountPrice: 599,
      rating: 4.2,
      reviews: 850,
      stock: 50,
      image: "https://placehold.co/400x400?text=T-Shirt",
      description: "Comfortable cotton T-shirt for everyday wear.",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Blue", "White"],
      isFeatured: true,
    },
    {
      id: 4,
      title: "Running Shoes",
      category: "Footwear",
      brand: "Nike",
      price: 4999,
      discountPrice: 3499,
      rating: 4.6,
      reviews: 1670,
      stock: 20,
      image: "https://placehold.co/400x400?text=Running+Shoes",
      description: "Lightweight running shoes designed for everyday comfort.",
      sizes: ["7", "8", "9", "10"],
      colors: ["Black", "White"],
      isFeatured: true,
    },
    {
      id: 5,
      title: "Smart Watch Series 9",
      category: "Electronics",
      brand: "Noise",
      price: 5999,
      discountPrice: 2999,
      rating: 4.3,
      reviews: 980,
      stock: 25,
      image: "https://placehold.co/400x400?text=Smart+Watch",
      description: "Smartwatch with fitness tracking and notification support.",
      colors: ["Black", "Silver", "Blue"],
      isFeatured: false,
    },
    {
      id: 6,
      title: "Laptop Backpack",
      category: "Accessories",
      brand: "American Tourister",
      price: 2499,
      discountPrice: 1599,
      rating: 4.4,
      reviews: 720,
      stock: 18,
      image: "https://placehold.co/400x400?text=Backpack",
      description: "Durable backpack with a padded laptop compartment.",
      colors: ["Black", "Grey"],
      isFeatured: false,
    },
    {
      id: 7,
      title: "Mechanical Gaming Keyboard",
      category: "Electronics",
      brand: "Redragon",
      price: 3999,
      discountPrice: 2799,
      rating: 4.7,
      reviews: 1100,
      stock: 12,
      image: "https://placehold.co/400x400?text=Gaming+Keyboard",
      description: "Mechanical keyboard with RGB lighting for gaming.",
      colors: ["Black", "White"],
      isFeatured: true,
    },
    {
      id: 8,
      title: "Women's Handbag",
      category: "Accessories",
      brand: "Lavie",
      price: 2999,
      discountPrice: 1799,
      rating: 4.1,
      reviews: 560,
      stock: 22,
      image: "https://placehold.co/400x400?text=Handbag",
      description: "Stylish handbag suitable for daily use and outings.",
      colors: ["Black", "Brown", "Beige"],
      isFeatured: false,
    },
    {
      id: 9,
      title: "Bluetooth Speaker",
      category: "Electronics",
      brand: "JBL",
      price: 3499,
      discountPrice: 2499,
      rating: 4.5,
      reviews: 920,
      stock: 16,
      image: "https://placehold.co/400x400?text=Speaker",
      description:
        "Portable speaker with powerful sound and wireless connectivity.",
      colors: ["Black", "Blue", "Red"],
      isFeatured: false,
    },
    {
      id: 10,
      title: "Men's Analog Watch",
      category: "Accessories",
      brand: "Fossil",
      price: 7999,
      discountPrice: 5499,
      rating: 4.6,
      reviews: 640,
      stock: 10,
      image: "https://placehold.co/400x400?text=Analog+Watch",
      description: "Classic analog watch with a premium-looking design.",
      colors: ["Black", "Brown"],
      isFeatured: true,
    },
  ];
 let {isOpenData} = useContext(MyShop);
  return (
    <div>
      <div>
        <Navbar  />
      </div>
   { isOpenData ? 
  ( <div className="flex flex-wrap gap-4 justify-center mt-10">
        
          {Products.map((product) => (
            <ProductCard key={product.id}  product={product} />
          ))}
        
      </div>): ( <div>   <CartValue  />  </div>)

  }
      
     
    </div>
  );
};

export default App;
