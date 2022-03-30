import { withRouter } from "react-router-dom";
import './DetailNew.scss';
import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import ThunNguc from "./Thunnguc";
import PhoiDo from "./PhoiDo";
import MauVay from "./MauVay";
import MauHong from "./MauHong";
import Trending from "./Trending";
import News from "./News";
   
    const DetailNew =(props) =>{
        const [dataPost, setDataPost] = useState([]);
        const [loading, setLoading] = useState(true);
        useEffect(() =>{
            setTimeout(async() =>{
                try{
                    let res = await axios.get('https://622c5742087e0e041e08c677.mockapi.io/products/products')
                    let data = res && res.data ? res.data : [];
                    let newData =  data.slice(0,5);
                    setDataPost(newData);
                    setLoading(false);
                    console.log(">>>Check res: ", newData);
                }
                catch(e){
    
                }
               
            }, 2000)
          
        },[])
        console.log(">>> check props: ", props);
        return(
            
            <>
                <Row className='new-container justify-content-md-center flex-row-reverse'>
                    <Col lg={9} xl={9} md={12} sm={12} className = 'new-right'>

                        <Switch>
                            <Route exact path="/news/1">
                                <ThunNguc/>
                            </Route>
                            <Route path="/news/2">
                                <PhoiDo/>
                            </Route>
                            <Route path="/news/3">
                               <MauVay/>
                            </Route>
                            <Route path="/news/4">
                               <MauHong/>
                            </Route>
                            <Route path="/news/5">
                               <Trending/>
                            </Route>
                        {/* <Route exact path="/products/:id" component={ProductDetail} />
                        <Route exact path="/cart" component={Cart} /> */}
                        </Switch>
                       
                    </Col>
            
                    <Col lg={3} xl={3} md={12} sm={12}  className = 'new-left justify-content-md-center'> 
                        <Sidebar/>
                    </Col>
                </Row>
                
            </>
        
        )
}
export default withRouter(DetailNew);