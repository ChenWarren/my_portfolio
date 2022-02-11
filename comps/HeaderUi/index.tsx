

const HeaderUi = () => {
  return (
    <div className='header-cont'>
        <div className='navbar'>
          <img src='./w.svg' width={60}/>
        </div>
        <div className='navbar'>
          <p>{'<Home/>'}</p>
          <p>{'<About/>'}</p>
          <p>{'<Projects/>'}</p>
          <p>{'<Contact/>'}</p>
        </div>
    </div>
  )
}

export default HeaderUi