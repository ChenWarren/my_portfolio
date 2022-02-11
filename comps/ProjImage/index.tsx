
const ProjImage = ({
  projUrl='',
  img1Url='',
  img2Url='',
}) => {

  const imgClick = () => {
      window.open(projUrl)        
  }

  return (
    <div className="proj-img-container" onClick={imgClick}>
        <div className="img-pad">
            <img src={img1Url} className="img-s"/>
        </div>
        <div className="img-pad">
            <img src={img2Url} className="img-s"/>
        </div>
    </div>
  )
}

export default ProjImage