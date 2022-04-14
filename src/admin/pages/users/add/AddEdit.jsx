import React, {useEffect, useState} from "react";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import CustomSelect from "../../customize/CustomSelect";

import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { toast } from "react-toastify";

import "./add.css"

const options = [
  { value: "true", label: "Admin" },
  { value: "false", label: "User" },
];

const AddEdit = (props) => {
  const URL = "https://622c5742087e0e041e08c677.mockapi.io/products/users";


  
  let history = useHistory();

  const { id, data } = useParams();
  const isAddMode = !id;

  console.log(">>>>",props)

  const [dataUser, setDataUser] = useState()
  const [dataEditUser, setDataEditUser] = useState({})

  

//  useEffect(() => {

//   if(!id) return {}

//    const getData = async () => {
//      const res = await axios.get(
//        "https://622c5742087e0e041e08c677.mockapi.io/products/users"
//      );
//      let newData = res.data;
//      setDataUser(newData);

//      console.log(dataEditUser)
//    };
//    getData();
//  }, [id]);



 
 const handleSubmitUse = async (values) => {
   if(isAddMode) {
      const response = await axios.post(URL, values);
      // console.log(response);
      history.push("/admin/user");

      if (response.status === 201) {
        toast.success("!thêm thành công");
      } else {
         toast.error("!thêm không thành công");
      }
 
   }else {
         const response = await axios.put(`${URL}/${values.id}`, values);
         if (response.status === 200) {
           toast.success("!Update thành công");
          //  setResetProduct(!resetProduct);
         } else {
          toast.error("!Update không thành công");
         }
   }
 } 



  const formik = useFormik({
    initialValues: isAddMode
      ? {
          name: "",
          email: "",
          password: "",
          isAdmin: "",
        }
      : props.location.state.data,

    validationSchema: Yup.object({
      name: Yup.string()
        .required("*trường này phải nhập")
        .min(4, "*nhập it nhất 4 ký tự ")
        .max(20, "*nhập tối đa 20 ký tự"),
      email: Yup.string()
        .required("*trường này phải nhập")
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          " *Please nhập đúng định dạng email"
        ),
      password: Yup.string()
        .required("*trường này phải nhập")
        .min(4, "*nhập it nhất 4 ký tự")
        .max(10, "*nhập tối đa 20 ký tư"),
      isAdmin: Yup.string().required("*Trường này phải chọn"),
    }),

    onSubmit: async (values) => {
      //   alert(JSON.stringify(formik.values, null, 2));
      const response = await axios.post(URL, formik.values);
      console.log(response);
      history.push("/admin/user");

      if (response.status === 201) {
        Swal.fire("Thêm Thành Công !", "You clicked the button!", "success");
      } else {
        Swal.fire("Error !", "You clicked the button!", "error");
      }
    },
  });
  

  return (
    <section>
      <form className="user-form" onSubmit={formik.handleSubmit}>
        <div className="user-item">
          <label> User Name </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Nhập tên..."
          />
          {formik.errors.name && (
            <p className="errorMsg" style={{ color: "red" }}>
              {formik.errors.name}
            </p>
          )}
        </div>
        <div className="user-item">
          <label> Email </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Nhập email..."
          />
          {formik.errors.email && (
            <p className="errorMsg" style={{ color: "red" }}>
              {" "}
              {formik.errors.email}{" "}
            </p>
          )}
        </div>
        <div className="user-item">
          <label> Password </label>
          <input
            type="password"
            id="pass"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Nhập password..."
          />
          {formik.errors.password && (
            <p className="errorMsg" style={{ color: "red" }}>
              {formik.errors.password}
            </p>
          )}
        </div>
        <div className="user-item">
          <label>isAdmin</label>
          <CustomSelect
            options={options}
            value={formik.values.isAdmin}
            onChange={(value) => formik.setFieldValue("isAdmin", value.value)}
          />
          {formik.errors.isAdmin && (
            <p className="errorMsg" style={{ color: "red" }}>
              
              {formik.errors.isAdmin}
            </p>
          )}
        </div>
        <div className="user-item">
          <button type="submit" onClick={() => handleSubmitUse(formik.values)} className="user-btn">
            
           {isAddMode? 'Create' : "Update"}
          </button>
        </div>
      </form>
      {JSON.stringify(formik.values, null, 2)}
    </section>
  );
};

export default AddEdit;
