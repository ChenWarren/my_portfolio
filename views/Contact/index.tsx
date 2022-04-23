
const Contact = () => {
  return (
    <div className="projects-container">
        <div className="contact-container">
            <SmIcon iconUrl="./Linkedin-icon.png" iconLink="https://www.linkedin.com/in/warren-chen-a9187120b/"/>
            <SmIcon iconUrl="./github-logo.png" bg="bg-github" iconLink="https://github.com/ChenWarren"/>
            <SmIcon iconUrl="./email-icon.png" iconLink="mailto:warren.chen.cn@gmail.com"/>
        </div>
    </div>
  )
}

export default Contact


const SmIcon = ({
    iconUrl='',
    iconLink='',
    bg=''
}) => {

    const iconClick = () => {
        window.open(iconLink)
    }

    return (
        <div className={`icon-container ${bg}`} onClick={iconClick}>
            <img src={iconUrl} className="icon"/>
        </div>
    )
}