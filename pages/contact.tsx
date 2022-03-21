import type { NextPage } from 'next'
import Head from 'next/head'
import FooterUi from '../comps/FooterUi'

import HeaderUi from '../comps/HeaderUi'
import Contact from '../views/Contact'

const ContactPage: NextPage = () => {
  return (
    <div className='main-body'>
        <Head>
            <title>Contact Full Stack Developer Warren Chen</title>
            <meta name="description" content="Version controll GitHub" />
            <link rel="icon" href="/w.svg" />
        </Head>

        <div className='flow-header'>
            <div className='container80'>
                <HeaderUi/>
            </div>
        </div>

        <div className='container80'>
            <div className='maincont'>
                <Contact/>
            </div>
        </div>
        <FooterUi/>
    </div>
  )
}

export default ContactPage