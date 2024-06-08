import { History, Import, PlusSquare } from 'lucide-react'
import study from '../assets/images/bag.png'
import usePage from '@renderer/context/PageContext'
import { motion } from 'framer-motion'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const image = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
}

function NewDesk(): JSX.Element {
  const { setPage } = usePage()
  return (
    <motion.div
      // variants={container}
      initial="hidden"
      animate="visible"
      className=" flex-1 mt-5 mx-5"
    >
      <motion.h2 variants={item} className=" font-semibold text-lg text-gray-200">
        My Desk
      </motion.h2>

      <motion.div variants={image} className=" justify-center flex items-center">
        <img src={study} className=" h-64 w-max mt-[10%] justify-center items-center" />
      </motion.div>

      <div className=" flex justify-center items-center">
        <div className=" flex gap-2">
          <button className="group">
            <div className=" flex items-center hover:-translate-y-1 duration-200 justify-center gap-2 hover:bg-purple-500 bg-indigo-400 py-2 px-2 rounded-md">
              <Import className=" text-secondary" size={18} />
              <h4 className=" text-secondary text-sm">Import Desk</h4>
            </div>
          </button>

          <button
            onClick={() => {
              setPage('Add')
            }}
            className="group"
          >
            <div className=" flex items-center justify-center gap-2 bg-yellow-400 py-2 px-2 rounded-md hover:-translate-y-1 duration-200 hover:bg-purple-500">
              <PlusSquare className=" text-secondary" size={18} />
              <h4 className=" text-secondary text-sm">New Desk</h4>
            </div>
          </button>
          <button onClick={() => [setPage('History')]} className="group">
            <div className=" flex items-center justify-center gap-2 bg-pink-400 py-2 px-2 rounded-md hover:-translate-y-1 duration-200 hover:bg-purple-500">
              <History className=" text-secondary" size={18} />
              <h4 className=" text-secondary text-sm">History</h4>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default NewDesk
