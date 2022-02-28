import { useEffect, useState } from "react"

import ProjImage from "../../comps/ProjImage"
import ProjImage2 from "../../comps/ProjImage2"
import ProjDes from "../../comps/ProjDes"


const Projects = () => {

    const [windowSize, setWindowSize] = useState(0)

    useEffect(() => {
        if(typeof window !== 'undefined') {
           setWindowSize(window.innerWidth)
        } 
    }, [])

    return (
        <div className="projects-container">
            <div className="main-header ">
                <p className="section-title">{'<Projects/>'}</p>
            </div>
            {/* BuzzyBee */}
            <div className="main-container hight500">
                <div className="projects-col">
                    <ProjImage 
                        img1Url="./buzzy-1.png" 
                        img2Url="./buzzy-2.png" 
                        projUrl="https://www.youtube.com/watch?v=cdwOn_FVBLU"
                    />
                </div>
                <div className="projects-col">
                    <ProjDes 
                        projName="BuzzyBee" 
                        projDes='"It is a tasks management mobile app for multiple users on a group base. React Native, PHP, MySQL, GitHub"' 
                        projRole='"Full-stack developer"'
                    />
                </div>
            </div>
            {/* Moview */}
            { windowSize < 600 ?
                <div className="main-container hight500">
                    <div className="projects-col">
                        <ProjImage2 projUrl="https://www.moview.dev/"/>
                    </div>
                    <div className="projects-col">
                        <ProjDes 
                            projName="Moview" 
                            projDes='"A movie info web for browsing trending movies. Developed with third-party API to provide data to the frontend. Next.js, Node.js, Sass, GitHub"' 
                            projRole='"Full-stact developer."'
                        />
                    </div>
                </div>
                :
                <div className="main-container hight500">
                    <div className="projects-col">
                        <ProjDes 
                            projName="Moview" 
                            projDes='"A movie info web for browning trending movies. Developed with third-party API to provide data to the frontend. Next.js, Node.js, Sass, GitHub"' 
                            projRole='"Full-stact developer."'
                        />
                    </div>
                    <div className="projects-col">
                        <ProjImage2 projUrl="https://www.moview.dev/"/>
                    </div>
                </div>
            }
            {/* Edu-Ocean */}
            <div className="main-container hight500">
                <div className="projects-col">
                    <ProjImage 
                        img1Url="./edo-1.png"
                        img2Url="./edo-2.png"
                        projUrl="https://ocean-project-deploy.vercel.app/"
                    />
                </div>
                <div className="projects-col">
                    <ProjDes projName="Edu-ocean" projDes='"It is an ocean protection knowledge mobile web. React, Next.js, Node.js,GitHub"' projRole='"Designer & full-stack developer"'/>
                </div>
            </div>
        </div>
  )
}

export default Projects