import { useState } from 'react'
import TickerInfo from './TickerInfo'
import { backGroundColor } from './TickerInfo'



function TickerSearch(props){
    const [stock,setStock] = useState('')


    console.log(stock)
    const handelInput = (str) =>{
        str = str.toUpperCase()
        setStock(str)
    }
    // {<TickerInfo input={stock} />}


    return(
        <div className='TickerSearch'>
            <input onChange={(str) => handelInput(str.target.value)}></input>

        </div>
    )
}


export default TickerSearch;