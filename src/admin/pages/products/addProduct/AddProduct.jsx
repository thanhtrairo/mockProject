import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

import CustomSelect from "../../customize/CustomSelect";
// import CustomImage from "./CustomImage";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { toast } from "react-toastify";

const options = [
  { value: "Kalies", label: "Kalies" },
  { value: "Monki", label: "Monki" },
  { value: "Levi", label: "Levi" },
];

const initType = [
  {
    value: 1,
    label: "Quần Jean",
  },
  {
    value: 2,
    label: "T-Shirt",
  },
  {
    value: 3,
    label: "Túi Sách",
  },
];

const AddProduct = () => {
  const URL = "https://622c5742087e0e041e08c677.mockapi.io/products/products";

  const [radio, setRadio] = useState(initType);

  let history = useHistory();

  // console.log(radio);
  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      name: "",
      description: "",
      prices: "",
      type: "",
      typePrice: "",
      category: [],
      brand: "Levi",
      imageURL: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("*Trường này phải nhập")
        .min(4, "*nhập it nhất 4 ký tự "),
      description: Yup.string()
        .required("*trường này phải nhập")
        .min(8, "*nhập it nhất 8 ký tự"),
      prices: Yup.string().required("*trường này phải nhập"),
    }),

    onSubmit: async (values) => {
      // console.log("check data : ", response);
      const response = await axios.post(URL, formik.values);
      console.log(response);
      history.push("/admin/products");

      if (response.status === 201) {
        return toast.success("thêm thành công");
      } else {
        return toast.error("thêm thất bại");
      }
    },
  });

  // const getTypePrice = () => {
  //   if (formik.initialValues.prices < 20000) {
  //     return (formik.initialValues.typePrice = "Small");
  //   } else if (formik.initialValues.prices < 30000) {
  //     return (formik.initialValues.typePrice = "Medium");
  //   } else {
  //     return (formik.initialValues.typePrice = "Big");
  //   }
  // };

  return (
    <section>
      <form className="user-form" onSubmit={formik.handleSubmit}>
        <div className="user-item">
          <label> Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Enter your name"
          />
          {formik.errors.name && (
            <p className="errorMsg" style={{ color: "red" }}>
              {" "}
              {formik.errors.name}{" "}
            </p>
          )}
        </div>

        <div className="user-item">
          <label> Prices </label>
          <input
            type="number"
            id="prices"
            name="prices"
            value={formik.values.prices}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="nhập giá sản phẩm"
          />
          {formik.errors.prices && (
            <p className="errorMsg" style={{ color: "red" }}>
              {formik.errors.prices}
            </p>
          )}
        </div>

        <div className="user-item">
          <label> Description</label>
          <textarea
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "5px 20px",
            }}
            type="text"
            name="description"
            value={formik.values.description}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.description && (
            <p className="errorMsg" style={{ color: "red" }}>
              {" "}
              {formik.errors.description}{" "}
            </p>
          )}
        </div>
        <div className="user-item">
          <label>ImageUrl</label>
          <input
            type="text"
            name="imageURL"
            value={formik.values.imageURL}
            onChange={formik.handleChange}
          />
        </div>
        <div className="user-item">
          <label>Brand</label>
          <CustomSelect
            options={options}
            value={formik.values.brand}
            onChange={(value) => formik.setFieldValue("brand", value.value)}
          />
        </div>

        <div className="user-item">
          <label>Category</label>
          <div className="user-gender">
            <input
              type="checkbox"
              onChange={formik.handleChange}
              name="category"
              value="men"
            />
            <label>Men</label>
            <input
              type="checkbox"
              onChange={formik.handleChange}
              name="category"
              value="women"
            />
            <label>Women</label>
          </div>
        </div>
        <div className="user-item">
          <label> Type Brand </label>
          <div className="product-radio" style={{ display: "flex" }}>
            {radio &&
              radio.map((item, index) => (
                <div key={index} style={{ marginRight: "20px" }}>
                  <input
                    type="radio"
                    name="type"
                    value={item.value}
                    onChange={formik.handleChange}
                    style={{ marginRight: "10px" }}
                  />
                  <label>{item.label}</label>
                </div>
              ))}
          </div>
        </div>
        <div className="user-item">
          <button type="submit" className="user-btn">
            Create
          </button>
        </div>
      </form>
      {/* {JSON.stringify(formik.values, null, 2)} */}
    </section>
  );
};

export default AddProduct;
