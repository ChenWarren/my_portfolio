import type { NextPage } from 'next'
import Head from 'next/head'
import { headLogo } from '../data/config'
import HeaderUi from '../comps/HeaderUi'
import MainUi from '../views/MainUi'
import FeatureProjects from '../views/FeatureProjects'
import Techs from '../views/Techs'
import FooterUi from '../comps/FooterUi'
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <div className='main-body'>
          <Head>
              <title>Full Stack Web Developer - Warren Chen</title>
              <meta name="description" content="Full stack web developer porfolio website of - Warren Chen " />
              <link rel="icon" href={headLogo} />
              {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-L9WH002XX4"></script>
              <script>
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-L9WH002XX4');
                `}
              </script>
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
                    <p className="section-title">{'<Feature Projects/>'}</p>
                </div>

                <FeatureProjects/>

                <div className="box-center">
                    <Link href='/projects' passHref>
                        <p className="button-style font-size-15">{'<More Projects/>'}</p>
                    </Link>
                </div>

                <div className="thin-line"/>

                <Techs/>

              </div>  

          </div>

          <FooterUi/>

          
        </div>
    )
}

export default Home
