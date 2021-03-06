import { useSpring, animated } from "react-spring"

const ProjDes = ({
  projName='',
  projDes= '',
  projRole='',
  demoUrl='',
  gitHubUrl='',
}) => {

  const demoClick = () => {
      window.open(demoUrl)        
  }

  const gitHubClick = () => {
      window.open(gitHubUrl)        
  }

  const transPare = useSpring({ 
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 500, 
  })

  return (
    <animated.div style={transPare} className="proj-des-container">
        <div className="proj-des-h">
            <div className="color-gray padding-left-5">{'{'}</div>
        </div>
        <div className="proj-des-body padding-top-10">
            <div className="color-gray margin-bottom-10">projectName:</div>
            <div className="color-blue padding-left-5 margin-bottom-10 font-size-15">{projName}</div>
        </div>
        <div className="proj-des-body padding-top-10">
            <div className="color-gray margin-bottom-10">description: </div>
            <div className="color-orange line-hight20 padding-left-5 margin-bottom-10">{projDes}</div>
        </div>
        <div className="proj-des-body padding-top-10">
            <div className="color-gray margin-bottom-10">myRole:</div>
            <div className="color-blue padding-left-5 margin-bottom-10">{projRole}</div>
        </div>
        <div className="color-gray padding-top-10">{'}'}</div>
        <div className="button-wrapper">
          <div className="button-style" onClick={demoClick}>{'<Demo/>'}</div>
          <div className="button-style" onClick={gitHubClick}>{'<GitHub/>'}</div>
        </div>
    </animated.div>
  )
}

export default ProjDes