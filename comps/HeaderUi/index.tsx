import { Link } from 'react-scroll'

const HeaderUi = () => {
  return (
    <div className='header-cont'>
        <div className='navbar'>
          <img src='./w.svg' width={60}/>
        </div>
        <div className='navbar'>
          <p>
            <Link
              activeClass = 'active' 
              to='home'
              spy={true}
              smooth={true}
            >{'<Home/>'}
            </Link>
          </p>
          <p>
            <Link
              to='about'
              spy={true}
              smooth={true}
            >
              {'<About/>'}
            </Link>
          </p>
          <p>
            <Link
              to='projects'
              spy={true}
              smooth={true}
            >
              {'<Projects/>'}
            </Link>
          </p>
          <p>
            <Link
              to='contact'
              spy={true}
              smooth={true}
            >
              {'<Contact/>'}
            </Link>
          </p>
        </div>
    </div>
  )
}

export default HeaderUi