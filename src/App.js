import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <div>
          <div className="footer">
              <div className="container">
                  <div className="row">
                      <div className="cot1 col-xl-3 col-md-6 col-xs-12">
                          <div className="title"><a className="txt1">Tbag Fashion</a></div>
                          <div className="line" />
                          <ul>
                              <li><a style={{ color: 'white' }}>Wanda Tbag fashion là giao diện bán hàng có đầy đủ các tính năng cần thiết cho cửa hàng hiện nay</a></li>
                              <li><i className="fas fa-map-marker-alt" style={{ color: 'white', fontSize: '14px' }} />&nbsp;&nbsp;<a style={{ color: 'white' }}> 59A Âu cơ, Phường 14, Quận 11, TP. HCM</a></li>
                              <li><i className="fas fa-phone" style={{ color: 'white', fontSize: '14px' }} />&nbsp; &nbsp;<a href="#" className="txt2">0385942049</a></li>
                              <li>
                                  <i className="fas fa-envelope" style={{ color: 'white', fontSize: '14px' }} />&nbsp; &nbsp;<a href="#" className="txt2">vuhuuhanh01@gmail.com</a></li>
                          </ul>
                      </div>
                      <div className="cot2 col-xl-3 col-md-6 col-xs-12">
                          <div className="title"><a className="txt1">Liên kết</a></div>
                          <div className="line" />
                          <ul>
                              <li><a href="#" className="txt2">Tìm kiếm</a></li>
                              <li><a href="#" className="txt2">Giới thiệu</a></li>
                              <li><a href="#" className="txt2">Liên hệ</a></li>
                              <li><a href="#" className="txt2">Blog</a></li>
                              <li><a href="#" className="txt2">Hệ thống cửa hàng</a></li>
                          </ul>
                      </div>
                      <div className="cot3 col-xl-3 col-md-6 col-xs-12">
                          <div className="title"><a className="txt1">Chính sách</a></div>
                          <div className="line" />
                          <ul>
                              <li><a href="#" className="txt2">Chính sách đổi trả</a></li>
                              <li><a href="#" className="txt2">Chính sách bảo mật</a></li>
                              <li><a href="#" className="txt2">Điều khoản dịch vụ</a></li>
                              <li><a href="#" className="txt2">Chính sách thanh toán</a></li>
                          </ul>
                      </div>
                      <div className="cot4 col-xl-3 col-md-6 col-xs-12">
                          <div className="title"><a className="txt1">Đăng ký nhận khuyến mãi</a></div><a className="txt1">
                              <div className="line" />
                          </a><div className="cot-cont"><a className="txt1" /><a style={{ color: 'white' }}>Hãy là người đầu tiên nhận khuyến mãi lớn!</a></div>
                          <div className="search">
                              <input type="text" placeholder="Email" />
                              <button>ĐĂNG KÝ</button>
                          </div>
                          <div className="icon">
                              <i className="fab fa-facebook-f" style={{ color: 'white', fontSize: '25px' }} />
                              <i className="fab fa-tiktok" style={{ color: 'white', fontSize: '25px' }} />
                              <i className="fab fa-twitter" style={{ color: 'white', fontSize: '25px' }} />
                              <i className="fab fa-youtube" style={{ color: 'red', fontSize: '25px' }} />
                              <i className="fab fa-instagram" style={{ color: 'white', fontSize: '25px' }} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="end">
              <a style={{ color: 'white' }}>© Copyright 2022 By Tbag Fashion. Powered by Haravan</a>
          </div>
      </div>

  );
}

export default App;
