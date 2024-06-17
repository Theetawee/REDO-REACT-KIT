import { FaRegSmileWink } from "react-icons/fa";


const Welcome = () => {
  return (
    <div className="flex h-32 items-center justify-center">
        <FaRegSmileWink className="w-6 h-6 text-yellow-400 mr-1"/>
        <h1 className="text-2xl">Welcome to Redo React-Kit</h1>
    </div>
  )
}

export default Welcome