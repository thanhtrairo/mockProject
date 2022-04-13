import React from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function Contact() {
  return (
    <main>
      <div className="breadcrumb-shop">
            <div className="container">
                <ol className="breadcrumb breadcrumb-arrows" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                        <a href="/" target="_self" itemprop="item"><span itemprop="name">Trang chủ</span></a>
                        <meta itemprop="position" content="1"/>		
                    </li>
                    
                    <li className="active" itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                        <span itemprop="item" content="https://tbag-fashion.myharavan.com/pages/lien-he"><span itemprop="name">Liên hệ</span></span>
                        <meta itemprop="position" content="2"/>
                    </li>
                    
                </ol>
            </div>
        </div>
        <section id="page-contact-template" className="pd-top-30">
            <div className="container">
                <div className="row d-flex">
                    <aside className="col-md-3 col-sm-12 col-xs-12 order-mb-2">
                        <div className="sidebar-blog">
                            <div className="sidebarblog-title">
                                <div className="title-sidebar">Danh mục</div>
                            </div>
                            <div id="categories">
                                <ul className="cate">
                                    <li className="item ">
                                        <a href="/collections/onsale" class="cust-checkbox-label" title=" Sản phẩm khuyến mãi"> Sản phẩm khuyến mãi</a>
                                        <button class="plus-menu cl-open-sb">Open</button>
                                        <ul className="childrent">
                                            <li class="item ">
                                                <a href="/products/organza-hair-scrunchie" class="cust-checkbox-label" title="Organza Hair Scrunchie"> Organza Hair Scrunchie</a>
                                            </li>
                                            <li class="item ">
                                                <a href="/products/striped-long-sleeve-top" class="cust-checkbox-label" title="Striped Long Sleeve Top"> Striped Long Sleeve Top</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="item ">
                                        <a href="/collections/hot-products" class="cust-checkbox-label" title=" Sản phẩm nổi bật"> Sản phẩm nổi bật</a>
                                    </li>
                                    <li class="item ">
                                        <a href="/collections/all" class="cust-checkbox-label" title=" Tất cả sản phẩm"> Tất cả sản phẩm</a>
                                    </li>
                                    <li class="item ">
                                        <a href="/blogs/news" class="cust-checkbox-label" title=" Tin tức mới"> Tin tức mới</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="banner-left-page">
                            <a href="1"><img class="dt-width-100" height="400" width="300" src="https://file.hstatic.net/200000397757/file/banner_page_side_36672d4c440144bfbda6bac6948909c6.jpg" alt="1"/></a>
                        </div>
                    </aside>
                    
                    <div class="col-md-9 col-sm-12 col-xs-12 order-mb-1 containers">
                        <div class="heading-page text-center">
                            <h1>Liên hệ</h1>
                        </div>
                        <div id="map">
                            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7795361856006!2d106.60963451480062!3d10.751467292338464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ef1fee74ceb%3A0x40af5d3488a628c6!2zMTgyIEzDqiDEkOG6oWkgSMOgbmgsIELDrG5oIFRy4buLIMSQw7RuZyBCLCBRdeG6rW4gMTEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1sen!2s!4v1626963158622!5m2!1sen!2s"}></iframe>
                        </div>
                        <div class="page-content d-flex row">
                            <div class="col-md-6 col-sm-6 col-xs-12  mg-bottom-15">
                                <div class="contact-form-warp">
                                    <div class="form-title">
                                        <h6>Gửi thắc mắc cho chúng tôi</h6>
                                    </div>
                                    <form accept-charset="UTF-8" action="/contact" class="contact-form" method="post">
        <input name="form_type" type="hidden" value="contact"/>
        <input name="utf8" type="hidden" value="✓"/>
        
                                    <ul class="form-fill">
                                        <li>
                                            <label for="contactFormName">Họ và tên</label>
                                            <input required="" type="text" placeholder="Nhập tên của bạn" class="" name="contact[name]" id="contactFormName" />
                                        </li>
                                        <li>
                                            <label for="contactFormEmail">Số điện thoại</label>
                                            <input required="" type="email" placeholder="Nhập số điện thoại của bạn" class="" name="contact[phone]" id="contactFormPhone" />
                                        </li>
                                        <li>
                                            <label for="contactFormEmail">Email</label>
                                            <input required="" type="email" placeholder="Nhập email của bạn" class="" name="contact[email]" id="contactFormEmail" />
                                        </li>
                                        <li>
                                            <label for="Name">Message</label>
                                            <textarea required="" placeholder="Nội dung..." class="custom-textarea" name="contact[body]" id="contactFormMessage"></textarea>
                                        </li>
                                    </ul>
                                    <div class="contact-submit">
                                        <button type="submit" class="btn">
                                            <span>Gửi liên hệ</span>
                                        </button>
                                    </div>
        
        <input id="35366cda9d274222ad056525a0e63614" name="g-recaptcha-response" type="hidden" value="03AGdBq25WSbzqQ-vkEbG6rQL98vQtQGg5INOIVz4VK4_-8YFwJCPKzfqgydUfQTkaHWbl1TjLyVcNOFvrt10oEbE6_ZiDhh5BdZCzwrj79-oP1b7j7atS7t54UIKz2oiRiSvBmxX7r-bNKqdkYyJi2ayoWuMbtvt7m_jZ1kfnAQkSonMmAsLr3j0ZKrTmMUTpwGV2fm6EAbvBqOiFmVnQzto9P5iq1cFVB9peR7Kg7zW-2vVBr_GA2xASraG0kgJMfG4kqPl5XeUPK5UpDIYcTu7aCDCfURVbWE5pwr4mXN93mDESBrEJjBgUtd03lgnO4nkAXGhvGzq9JcnLgRC1Ft6F2txo-BLeapKFChjMMiQueAvcRjG-xNgqJ1-zunCsi5oGu6Zowv9lPX_zmfMH3EtPzrGpS83HVmuIvpYNH93TZMVZcOXYuyAoofbeRydZIZzmSO0DdrXajruaPNGxJcpAuiMc9FY5zA"/>
        </form>      					
                        </div>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12  mg-bottom-15">
                                <div class="contact-info content-entry">
                                    <div class="form-title">
                                        <h6>Thông tin liên hệ</h6>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum eveniet dolorum suscipit nesciunt incidunt animi repudiandae ab at, tenetur distinctio voluptate vel illo similique.
                                        </p>
                                    </div>
                                    <ul class="contact-info-list">
                                        <li>
                                            <span>
                                                <i class="fa fa-street-view"></i>
                                            </span>
                                            <span>
                                                <label>Địa chỉ</label>
                                                <p>182 Lê đại hành, phường 15, quận 11 TP.HCM</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i class="fa fa-phone"></i>
                                            </span>
                                            <span>
                                                <label>Số điện thoại</label>
                                                <p> 1900.636.099</p>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <span>
                                                <label>Email</label>
                                                <p>hi@haravan.com</p>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>           
        </section>
        </main>
  );
}

export default Contact;
