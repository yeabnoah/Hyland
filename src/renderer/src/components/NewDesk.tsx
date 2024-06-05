import { History, Import, PlusSquare } from 'lucide-react'
import study from '../assets/images/bg-study.svg'
import usePage from '@renderer/context/PageContext'
import { motion } from 'framer-motion'

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// }

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
        <img src={study} className=" h-52 w-max mt-[16%] justify-center items-center" />
      </motion.div>

      <div className=" flex justify-center items-center">
        <div className=" flex gap-2">
          <button className="group">
            <div className=" flex items-center hover:-translate-y-1 duration-200 justify-center gap-2 hover:bg-purple-500 bg-purple-200 py-2 px-2 rounded-md">
              <Import className=" text-secondary" size={18} />
              <h4 className=" text-secondary text-sm">Import Desk</h4>
            </div>
          </button>

          <button className="group">
            <div className=" flex items-center justify-center gap-2 bg-purple-200 py-2 px-2 rounded-md hover:-translate-y-1 duration-200 hover:bg-purple-500">
              <PlusSquare className=" text-secondary" size={18} />
              <h4 className=" text-secondary text-sm">New Desk</h4>
            </div>
          </button>
          <button onClick={() => [setPage('History')]} className="group">
            <div className=" flex items-center justify-center gap-2 bg-purple-200 py-2 px-2 rounded-md hover:-translate-y-1 duration-200 hover:bg-purple-500">
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
