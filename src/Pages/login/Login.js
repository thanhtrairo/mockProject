// import React from 'react';
// import './Login.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// function Login() {
//   return (
//         <main>
//             <div id="template-account" class="mg-top-50">
//             <div class="container">
//                 <div class="row d-flex d-flex-center js-center">
//                     <div class="col-md-4 col-sm-6 col-xs-12  contact-form-warp text-center">
//                         <div id="customer-login">
//                             <div id="login" class="userbox">
//                                 <div class="accounttype">
//                                     <h2 class="title">Đăng nhập</h2>
//                                 </div>
//                                 <form accept-charset="UTF-8" action="/account/login" id="customer_login" method="post">
//         <input name="form_type" type="hidden" value="customer_login"/>
//         <input name="utf8" type="hidden" value="✓"/>  
//                                 <ul>
//                                     <li>
//                                         <input required="" type="email" value="" name="customer[email]" id="customer_email" placeholder="Email" class="text"/>
//                                     </li>
                                    
//                                     <li>
//                                         <input required="" type="password" value="" name="customer[password]" id="customer_password" placeholder="Mật khẩu" class="text" size="16"/>      
//                                     </li>
                                    
//                                     <div class="clearfix action_account_custommer">
//                                         <div class="action_bottom button dark">
//                                             <input class="btn btn-signin" type="submit" value="Đăng nhập"/>
//                                         </div>
//                                     </div>
//                                 </ul>
                                
//         <input id="f4f0e9fce9f749bc8a6492294df4eb6e" name="g-recaptcha-response" type="hidden" value="03AGdBq27ztz-v1oX3LgzXsO_kHk9tpfr9peJaqkbpioYMv_KrTHyx-pgvacsK6oQblrEPEHvbLMC6DVGG-Gb-1rntE963yXVfYWgLzFaTVxHsOFLlfwI8yPjV8n9em992pfDlHKH0EZTu13pUITGUAeF-qgDLuGFGhJWM51oFm2FzdLJSViAqDDUlot0Ou7so5PMGilyvIU9cxwIXyMqEsxZjn63s8lFdXDl005jZELdFyT3mnmZZAXiocRiiQJLKfCnGN9GiKBDi5ChuPDEmw4BjUyCtyv_xMb9Pu42Mhl8g_FdEPpT0Iw5reaycwSvL0zqs-TQ0qj8W2t2daQEYdkbPOfXcCV6BGoV7lW47JxVHAZAF3ofMpi_Nqx8uSODQ-LDAnREKwt_IBK6oxib8yw1CJ4V4o65XXU8tKoLKiU6xjUyM_rd94_AX1faYQEZHJEWUMM4R0_cKj0WFNCPDk4G4tILGmGYj7w"/>

//         </form>
//                                 <div class="d-flex d-flex-wrap social-login-new d-flex-center pd-top-10">
//                                     <div class="item">
//                                         <button id="btn-google-login">Đăng nhập Google</button>
//                                     </div>
//                                     <div class="item">
//                                         <button id="btn-facebook-login">Đăng nhập Facebook</button>
//                                     </div>
//                                 </div>
//                                 <div class="clearfix action_account_custommer pd-top-15">
//                                     {/* <div class="req_pass">
//                                         <a href="#" onclick="showRecoverPasswordForm();//return false;">Quên mật khẩu?</a><br>
//                                         hoặc</br><a href="/account/register" class="color-hover-default" title="Đăng ký">Đăng ký</a>
//                                     </div> */}
//                                 </div>
//                             </div>
//                             <div id="recover-password" class="userbox">
//                                 <div class="accounttype"><h2>Phục hồi mật khẩu</h2></div>		
//                                 <form accept-charset="UTF-8" action="/account/recover" method="post"/>
//         <input name="form_type" type="hidden" value="recover_customer_password"/>
//         <input name="utf8" type="hidden" value="✓"/>
        
//                                 <ul>
//                                     <li>
//                                         <label for="email" class="icon-field"><i class="icon-login icon-envelope "></i></label>
//                                         <input type="email" value="" size="30" name="email" placeholder="Email" id="recover-email" class="text"/>
//                                     </li>
//                                     <div class="clearfix action_account_custommer">
//                                         <div class="action_bottom button dark">
//                                             <input class="btn" type="submit" value="Gửi"/>
//                                         </div>
//                                         {/* <div class="req_pass">
//                                             <a href="#" onclick="hideRecoverPasswordForm();//return false;">Hủy</a>
//                                         </div> */}
//                                     </div>
//                                 </ul>
                                
//         <input id="142035dec7c34c2bb2c1d49d82f484bf" name="g-recaptcha-response" type="hidden" value="03AGdBq27CVtf4ixgjvekZL77bORssd8NQ0ngLIe7mxpHNBWBl9OwnjdwCspEEPT2SwD7M1OZ_yPXd4okq7uKJBcJ4yW5t7H6yFRuPclT6a2C1lryheGvi2pEpQBPOkh380078VTieu7u6kTgf0pMV6JM0AXyNvFMAX98iQJjZeCys29AupxCTmusmn-UPWjodQo-KlMBD3-o8e77yZMHcL4OrgxowSZsQqVpRxSETycqKn9g9RurWsEMptSfn2EJAXdiw23BTY6VJfniF7Y3VTL2Nhiumq8BbdVPy37CDmYb7Vl7q0cNjhLBg8VyU6YbrAqK_u-y1mTOcJHumfq3N-x66I_JXvFjVQGPiI8ek-QBsxhE5ffhmpnafSVo_S9_hINyAfur3BuAln8od3AmuUKRCxd_pBncLRwduXO_DV-h8sGKn97wtJR5mLR7PxZmOazfuaVVoiZeUICwZZ2JMnMqmxXwwM_d1DA"/>
//         <form/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </main>
//   );
// }
// export default Login;
