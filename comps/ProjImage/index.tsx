import { useSpring, animated } from "react-spring"

const ProjImage = ({
  projUrl='',
  img1Url='',
  img2Url='',
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
        <div className="img-pad">
            <img src={img1Url} className="img-s"/>
        </div>
        <div className="img-pad">
            <img src={img2Url} className="img-s"/>
        </div>
    </animated.div>
  )
}

export default ProjImage