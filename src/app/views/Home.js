import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/avatars.svg'
import '../assets/css/home.css'
import i18next from "i18next";
import Divider from "../components/Divider";
import NewWorkModal from '../components/NewWorkModal'


const Home = () =>{
    const [showNewWorkModal, setShowNewWorkModal] = useState(false)
    return(
        <>
            <div className="container-fluid main-banner my-0">
                <img src={logo} alt={'main logo'} className="main-logo" />
                <h1 className="text-white fw-bold my-4 main-title">FULL STACK DEV</h1>
                <Divider white />
                <p className='text-white my-4'>Javascript - Typescript - React - React-native - node.js</p>
            </div>
            <section className="container text-center">
                <h2>{i18next.t('my-work').toUpperCase()}</h2>
                {localStorage.getItem('token') &&
                  <Button
                    variant="primary"
                    onClick={()=>{
                      setShowNewWorkModal(true)
                    }}
                  >
                    Add
                  </Button>
                }
                <Divider />
            </section>
            <NewWorkModal
              isOpen={showNewWorkModal}
              onClose={()=>
                setShowNewWorkModal(false)
              }
            />
        </>

    )
}

export default Home