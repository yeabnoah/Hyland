import { FC } from 'react'
import notFound from '../assets/images/not.png'
import { PlusSquare } from 'lucide-react'
import usePage from '@renderer/context/PageContext'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const image = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}
const DeskHistory: FC = () => {
  const { setPage } = usePage()
  return (
    <motion.div variants={container} className=" flex-1 mt-5 mx-5">
      <h2 className=" font-semibold text-lg text-purple-500">Desk History</h2>

      <motion.div variants={image} className=" justify-center flex items-center">
        <img src={notFound} className=" h-44 w-max mt-[20%] justify-center items-center" />
      </motion.div>
      <div className=" justify-center flex items-center">
        <div>
          <h4 className=" text-gray-200 mt-5">you dont have a desk history yet</h4>
          <button onClick={() => [setPage('History')]} className="group mx-10 mt-2">
            <div className=" flex items-center justify-center gap-2 bg-purple-200 py-1 px-2 rounded-md hover:-translate-y-1 duration-200 hover:bg-purple-500">
              <PlusSquare className=" text-secondary" size={18} />
              <h4 className=" text-secondary text-sm">Create New Desk</h4>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default DeskHistory
