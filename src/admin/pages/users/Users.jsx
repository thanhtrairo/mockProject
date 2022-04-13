import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";

import axios from "axios";

import Table from "../../components/table/Table";

import "./users.css";

const Users = () => {

  let history = useHistory();

  const [data, setData] = useState([]);
  // const [dataSearch, setDataSearch] = useState(newData);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("ASC");

  const [resetUser, setResetUser] = useState(false)

 
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://622c5742087e0e041e08c677.mockapi.io/products/users"
      );
      let newData = res.data;
      setData(newData);
    };
    getData();
  }, [resetUser]);

  const URL = "https://622c5742087e0e041e08c677.mockapi.io/products/users";
  
  // console.log(data)

  const handleDeleteUser = async (id) => {
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
            setResetUser(!resetUser);
          } else {
            Swal.fire("Error !", "You clicked the button!", "error");
          }
        });
      }
    });
  };



  const handleEdit = (id,data) => {
    console.log(">>>check ", data)

    history.push(`/admin/user/edit/${id}`, {data: data});
    
  };

  const userListHead = ["", "Name", "Email","Level", "Action"];

  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.isAdmin === "true" ? "Admin" : "User"}</td>
      <td>
        <div className="action">
          <span onClick={() => handleEdit(item.id, item)}>
            <FaEdit />
          </span>
          <span onClick={() => handleDeleteUser(item.id)}>
            <RiDeleteBin6Line />
          </span>
        </div>
      </td>
    </tr>
  );

 
  useEffect(() => {
   
    handleSortNameUser(sort);
  }, [sort]);



  // console.log("data", data);

  const handleSortNameUser = (value) => {
    if (value === "asc") {
      const sorted = data.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
      // console.log("DSC:", sorted);
      setData(sorted);
      // setSort("DSC");
    }
    if (value === "dsc") {
      const sorted = data.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      );
      // console.log("ASC:", sorted);
      // console.log(sorted);

      setData(sorted);
      // setSort("ASC");
    }
  };
  
  // console.log(data);

  const handleClickUser = () => {
    history.push("/admin/user/add");
  };

 const searchName = useMemo(() => {
   if(!search) return data
   return data.filter((dataName) => {
     return dataName.name.toLowerCase().includes(search.toLowerCase())
   })
 }, [search, data])


  return (
    <div>
      <h2 className="page-header">List User</h2>
      <div className="row-warrper">
        <div className="row-add">
          <button className="btn-add" onClick={handleClickUser}>
            + Add User
          </button>
        </div>
        <div className="filter-item">
          <div className="filter-search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="nhập tên..."
            />
          </div>
          <div className="filter-soft">
            <label>Sắp xếp</label>
            <select
              className="action-select"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="asc">ASC</option>
              <option value="dsc">DSC</option>
            </select>
          </div>
        </div>
        <div className="box-12">
          <div className="dashboard">
            <div className="dashboard-body">
              <Table
                limit={10}
                headData={userListHead}
                bodyData={searchName}
                renderHead={(item, index) => renderHead(item, index)}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
