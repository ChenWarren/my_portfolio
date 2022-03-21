import Link from "next/link"
import { useState } from "react"

const HeaderUi = () => {

  const [showingMenu, setShowingMenu] = useState(false)

  const menu = [
    { label: '<Home/>', url: '/'},
    { label: '<Projects/>', url: '/projects'},
    { label: '<About/>', url: '/about'},
    { label: '<Contact/>', url: '/contact'},
  ]

  const menuHandler = () => {
      setShowingMenu(!showingMenu)
      console.log(showingMenu)
  }

  return (
    <div className='header-cont'>
        <div className='navbar-l'>
          <img src='./w.svg' className='logo-img'/>
        </div>

        <div className='navbar-r'>
          {menu.map((item)=>(
            <div key={item.label}>
              <Link href={item.url}>
                <p className="nav-item">
                  {item.label}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="hem-menu">
          {showingMenu?
            null
            :
            <div onClick={menuHandler}>
              <img src="./menu.svg" className="hem-bar"/>
            </div>
          }
        </div>

        { showingMenu? 
          <div className="showing-menu">
            <div onClick={menuHandler} className="menu-head">
              <img src="./close.svg" className="close-sign"/>
            </div>

            {menu.map((item)=>(
              <div key={item.label} className="showing-menu-wrapper">
                <Link href={item.url}>
                  <p className="showing-menu-item">
                    {item.label}
                  </p>
                </Link>
              </div>
            ))}

          </div>
          :
          null
        }

    </div>
  )
}

export default HeaderUi