import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrdersAsync, selectUserOrders } from "./UserSlice";
import { selectLoggedInUser } from "../auth/AuthSlice";

export default function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectUserOrders);
  useEffect(() => {
    if (user) {
      dispatch(fetchLoggedInUserOrdersAsync(user.id));
    }
  }, [user]);
  return (
    <>
      <div>
        {orders.map((order) => (
          <div>
            <div>
              <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
                    Order # {order.id}
                  </h1>
                  <h3 className="text-xl my-5 font-bold tracking-tight  text-red-900">
                    Order Status : {order.status}
                  </h3>
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {/* //paster your code here */}
                      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full mt-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                              <th scope="col" class="px-6 py-3">
                                Product name
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Photo
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Quantity
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Category
                              </th>
                              <th scope="col" class="px-6 py-3">
                                Price
                              </th>
                            </tr>
                          </thead>
                          {order.items.map((item) => (
                            <tbody>
                              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th
                                  scope="row"
                                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  {item.title}
                                </th>
                                <td class="px-6 py-4">
                                  <img
                                    src={item.thumbnail}
                                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline w-1/2"
                                  />
                                </td>
                                <td class="px-6 py-4">{item.quantity}</td>
                                <td class="px-6 py-4">{item.category}</td>
                                <td class="px-6 py-4">₹ {item.price * 83}</td>
                              </tr>
                            </tbody>
                          ))}
                        </table>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping Address :
                  </p>
                  <div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
                    <div className="flex gap-x-4">
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {order.selectedAddress.address}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          City : {order.selectedAddress.city}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          Pin Code : {order.selectedAddress.pinCode}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {order.selectedAddress.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        State : {order.selectedAddress.state}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                    <p>Total Items in Cart</p>
                    <p>{order.totalItems} items</p>
                  </div>
                  <div className="flex justify-between my-2 text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹ {order.totalAmount * 83}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
