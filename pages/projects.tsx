import type { NextPage } from 'next'
import Head from 'next/head'

import HeaderUi from '../comps/HeaderUi'
import Projects from '../views/Projects'

const ProjectsPage: NextPage = () => {
  return (
    <div className='main-body'>
        <Head>
            <title>Projects of Full Stack Web Developer  - Warren Chen</title>
            <meta name="description" content="Porject experiencs Node.js Next.js React React Native Express.js MongoDB MySQL TypeScript PHP AWS Socket.Io JavaScript HTML CSS Figma IOS" />
            <link rel="icon" href="/w.svg" />
        </Head>

        <div className='flow-header'>
            <div className='container80'>
                <HeaderUi/>
            </div>
        </div>

        <div className='container80'>
            <div className='maincont'>
                <Projects/>
            </div>
        </div>
    </div>
  )
}

export default ProjectsPage