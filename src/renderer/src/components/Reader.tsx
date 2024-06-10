import { FC } from 'react'
import { motion } from 'framer-motion'
import folder from '../assets/images/fold.png'
import { FolderClock } from 'lucide-react'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.03
    }
  }
}

const LetStart = {
  hidden: {
    x: -40,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}
const Reader: FC = () => {
  return (
    <motion.div className=" flex-1">
      <motion.div variants={item} initial="hidden" animate="visible" className=" flex-1 mt-5 mx-5">
        <motion.h2 className=" font-semibold text-lg text-gray-200">Reader</motion.h2>
      </motion.div>

      <div className=" mx-5">
        <motion.div
          variants={LetStart}
          initial="hidden"
          animate="visible"
          className=" flex items-center gap-2 mt-5 mx-5"
        >
          <FolderClock className=" text-white" size={18} />
          <h3 className="text-base text-white">Latest Reads</h3>
        </motion.div>

        <div className=" bg-purple-500 w-[40%] h-14 mx-5 mt-5 rounded-md">
          <div className=" flex px-2 items-center">
            <div className=" border-r-2 pr-2 border-r-black">
              <img src={folder} className=" h-fit w-12" />
            </div>
            <div></div>
          </div>
        </div>

        <div className=" bg-purple-500 w-[40%] h-14 mx-5 mt-5 rounded-md">
          <div className=" flex px-2 items-center">
            <div className=" border-r-2 pr-2 border-r-black">
              <img src={folder} className=" h-fit w-12" />
            </div>
            <div></div>
          </div>
        </div>

        <div className=" bg-purple-500 w-[40%] h-14 mx-5 mt-5 rounded-md">
          <div className=" flex px-2 items-center">
            <div className=" border-r-2 pr-2 border-r-black">
              <img src={folder} className=" h-fit w-12" />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Reader
