import { useSpring, animated } from "react-spring"

const NameBox = () => {

  const fadeInProps = useSpring({
      to: {opacity: 1, y: 0}, 
      from: { opacity: 0, y: -50},
      delay: 600,
  })

  return (
    <animated.div style={fadeInProps} className='name-box'>
        <div className='nb-text-container'>
            <img src='./name.svg' className='name-img-xl'/>
        </div>
        <div className='nb-text-container'>
            <div className='nb-text-tag'>{'<h1>'}</div>
            <div className='nb-text'>Full-stack Developer</div>
            <div className='nb-text-tag'>{'<h1/>'}</div>
        </div>
    </animated.div>
  )
}

export default NameBox