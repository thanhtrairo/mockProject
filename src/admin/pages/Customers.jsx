import axios from "axios";
import React, { useEffect, useState } from "react";

import Table from "../components/table/Table";

const Customers = () => {
  const [user, setUser] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      // setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );

      const getData = res.data;
      // console.log(res.data);
      setUser(getData);
      // setLoading(false);
    };
    getUser();
  }, []);

  // console.log(">>>", user);

  const customerListHead = ["", "name", "phone", "email", "address","action"];

  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.email}</td>
      <td>{item.address.city}</td>
      <td>
        <span></span>
      </td>
    </tr>
  );

  return (
    <div>
      <h2 className="page-header">Customers</h2>
      <div className="row">
        <div className="col-12">
          <div className="dashboard">
            <div className="dashboard-body">
              <Table
                headData={customerListHead}
                bodyData={user}
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

export default Customers;
