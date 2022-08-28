import Image from "next/image"

const Avatar = () => {
  return (
    <div className="avatar-container">
        <Image src="/wchen.jpg" width={180} height={180} className="avatar" />
    </div>
  )
}

export default Avatar