import AboutDes from "../../comps/AboutDes"
import Avatar from "../../comps/Avatar"


const About = () => {
  return (
    <div className="projects-container">
        <div className="main-header ">
            <p className="section-title">{'<About/>'}</p>
        </div>
        <div className="main-container hight500">
            <div className="about-col">
                <div className="about-container">
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
    </div>
  )
}

export default About