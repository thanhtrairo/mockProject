import '../style/DetailNew.scss'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Sidebar";
import {Route, Switch,  withRouter } from "react-router-dom";
import ThunNguc from "./Thunnguc";
import PhoiDo from "./PhoiDo";
import MauVay from "./MauVay";
import MauHong from "./MauHong";
import Trending from "./Trending";


const DetailNew = () => {
    return (
        <>
            <Row className='new-container justify-content-md-center flex-row-reverse'>
                <Col lg={9} xl={9} md={12} sm={12} className='new-right'>
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
                    </Switch>
                </Col>
                <Col lg={3} xl={3} md={12} sm={12} className='new-left justify-content-md-center'>
                    <Sidebar />
                </Col>
            </Row>
        </>
    )
}
export default withRouter(DetailNew);