import ListsUi from "../../comps/ListsUi"

const Techs = () => {

  const front_end = ['React.js', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'HTML/CSS' ] 
  const back_end = ['Node.js', 'Express.js', 'TypeScript', 'MongoDB','MySQL','PHP','Flask/Python', 'Socket.Io', 'AWS'] 
  const ux_ui = ['Figma', 'Illustrator', 'InDesign', 'After Effects', 'Photoshop','Premiere Pro'] 


  return (
    <div className="projects-container">
        <div className="main-header ">
            <p className="section-title">{'<Technologies/>'}</p>
        </div>
        <div className="techs-main-container">
            <div className="techs-col">
              <ListsUi title="Front-End" lists={front_end}/>
            </div>
            <div className="techs-col">
              <ListsUi title="Bak-End" lists={back_end}/>
            </div>
            <div className="techs-col">
              <ListsUi title="UX/UI" lists={ux_ui}/>
            </div>
            
        </div>
    </div>
  )
}

export default Techs