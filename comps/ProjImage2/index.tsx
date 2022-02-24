import { useSpring, animated } from "react-spring"

const ProjImage2 = ({
    projUrl='',
}) => {

    const imgClick = () => {
        window.open(projUrl)        
    }

    const transPare = useSpring({ 
        to: { opacity: 1},
        from: { opacity: 0},
        delay: 800, 
      })

    return (
      <animated.div style={transPare} className="proj-img-container" onClick={imgClick}>
          <div className="img-pad-l">
              <img src="./moview.png" className="img-l"/>
          </div>
      </animated.div>
    )
  }
  
  export default ProjImage2