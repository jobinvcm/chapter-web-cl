
import Image from 'next/image'

const imageUrl = "https://images.unsplash.com/photo-1732629075605-4b63ab3a26cf?q=80&w=1607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function RemoteImage() {
  return (
    <Image
      src={imageUrl}
      alt="Remote Image"
      width={800}
      height={600}
    />
  )
}
