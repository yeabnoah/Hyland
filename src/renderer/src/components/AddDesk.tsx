import useModal from '@renderer/context/modalContext'
import { motion } from 'framer-motion'
import exam from '../assets/images/study.png'
import maker from '../assets/images/maker.png'
import idea from '../assets/images/idea.png'
import { FolderPlus } from 'lucide-react'
import folder from '../assets/images/folder.webp'
import '../global.css'
import Modal from './Modal'

const cards = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const cardImage = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

const CardText = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const LeftStart = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    x: 0,
    opacity: 1
  }
}
const Start = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3
    }
  }
}

function AddDesk(): JSX.Element {
  const { setIsShowing } = useModal()
  return (
    <motion.div
      // variants={container}
      initial="hidden"
      animate="visible"
      className=" flex-1 mt-5 mx-5 overflow-x-hidden hide_scroll_bar overflow-y-scroll"
    >
      <motion.h2 className=" font-semibold text-lg text-gray-200">New Desk</motion.h2>
      <div className=" md:flex md:flex-row flex flex-wrap  md:items-center mt-5 md:mt-2 md:justify-evenly">
        <motion.div
          transition={{ delay: 0.15 }}
          variants={cards}
          whileHover={{
            scale: 1.08,
            transition: {
              duration: 0.2
            }
          }}
          className=" h-fit w-72 md:w-80 mt-2 items-center rounded-md hover:cursor-pointer bg-purple-400"
        >
          <motion.div
            variants={LeftStart}
            transition={{ delay: 0.22 }}
            className=" text-white md:text-lg font-semibold px-3 py-1 border-black border-b-2"
          >
            New Study Desk
          </motion.div>
          <div className=" justify-between mr-5 flex items-center">
            <motion.h2
              transition={{ delay: 0.22 }}
              variants={CardText}
              className=" text-xs mx-5 font-semibold"
            >
              Start a new desk for your productive study
            </motion.h2>
            <motion.img
              transition={{ delay: 0.19 }}
              variants={cardImage}
              src={exam}
              className=" h-16 w-max justify-center items-center"
            />
          </div>
        </motion.div>

        <motion.div
          transition={{ delay: 0.33 }}
          variants={cards}
          whileHover={{
            scale: 1.08,
            transition: {
              duration: 0.2
            }
          }}
          className=" h-fit w-72 md:w-80 mt-2 md:w-56 lg:w-72 items-center rounded-md hover:cursor-pointer bg-indigo-400"
        >
          <motion.div
            variants={LeftStart}
            transition={{ delay: 0.39 }}
            className=" text-white md:text-lg font-semibold px-3 py-1 border-black border-b-2"
          >
            New Project
          </motion.div>
          <div className=" justify-between mr-5 flex items-center">
            <motion.h2
              transition={{ delay: 0.39 }}
              variants={CardText}
              className=" text-xs mx-5 font-semibold"
            >
              Start creating and Managing your projects here
            </motion.h2>
            <motion.img
              transition={{ delay: 0.39 }}
              variants={cardImage}
              src={maker}
              className=" h-16 w-max justify-center items-center"
            />
          </div>
        </motion.div>

        <motion.div
          transition={{ delay: 0.47 }}
          variants={cards}
          whileHover={{
            scale: 1.08,
            transition: {
              duration: 0.2
            }
          }}
          className=" h-fit w-72 md:w-80 mt-2 md:w-56 lg:w-72 items-center rounded-md hover:cursor-pointer bg-emerald-400"
        >
          <motion.div
            variants={LeftStart}
            transition={{ delay: 0.62 }}
            className=" text-white md:text-lg font-semibold px-3 py-1 border-black border-b-2"
          >
            Idea Bank
          </motion.div>
          <div className=" justify-between mr-5 flex items-center">
            <motion.h2
              transition={{ delay: 0.62 }}
              variants={CardText}
              className=" text-xs mx-5 font-semibold"
            >
              Store and Track your ideas here
            </motion.h2>
            <motion.img
              transition={{ delay: 0.59 }}
              variants={cardImage}
              src={idea}
              className=" h-16 w-max justify-center items-center"
            />
          </div>
        </motion.div>
      </div>

      <motion.div variants={cards} className=" mt-10">
        <div className=" flex gap-2 items-center">
          <motion.div
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.2
              }
            }}
            className=" bg-purple-500 rounded-full p-[5px]"
          >
            <FolderPlus size={18} className=" text-white rounded-full" />
          </motion.div>

          <h2 className=" text-white font-semibold">Start By Creating Folder</h2>
        </div>
      </motion.div>

      <div className=" flex w-[90%] justify-center items-center">
        <div className=" mt-5 h-72 md:w-[30%]  mx-5 rounded-lg border-dashed">
          <motion.img variants={Start} src={folder} />
          <motion.div variants={cards} className="">
            <h2 className="text-white text-center">No folder yet ...</h2>
            <div className=" flex justify-center items-center">
              <button
                onClick={() => {
                  setIsShowing(true)
                }}
                className="group mt-2"
              >
                <div className=" flex items-center w-36 justify-center gap-2 bg-purple-400 py-2 px-2 rounded-md hover:-translate-y-1 duration-200 hover:bg-purple-500">
                  <FolderPlus className=" text-secondary" size={18} />
                  <h4 className=" text-secondary text-sm">New Folder</h4>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Modal />
    </motion.div>
  )
}

export default AddDesk
