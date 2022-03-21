import type { NextPage } from 'next'
import Head from 'next/head'

import HeaderUi from '../comps/HeaderUi'
import MainUi from '../views/MainUi'
import Projects from '../views/Projects'
import Techs from '../views/Techs'
import Contact from '../views/Contact'
import FooterUi from '../comps/FooterUi'

const Home: NextPage = () => {
    return (
        <div className='main-body'>
          <Head>
              <title>Full Stack Web Developer - Warren Chen</title>
              <meta name="description" content="Full stack web developer porfolio website of - Warren Chen " />
              <link rel="icon" href="/w.svg" />
          </Head>

          <div className='flow-header'>
            <div className='container80'>
              <HeaderUi/>
            </div>
          </div>

          <div className='container80'>

              <div className='maincont'>

                <MainUi/>

                <div className='divider'></div>
                <div className="thin-line"/>
                <div className="main-header ">
                    <p className="section-title">{'<Projects/>'}</p>
                </div>
                <Projects/>
                <div className="thin-line"/>
                <Techs/>

              </div>  

          </div>

          <FooterUi/>

          
        </div>
    )
}

export default Home
