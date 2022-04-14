import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import useFetch from '../../customize/fetch';
import Category from './Danhmuc';
import { ApiNews } from '../../api/Api';

const Sidebar = (props) => {
    const [tempData, setTempData] = useState(null);
    const handleViewDetailNew = (news) => {
        let dataFilter = dataPost.filter(item => item.id === news.id);
        let index = dataPost.indexOf(dataFilter[0]);
        dataPost.splice(index, 1);
        if (tempData) {
            dataPost.unshift(tempData);
        }
        setTempData(dataFilter[0]);
        props.history.push(`/news/${news.id}`);
    }
    const { data: dataPost, isLoading, isError } =
        useFetch(ApiNews)
    return (
        <>
            <div className='sidebar-blog'>
                <h3 className='sidebar-title'>
                    Bài viết mới nhất
                </h3>
                {dataPost && dataPost.length > 0 &&
                    dataPost.map(item => {
                        return (
                            <div className='sidebar-child' key={item.id}
                                onClick={() => handleViewDetailNew(item)}
                            >
                                <img src={item.imageURLSm} className="zoom-in" />
                                <div className='sidebar-text'>
                                    <p className='description'>
                                        {item.title}
                                    </p>
                                    <p className='date'>
                                        {item.createdAt}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                {isLoading === true
                    &&
                    <div>
                        Loading...
                    </div>
                }
                {isError &&
                    <div>
                        Something wrong ...
                    </div>
                }
            </div>
            <Category />
        </>
    )
}
export default withRouter(Sidebar);