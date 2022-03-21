import Link from "next/link"

const FooterUi = () => {
  return (
    <footer className='foot'>
      <div className="thin-line"/>
        <div className='container80'>
          <div className="footer-container">
            <div>
              <p>&copy; 2022 Warren Chen</p>
            </div>
            <div className="footer-menu-wrapper">
              <Link href='/terms'>
                <div className="footer-menu-item">
                  Terms and Conditions
                </div>
              </Link>
              <Link href='/privacy'>
                <div className="footer-menu-item">
                  Privacy Policy
                </div>
              </Link>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default FooterUi