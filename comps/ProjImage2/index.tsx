
const ProjImage2 = ({
    projUrl='',
}) => {

    const imgClick = () => {
        window.open(projUrl)        
    }

    return (
      <div className="proj-img-container" onClick={imgClick}>
          <div className="img-pad-l">
              <img src="./moview.png" className="img-l"/>
          </div>
      </div>
    )
  }
  
  export default ProjImage2