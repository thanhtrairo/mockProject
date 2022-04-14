import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react';

import Table from '../../components/table/Table';
import Badge from '../../components/badge/Badge';
import { toast } from 'react-toastify';

const OrderList = () => {

  const [orderData, setOrderData] = useState([])
  const [resetOrder, setResetOrder] = useState(false)
  // const [dataIsConfirm, setDataIsConfirm] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "https://622c5742087e0e041e08c677.mockapi.io/products/orders"
      );
      let newData = res.data;

      setOrderData(newData);
    };
    getData();
  }, [resetOrder]);

  const URL = "https://622c5742087e0e041e08c677.mockapi.io/products/orders";

  const orderStatus = {
    false: "warning",
    true: "success",

  };

  const handleChangeBadge = async (order ) => {
    const updaterOrder = async (ord) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        }
        await axios.put(`${URL}/${ord.id}`, ord, config)
        toast.success("!Xác Nhận Đơn Hàng")
      } catch (error) {
        toast.error("!Xác Nhận Thất Bại")
      }
    }
    updaterOrder(
      { ...order, isconfirm: true }
    )
  }



  const orderHeader = ["", "Name", "Address", "Phone", "Sản Phẩm", "Số Lượng", "Total", "Confirm", "Action"]
  const rederOrderHeader = (item, index) => (
    <th key={index}>{item}</th>
  )

  const renderOrderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.phone}</td>
      <td>{item.orderItems.map((itemChill) => itemChill.name)}</td>
      <td>{item.orderItems.map((itemChill) => itemChill.quatity)}</td>
      <td>{item.total}</td>
      <td>
        <Badge
          type={orderStatus[item.isconfirm]}
          content={item.isconfirm === false ? "pendding" : "Ok"}
        />
      </td>
      <td>
        <div onClick={() => handleChangeBadge(item)}>
          <Badge type="danger" content="Confirm" />
        </div>
      </td>
    </tr>
  );

  return (
    <div>
      <h2 className="page-header">Customers</h2>
      <div className="row-warrper">
        <div className="box-12">
          <div className="dashboard">
            <div className="dashboard-body">
              <Table
                limit={10}
                headData={orderHeader}
                bodyData={orderData}
                renderHead={(item, index) => rederOrderHeader(item, index)}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList