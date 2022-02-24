import { useSpring, animated } from "react-spring"


const Descrip = () => {

  const fadeInProps = useSpring({
      to: {opacity: 1, y: 0}, 
      from: { opacity: 0, y: -50},
      delay: 600,
  })

  return (
    <animated.div style={fadeInProps} className="descrip-box">
        <div className="descrip-container">
            <div className='nb-text-tag'>{'<p>'}</div>
            <div className="descrip-text">
                <div className="descrip-text-purple">Experienced in</div>
                <div className="descrip-text-blue">Cross-platform web, and App REST API development</div>
            </div>
            <div className='nb-text-tag'>{'</p>'}</div>
        </div>
        <div className="descrip-container">
            <div className="next-link-text">next( )</div>
            <div className="next-link"/>
        </div>
    </animated.div>
  )
}

export default Descrip