
import React from "react";

const CartValue = ({ cartItem, setCartItem }) => {
  // Remove product from cart
  const removeItem = (id) => {
    setCartItem((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  // Increase quantity, stock limit ke saath
  const increaseQuantity = (id) => {
    setCartItem((previousCart) =>
      previousCart.map((item) =>
        item.id === id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItem((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate total items and price
  const totalItems = cartItem.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItem.reduce(
    (total, item) =>
      total + (item.discountPrice ?? item.price) * item.quantity,
    0
  );

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <p className="mt-2 text-gray-500">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {/* Empty Cart */}
        {cartItem.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="mb-5 text-6xl">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Your cart is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Add some products to see them here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="space-y-4 lg:col-span-2">
              {cartItem.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
                >
                  {/* Product Image */}
                  <div className="flex h-36 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-32 sm:w-32">
                    <img
                      src={
                        item.image ||
                        item.thumbnail ||
                        "https://placehold.co/200x200?text=Product"
                      }
                      alt={item.title}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                      {item.brand || item.category || "Product"}
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-gray-900">
                      {item.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {item.category || "General"}
                    </p>

                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {formatPrice(item.discountPrice ?? item.price)}
                      {item.discountPrice != null &&
                        item.discountPrice < item.price && (
                          <span className="ml-2 text-sm font-normal text-gray-400 line-through">
                            {formatPrice(item.price)}
                          </span>
                        )}
                    </p>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-3 text-sm font-medium text-red-500 transition hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <div className="flex items-center rounded-lg border border-gray-200">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label="Decrease quantity"
                        className="px-3 py-2 text-lg hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="min-w-10 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        disabled={item.quantity >= item.stock}
                        aria-label="Increase quantity"
                        className="px-3 py-2 text-lg hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-bold text-gray-900">
                      {formatPrice(
                        (item.discountPrice ?? item.price) * item.quantity
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-6">
              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Total items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">
                    FREE
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between gap-3 text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  alert("Checkout functionality will be added next!")
                }
                className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>

              <p className="mt-4 text-center text-xs text-gray-400">
                Your order total updates automatically.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartValue;
