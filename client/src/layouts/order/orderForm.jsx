import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function OrderForm({ prev, formValues, setFormValues, total }) {
  const orderDetails = {
    mealsInfo: useSelector((state) => state.cart.cart),
    amount: total,
  };

  const order = useFormik({
    initialValues: formValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Only 25 caracters are allowed")
        .min(8, "Enter at least 8 characters")
        .required("Required"),

      email: Yup.string()
        .email("Pease enter a valid email address")
        .required("Required"),

      address: Yup.string().required("Required"),

      delivery_time: Yup.string().test(
        "valid-time",
        "Please enter a valid time format",
        (value) => {
          // Regular expression to validate time in HH:MM format
          const timeRegex = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
          return timeRegex.test(value);
        }
      ),
    }),
    onSubmit: (values) => {
      const userInfo = values;
      console.log(userInfo, orderDetails);
    },
  });

  const handlePrev = () => {
    setFormValues(order.values);
    prev();
  };

  return (
    <>
      <form
        className="flex flex-col items-center"
        onSubmit={order.handleSubmit}
      >
        <input
          name="name"
          type="text"
          value={order.values.name}
          onChange={order.handleChange}
          onBlur={order.handleBlur}
        />
        {order.touched.name && order.errors.name && (
          <p className="text-red-700">{order.errors.name}</p>
        )}

        <input
          name="email"
          type="email"
          value={order.values.email}
          onChange={order.handleChange}
          onBlur={order.handleBlur}
        />
        {order.touched.email && order.errors.email && (
          <p className="text-red-700">{order.errors.email}</p>
        )}

        <input
          name="address"
          type="text"
          value={order.values.address}
          onChange={order.handleChange}
          onBlur={order.handleBlur}
        />
        {order.touched.address && order.errors.address && (
          <p className="text-red-700">{order.errors.address}</p>
        )}

        <input
          type="time"
          name="delivery_time"
          value={order.values.delivery_time}
          onChange={order.handleChange}
          onBlur={order.handleBlur}
        />
        {order.touched.delivery_time && order.errors.delivery_time && (
          <p className="text-red-700">{order.errors.delivery_time}</p>
        )}

        <div className="flex gap-8">
          <motion.p
            whileTap={{
              scale: 0.8,
            }}
            className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
            onClick={handlePrev}
          >
            Go Back
          </motion.p>

          <motion.button
            whileTap={{
              scale: 0.8,
            }}
            type="submit"
            className="font-poppins text-goldenYellow font-bold cursor-pointer hover:underline md:text-xl lg:ml-16"
          >
            Checkout
          </motion.button>
        </div>
      </form>
    </>
  );
}
