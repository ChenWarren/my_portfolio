import projects from "../../data/projects"

import ProjImage from "../../comps/ProjImage"
import ProjDes from "../../comps/ProjDes"


const FeatureProjects = () => {

    return (
        <div className="projects-container">

            { projects.slice(0,3).map((project)=>{
                return(
                    <div className="main-container hight500" key={project.id}>
                        <div className="projects-col">
                            <ProjDes
                                projName={project.title}
                                projDes={project.description}
                                projRole={project.role}
                                demoUrl={project.url}
                                gitHubUrl={project.github}
                            />
                        </div>
                        <div className="projects-col">
                            <ProjImage
                                imgUrl={project.image}
                                projUrl={project.url}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
  )
}

export default FeatureProjects