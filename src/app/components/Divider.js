import React from 'react';
import {AiFillStar} from "react-icons/ai";
import '../assets/css/components/divider.css'

const Divider = ({white}) =>{
    return(
        <div className='d-flex justify-content-center align-items-center'>
            <div className={white ? 'divider divider-white' : 'divider'} />
            <AiFillStar size={40} fill={white? 'white' : 'rgb(44, 62, 80)'} className='mx-3' />
            <div className={white ? 'divider divider-white' : 'divider'}/>
        </div>
    )
}

export default Divider