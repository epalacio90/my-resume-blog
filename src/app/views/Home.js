import React from 'react';
import logo from '../assets/images/avatars.svg'
import '../assets/css/home.css'
import {AiFillStar} from "react-icons/ai";
import i18next from "i18next";
import Divider from "../components/Divider";


const Home = () =>{
    return(
        <>
            <div className="container-fluid main-banner my-0">
                <img src={logo} className="main-logo" />
                <h1 className="text-white fw-bold my-4 main-title">FULL STACK DEVELOPER</h1>
                <Divider white />
                <p className='text-white my-4'>Javascript - React - React-native - node.js</p>
            </div>
            <section className="container text-center">
                <h2>{i18next.t('my-work').toUpperCase()}</h2>
                <Divider />
            </section>
        </>

    )
}

export default Home