
const ProjDes = ({
  projName='',
  projDes= '',
  projRole='',
}) => {
  return (
    <div className="proj-des-container">
        <div className="proj-des-h">
            <div className="color-green">{projName}</div>
            <div className="color-gray padding-left-5">{'= {'}</div>
        </div>
        <div className="proj-des-body padding-top-10">
            <div className="color-gray">description: </div>
            <div className="color-orange line-hight20 padding-left-5">{projDes}</div>
        </div>
        <div className="proj-des-body padding-top-10">
            <div className="color-gray">my role:</div>
            <div className="color-blue padding-left-5">{projRole}</div>
        </div>
        <div className="color-gray padding-top-10">{'}'}</div>
    </div>
  )
}

export default ProjDes