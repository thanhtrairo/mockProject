import moment from "moment"
import React, {memo} from "react"
import { Link } from "react-router-dom"

function Orders({ orders }) {

  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      {orders.length === 0 ? (
        <div className="col-12 alert alert-info text-center mt-3">
          Không có đơn hàng
          <Link
            className="btn btn-dark mx-2 px-3 py-2"
            to="/products"
            style={{
              fontSize: "12px",
            }}
          >
            Mua sắm ngay
          </Link>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Trạng thái</th>
                <th>Ngày đặt</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 && orders.map((order, index) => (
                <tr
                  className={"alert-danger"}
                  key={order.id}
                >
                  <td>
                    <Link to={`/order/${order.id}`} className="link">
                      {index + 1}
                    </Link>
                  </td>
                  <td>{order.isconfirm ? "Đã xác nhận" : "Chưa xác nhận"}</td>
                  <td>{moment(order.bookingDate).calendar()}</td>
                  <td>{order.total} đ</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default memo(Orders);
