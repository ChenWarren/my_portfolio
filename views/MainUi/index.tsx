import NameBox from "../../comps/NameBox"
import Descrip from "../../comps/Descrip"

const MainUi = () => {
  return (
    <div className="main-container">
        <div className="main-col">
            <NameBox/>
        </div>
        <div className="main-col">
            <Descrip/>
        </div>
    </div>
  )
}

export default MainUi