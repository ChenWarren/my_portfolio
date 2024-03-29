import { useSpring, animated } from "react-spring"
import Image from "next/image"

const ProjImage = ({
    projUrl='',
    imgUrl='/moview.png',
}) => {

    const imgClick = () => {
        window.open(projUrl)        
    }

    const transPare = useSpring({ 
        to: { opacity: 1},
        from: { opacity: 0},
        delay: 600, 
      })

    return (
      <animated.div style={transPare} className="proj-img-container" onClick={imgClick}>
          <div className="img-pad-l">
              <img src={imgUrl} className="img-l"/>
          </div>
      </animated.div>
    )
  }
  
  export default ProjImage