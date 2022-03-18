import { useEffect , useState} from 'react';
import {CLIENT_URL} from '../services/constants'
import axios from 'axios'
import TickerInfo from './TickerInfo';





function GetTicker() {
    const [ stocks , setStocks ] = useState([])

    const fetchData = async () => {
        try{
            const response = await axios.get(CLIENT_URL)
            const results = response.data
            setStocks(results)
            console.log(results)

        }
        catch(error){

        }

    }

    useEffect(() => {
        fetchData();
    }, [])


    return(
        <div>
            <TickerInfo stocks={stocks} /> 
        </div>
    )
}


export default GetTicker;