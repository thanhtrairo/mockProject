import "./products.css";
import { DataGrid } from "@material-ui/data-grid";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useHistory } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

import CustomSelect from "../customize/CustomSelect";
// import CustomImage from "./CustomImage";
import { toast } from "react-toastify";

import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

const Products = () => {
  const [products, setProducts] = useState([]);
  const [resetProduct, setResetProduct] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [checked, setChecked] = useState(false)

  const [modalData, setModalData] = useState({});

  let history = useHistory();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://622c5742087e0e041e08c677.mockapi.io/products/products"
      );
      let newData = res.data;
      setProducts(newData);
    };
    getData();
  }, [resetProduct]);

  // console.log(products.imageUrl);

  const URL = "https://622c5742087e0e041e08c677.mockapi.io/products/products";

  const [radio, setRadio] = useState(initType);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URL}/${id}`).then((response) => {
          console.log(">>check", response);

          if (response.status === 200) {
            Swal.fire("Delete success !", "You clicked the button!", "success");
            setResetProduct(!resetProduct);
          } else {
            Swal.fire("Error !", "You clicked the button!", "error");
          }
        });
      }
    });
  };


  const handleEditProduct = async (id) => {
    handleOpen();
    const item = products.find((product) => product.id === id);
    setModalData(item)
    formik.setValues(item)
  //   console.log(modalData)
  // console.log(formik.setValues(item));

  };


  const columns = [
    { field: "id", headerName: "ID", width: 50, height: 200 },
    {
      field: "name",
      headerName: "Name",
      
      width: 250,
      renderCell: (params) => {
        return <div className="product-list-item">{params.row.name}</div>;
      },
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="product-list-item">
            <img
              style={{
                width: "90px",
                alignItems: "center",
                height: "100px",
                justifyContent: "center",
                display: "flex",
                padding: "0 20px",
              }}
              className="product-list-img"
              src={params.row.imageURL}
              alt="image"
            />
          </div>
        );
      },
    },
    {
      field: "prices",
      headerName: "Prices",
      width: 100,
      renderCell: (params) => {
        return <div className="product-list-item">{params.row.prices}</div>;
      },
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 150,
      renderCell: (params) => {
        return <div className="product-list-item">{params.row.brand}</div>;
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      renderCell: (params) => {
        return <div className="product-list-item">{params.row.category}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <FiEdit
              size={20}
              onClick={() => handleEditProduct(params.id)}
              style={{ cursor: "pointer" }}
            />

            <MdDeleteOutline
              size={25}
              className="productListDelete"
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];


  // console.log(modalData.category)

 

  const formik = useFormik({
    
    

    initialValues: {
      name: "",
      description: "",
      prices: "",
      type: "",
      typePrice: "",
      category: "",
      brand: "",
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
    //   handleChange: () => {
    //   setModalData(
    //     [...modalData]

    //   )
    // },

    // onSubmit: async (values) => {
    //   // console.log("check data : ", response);
    //   const response = await axios.put(`${URL}/${values.id}`, formik.values);
    //   console.log(response);
    //   history.push("/admin/products");

    //   if (response.status === 201) {
    //     return toast.success("thêm thành công");
    //   } else {
    //     return toast.error("thêm thất bại");
    //   }
    // },
  });

    // console.log(formik.values.name);


  // console.log(products)

  

  const handleAdd = () => {
    history.push("/admin/products/add");
  };

  const handleSubmit = async (values) => {
    // console.log(">>>>",values)
    //  e.preventDefault();
        const response = await axios.put(`${URL}/${values.id}`, values)
       if (response.status === 200) {
            Swal.fire("update success !", "You clicked the button!", "success");
            handleClose()
            setResetProduct(!resetProduct);
          } else {
            Swal.fire("Error !", "You clicked the button!", "error");
          }
  }

  return (
    <>
      <div>
        <div className="title">
          <h1> Products List</h1>
        </div>
        <div className="product-add">
          <button onClick={() => handleAdd()}> + Add Product </button>
        </div>
        <div className="product-List" style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={products}
            // style={{ padding: "0 50px" }}
            disableSelectionOnClick
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[50]}
            autoHeight={true}
            checkboxSelection
          />
        </div>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <div className="title-modal">
                <h1>Edit Product name: </h1>
              </div>
              <form className="product-form" onSubmit={formik.handleSubmit}>
                <div className="product-item">
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

                <div className="product-item">
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

                <div className="product-item">
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
                <div className="product-item">
                  <label>ImageUrl</label>
                  <input
                    type="text"
                    name="imageURL"
                    value={formik.values.imageURL}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="product-item">
                  <label>Brand</label>
                  <CustomSelect
                    options={options}
                    value={formik.values.brand}
                    onChange={(value) =>
                      formik.setFieldValue("brand", value.value)
                    }
                  />
                </div>

                <div className="product-item">
                  <label>Category</label>
                  <div className="product-gender">
                    <input
                      type="checkbox"
                      onChange={formik.handleChange}
                      name="category"
                      // checked={formik.values.category === "men"}
                      value="men"
                    />
                    <label>Men</label>
                    <input
                      type="checkbox"
                      onChange={formik.handleChange}
                      name="category"
                      // checked={formik.values.category === "women"}
                      value="women"
                    />
                    <label>Women</label>
                  </div>
                </div>
                <div className="product-item">
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
                            // checked={item.value}
                          />
                          <label>{item.label}</label>
                        </div>
                      ))}
                  </div>
                </div>
                
              </form>
              <div className="product-btn">
                  <button
                    type="submit"
                    onClick={() => handleSubmit(formik.values)}
                    className="product-btn-save"
                  >
                    Save
                  </button>
                  <button className="product-btn-cancel" onClick={handleClose}>
                    Cancel
                  </button>
                </div>

              {/* {JSON.stringify(formik.values, null, 2)} */}
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default Products;
