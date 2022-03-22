import type { NextPage } from 'next'
import Head from 'next/head'

import HeaderUi from '../comps/HeaderUi'
import AboutDes from "../comps/AboutDes"
import Avatar from "../comps/Avatar"
import FooterUi from '../comps/FooterUi'
import Contact from '../views/Contact'


const About: NextPage = () => {
  return (
    <div className='main-body'>
        <Head>
            <title>About Warren Chen Full Stack Web Developer</title>
            <meta name="description" content="Front-End Back-End developer UX/UI designer Problems solving" />
            <link rel="icon" href="/w.svg" />
        </Head>

        <div className='flow-header'>
            <div className='container80'>
                <HeaderUi/>
            </div>
        </div>

        <div className='container80'>
            
            <div className='maincont'>

                <div className="projects-container">
                    <div className="main-container hight500">
                        <div className="about-col">
                            <div>
                                <Avatar/>
                                <div className="name-obj">
                                    <div className="color-gray">{'{'}</div>
                                    <div className="name-row padding-left-10p padding-top-10 font-size-12">
                                        <div className="color-gray">{'firstname: '}</div>
                                        <div className="color-orange padding-left-5">{'Warren'}</div>
                                    </div>
                                    <div className="name-row padding-left-10p padding-top-10 font-size-12">
                                        <div className="color-gray">{'lastname: '}</div>
                                        <div className="color-orange padding-left-5">{'Chen'}</div>
                                    </div>
                                    <div className="color-gray padding-top-10">{'}'}</div>
                                </div>
                            </div>
                        </div>
                        <div className="about-col">
                            <AboutDes/>
                        </div>
                    </div>
                    <Contact/>
                </div>
            </div>
        </div>
        <FooterUi/>
    </div>
  )
}

export default About