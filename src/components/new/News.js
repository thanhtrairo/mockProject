import './style/News.scss'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import { withRouter, Link } from 'react-router-dom';
import useFetch from '../../customize/fetch';
import DetailNew from './detailnews/DetailNew';
import clsx from 'clsx'

const News = (props) => {

    const {data: dataPost, isLoading, isError} =
    useFetch('https://6254073619bc53e234776721.mockapi.io/api/News')
    return (
        <>
            <div className={clsx('main_wrap')}>
                <div className={clsx('header', 'containerCustom', 'py-2')}>
                <Link to='/'>Trang chủ </Link>
                    <span>/ Tin tức</span>
                </div>
            </div>
                <Row className='new-container flex-row-reverse'>
                    <Col lg={9} xl={9} md={12} sm={12} xs={12} className='new-right'>
                        <>
                            <h3 className='content-text'>
                                Tin tức
                            </h3>
                            <Row>
                                {isError === false && isLoading === false && dataPost && dataPost.length > 0 &&
                                    dataPost.map(item => {
                                        return (
                                            <Col lg={4} md={4} xs={12} sm={12} className='new-content' key={item.id}>
                                                <div className="thumbnail"
                                                >
                                                    <Link to={`news/${item.id}`} >

                                                        <Row>
                                                            <div className='image-new'>
                                                                <img sm={12} src={item.imageURLLg} />
                                                            </div>
                                                            <div className="text-block shadow p-3 mb-5 bg-body ">
                                                                <h4>
                                                                    {item.title}
                                                                </h4>
                                                                <p className='date-time'>{item.createdAt}</p>
                                                                <p className='description'>{item.description}</p>
                                                            </div>
                                                        </Row>
                                                    </Link>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                                {
                                    !dataPost && dataPost.length < 0 && 
                                    <DetailNew />
                                }
                                {isLoading === true
                                    &&
                                    <Col lg={4} md={4} xs={12} sm={12} className='new-content'>
                                        Loading...
                                    </Col>
                                }
                                {isError &&
                                    <Col lg={4} md={4} xs={12} sm={12} className='new-content'>
                                        Something wrong ...
                                    </Col>
                                }
                            </Row>
                        </>
                    </Col>
                    {/* Sidebar */}
                    <Col lg={3} xl={3} md={12} sm={12} xs={12} className='new-left justify-content-sm-center'>
                        <Sidebar />
                    </Col>
                </Row>
        </>
    )
}
export default withRouter(News);