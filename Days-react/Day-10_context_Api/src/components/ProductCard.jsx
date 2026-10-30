
import React, { useContext } from "react";
import { ShoppingCart, Star, Heart, Zap } from "lucide-react";
import { MyShop } from "../Context/MyWebsite";

const ProductCard = ({ product}) => {
  let{setCartItem} = useContext(MyShop);
  const discount = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  );

  return (

    <div className="group w-80 max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50">
        {product.isFeatured && (
          <span className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-bold text-white">
            <Zap size={13} />
            Featured
          </span>
        )}

        <span className="absolute right-3 top-3 z-10 rounded-full bg-rose-100 px-3 py-1.5 text-xs font-bold text-rose-600">
          {discount}% OFF
        </span>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-14 z-10 rounded-full bg-white p-2.5 text-gray-500 shadow-sm transition hover:bg-rose-50 hover:text-rose-500"
        >
          <Heart size={19} />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-5 transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            {product.brand}
          </span>

          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
            {product.category}
          </span>
        </div>

        <h2 className="mt-3 text-lg font-bold text-gray-900 transition group-hover:text-indigo-600">
          {product.title}
        </h2>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-1.5">
          <Star
            size={17}
            fill="currentColor"
            className="text-amber-400"
          />

          <span className="text-sm font-bold text-gray-800">
            {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            ({product.reviews.toLocaleString("en-IN")} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            ₹{product.discountPrice.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        </div>

        <p
          className={`mt-2 text-xs font-semibold ${
            product.stock > 0 ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {product.stock > 0
            ? `● ${product.stock} items in stock`
            : "Out of stock"}
        </p>

        {/* Colors */}
        <div className="mt-4">
          <p className="mb-2 text-xs font-bold text-gray-700">
            Available Colors
          </p>

          <div className="flex flex-wrap gap-2">
            {product.colors?.map((color) => (
              <span
                key={color}
                className="rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs text-gray-600 transition hover:border-indigo-300 hover:text-indigo-600"
              >
                {color}
              </span>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          disabled={product.stock <= 0}
          onClick={() => setCartItem((prev) => [...prev, product])}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-indigo-100 transition hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:from-gray-400 disabled:to-gray-400 disabled:shadow-none"
        >
          <ShoppingCart size={19} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
