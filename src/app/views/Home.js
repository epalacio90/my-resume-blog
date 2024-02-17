import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/avatars.svg'
import '../assets/css/home.css'
import i18next from "i18next";
import Card from '../components/Card'
import Divider from "../components/Divider";
import NewWorkModal from '../components/NewWorkModal'


const Home = () =>{
    const [showNewWorkModal, setShowNewWorkModal] = useState(false)
  const [works, setWorks] = useState([])

  useEffect(() => {
    fetch('/api/works', {
      method: 'GET',
    }).then(response =>{
      response.json().then(data =>{
         setWorks(data.data)
      }).catch(error =>{
        console.log('errorJson:: ', error)
      })
    } ).catch(error =>{
      console.log('errorFetch:: ', error)
    } )
  }, []);


    return(
        <>
            <div className="container-fluid main-banner my-0">
                <img src={logo} alt={'main logo'} className="main-logo" />
                <h1 className="text-white fw-bold my-4 main-title">Eduardo Palacio</h1>
                <Divider white />
                <p className='text-white my-4'>Engineering leader - Health services - IoT </p>
            </div>
            <section className="container text-center my-5">
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
                <div className={'row'}>
                  {works.map(({content, title, image, color, _id}) => (
                    <Card content={content} title={title} image={image} color={color} key={_id} />
                  ))}
                </div>
            </section>
          <div className="container-fluid main-banner">
            <h2 className={'text-white'}>About</h2>
            <Divider white />
            <p className={'text-white '} style={{lineHeight: 1.2}} >
              My name is Eduardo Palacio. I studied Systems and Information Technology Engineering, graduated from college in 2014 and ever since I've been working
              in software engineering or related fields. Spent 6+ years working on an agency that I co-founded with a friend where we
              developed software for the Mexican government, during covid and due to political POV in Mexico we decided to close the agency.
              I’ve also worked in financial services industry creating strategies to fight fraud, as a solution architect for ETL solutions, building SaaS for different industries such as health and professional services.
            </p>
            <p className={'text-white '} style={{lineHeight: 1.2}} >Born in Mexico City, raised in a little town really close to Mexico City named Texcoco, and now I’m living in Mexico City.</p>
            <p className={'text-white '} style={{lineHeight: 1.2}}>I have special interest in projects that use technology to improve health services and life quality.</p>


            <Divider white />
            <h3 className={'text-white'}>IRL</h3>
            <p className={'text-white '} style={{lineHeight: 1.2}} >
               I love music so in my free time I love to play guitar, piano and I'm also a singer. For years I've been studing music theory and I like to think
              that I have improved over time. If you would like to listen to some of my music, you can find me on streaming services as <a href={'https://open.spotify.com/artist/5j1tkGKdVdxx1KmZyrXEre?si=HCX7QQLNRGCmAapfc5SKqw'}>Lalo Palacio</a>.
            </p>
          </div>
          <section className="container text-center my-5">
            <h2>Contact</h2>
            <Divider />
            <p className={'my-4'}>You can contact me at <a href={'mailto:contact@epalacio.com.mx'}>contact@epalacio.com.mx</a> </p>
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