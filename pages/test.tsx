import { useSpring, animated } from 'react-spring'


const test = () => {

  const props = useSpring({ to: {opacity: 1, y: 0}, from: { opacity: 0, y: -10}})
  return (
    <animated.div style={props}>
      test
    </animated.div>
  )
}

export default test