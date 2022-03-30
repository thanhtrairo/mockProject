import { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Sidebar = (props) =>{
    const [loading, setLoading] = useState(true);
    const [dataPost, setDataPost] = useState([]);
    const [tempData, setTempData] = useState(null);
    useEffect(() =>{
        setTimeout(async() =>{
            try{
                let res = await axios.get('https://622c5742087e0e041e08c677.mockapi.io/products/products')
                let data = res && res.data ? res.data : [];
                let newData =  data.slice(0,5);
                setDataPost(newData);
                setLoading(false);
            }
            catch(e){

            }
           
        }, 2000)
      
    },[])
    const handleViewDetailNew = (news) =>{
        let dataFilter = dataPost.filter(item => item.id === news.id);
        // console.log(">>>check data filter: ",dataFilter);
        //setDataPost([...dataFilter]);
        let index = dataPost.indexOf(dataFilter[0]);
        dataPost.splice(index, 1);
        if(tempData){
            dataPost.unshift(tempData);
        }
        setTempData(dataFilter[0]);
        props.history.push(`/news/${news.id}`);
    }
    return(
       
        <>
             <div className='sidebar-blog'>
                <h3 className='sidebar-title'>
                    Bài viết mới nhất
                </h3>
                {!loading && dataPost && dataPost.length > 0 &&
                    dataPost.map(item => {
                        return(
                            <div className='sidebar-child' key={item.id} 
                            
                                onClick={() => handleViewDetailNew(item)}
                            
                            >
                                <img src={item.imageURL} className="zoom-in"/>
                                <div className='sidebar-text'>
                                    <p className='description'>
                                        <a>
                                            {item.description}
                                        </a> 
                                    </p>
                                    <p className='date'>
                                        {item.prices}
                                    </p>
                                </div>
                            </div>
                            
                        )
                    })
                }  
                {loading && 
                    <p>loading</p>
                }  
            </div>
        </>
    )
}
export default withRouter(Sidebar);