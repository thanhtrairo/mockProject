import './News.scss'

import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Sidebar from './Sidebar';
import { withRouter } from 'react-router-dom';
const News = (props) =>{

// = component đimount
    const [dataPost, setDataPost] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        setTimeout(async() =>{
            try{
                let res = await axios.get('https://622c5742087e0e041e08c677.mockapi.io/products/products')
                let data = res && res.data ? res.data : [];
                let newData =  data.slice(0,5);
                console.log(">>>Check res: ", newData);
                setDataPost(newData);
                setLoading(false);
               
            }
            catch(e){

            }
           
        }, 2000)
      
    },[])
    // console.log(">>> check props: ", dataPost);
    const handleViewDetailNew = (news) =>{
        let dataFilter = dataPost.filter(item=> item.id !== news.id);
        setDataPost(dataFilter);
        // console.log(">>> check data post: ", dataPost);
        props.history.push(`/news/${news.id}`)
       
    }

    return(
        <>
            <Row className='new-container flex-row-reverse'>
                <Col lg={9} xl={9} md={12} sm={12} xs={12} className = 'new-right'>
 
                <h3 className='content-text'>
                    Tin tức
                </h3>
                <Row>
                    {dataPost && dataPost.length > 0 &&
                    dataPost.map(item => {
                        return(
                            <Col lg={4} md={4} xs={12} sm={12} className='new-content' key={item.id}> 
                                <div class="thumbnail"
                                     onClick={() => handleViewDetailNew(item)}
                                >
                                        <Row>
                                            <div className='image-new'>
                                                <img sm={12} src={item.imageURL} />
                                            </div>
                                            <div class="text-block shadow p-3 mb-5 bg-body ">
                                                <h4>
                                                    <a>
                                                    Tự tin diện áo nhún ngực chuẩn trend 2021
                                                    </a>
                                                </h4>
                                                <p className='date-time'>11/18/2000</p>
                                                <p>Trước khi đi sâu vào từng cách phối đồ hợp với những bối cảnh nhất định, nàng đừng bỏ qua những lưu ý</p>
                                            </div>
                                        </Row>
                                       
                                </div>
                            </Col>
                        )
                        
                    })
                    
                    }
                    
                </Row>
                </Col>
           
                <Col lg={3} xl={3} md={12} sm={12} xs={12} className = 'new-left justify-content-sm-center'> 
                    <Sidebar/>
                </Col>
            </Row>
            
        </>
       
    )
}
export default withRouter(News);