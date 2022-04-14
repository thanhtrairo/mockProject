import { useEffect, useState} from "react";
import axios from 'axios';
const useFetch =(url) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() =>{
        try{
            async function fetchData() {
                let newData = "";
                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];
                if(data.length > 4){
                     newData =  data.slice(0,5);
                }
                else  newData = data;
                setData(newData);
                setIsLoading(false);
                setIsError(false);
            }
            fetchData();
        }
        catch(e){
            setIsError(true);
            setIsLoading(false);
            alert(e.message);
        }
    },[url])

    return{
        data, isLoading, isError
    }
}
export default useFetch;