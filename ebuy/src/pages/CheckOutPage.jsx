import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  deleteCartAsync,
  selectItems,
  updateCartAsync,
} from "../features/cart/CartSlice";
import { useForm } from "react-hook-form";
import {
  checkUserAsync,
  selectLoggedInUser,
  updateUserAsync,
} from "../features/auth/AuthSlice";
import { createOrderAsync } from "../features/order/OrderSlice";

function CheckOutPage() {
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(true);
  const user = useSelector(selectLoggedInUser);
  const items = useSelector(selectItems);
  const totalAmount = items.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ ...item, quantity: +e.target.value }));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteCartAsync(id));
  };
  const handleOrder = (e) => {
    const order = {
      items,
      totalAmount,
      totalItems,
      user,
      selectedAddress,
      paymentMethod,
    };
    dispatch(createOrderAsync(order));
  };
  return (
    <>
      {items.length < 1 && <Navigate to="/" replace={true}></Navigate>}
      <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              className="bg-white px-5 mt-20 mb-10 py-3"
              noValidate
              onSubmit={handleSubmit((data) => {
                console.log(data);
                dispatch(
                  updateUserAsync({
                    ...user,
                    addresses: [...user.addresses, data],
                  })
                );
                reset();
              })}
            >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    Check Out
                  </h1>
                  <h2 className="text-xl font-semibold leading-7 text-gray-900">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("name", {
                            required: "Name is required",
                          })}
                          id="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email address
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register("email", {
                            required: "Email is required",
                          })}
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          id="phone"
                          {...register("phone", {
                            required: "phone is required",
                          })}
                          type="tel"
                          autoComplete="phone"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Address
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("address", {
                            required: "Address is required",
                          })}
                          id="address"
                          autoComplete="address"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          City
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city", {
                            required: "city is required",
                          })}
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          State / Province
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("state", {
                            required: "state is required",
                          })}
                          id="state"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="pinCode"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Pin code
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("pinCode", {
                            required: "pinCode is required",
                          })}
                          id="pinCode"
                          autoComplete="pinCode"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save Address
                  </button>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Address:
                    </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Choose from Existing addresses
                    </p>
                  </div>
                  <>
                    <ul role="list">
                      {user.addresses.map((address, index) => (
                        <li
                          key={index}
                          className="flex justify-between gap-x-6 py-5 border-solid border-2 rounded-md border-gray-200 px-5"
                        >
                          <div className="flex min-w-0 gap-x-4">
                            <input
                              value={index}
                              onChange={(e) => {
                                console.log(e.target.value);
                                setSelectedAddress(
                                  user.addresses[e.target.value]
                                );
                              }}
                              id="card"
                              name="address"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">
                                {address.name}
                              </p>
                              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {address.city}
                              </p>
                              <p className="text-sm leading-6 text-gray-900">
                                {address.state}
                              </p>
                            </div>
                          </div>
                          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">
                              Phone: {address.phone}
                            </p>
                            {/* <p className="text-sm leading-6 text-gray-900">
                              {address.street}
                            </p> */}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <div className="flex items-center justify-between">
                        <legend className="text-lg font-bold leading-6 text-gray-900">
                          Payment Methods
                        </legend>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          Choose One
                        </p>
                      </div>

                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="card"
                            name="payments"
                            value={"card"}
                            checked={paymentMethod === "card"}
                            onChange={(e) => {
                              console.log(e.target.value);
                              setPaymentMethod(e.target.value);
                            }}
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="card"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Card Payment(Debit/Credit)
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="cash"
                            value={"cash"}
                            checked={paymentMethod === "cash"}
                            onChange={(e) => {
                              console.log(e.target.value);
                              setPaymentMethod(e.target.value);
                            }}
                            name="payments"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="cash"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Cash on Delivery
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2">
            <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Your Cart
              </h2>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {items.map((item) => (
                      <li key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.href}>{item.title}</a>
                              </h3>
                              <p className="ml-4">$ {item.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.brand}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              <label
                                htmlFor="quantity"
                                className="inline mr-4 text-sm font-medium leading-6 text-gray-900"
                              >
                                Qty
                              </label>
                              <select
                                onChange={(e) => handleQuantity(e, item)}
                                value={item.quantity}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                              </select>
                            </div>

                            <div className="flex">
                              <button
                                type="button"
                                onClick={(e) => handleRemove(e, item.id)}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$ {totalAmount}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total Items</p>
                  <p> {totalItems}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <div
                    onClick={handleOrder}
                    className="cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Pay Now
                  </div>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or
                    <Link to="/">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOutPage;
