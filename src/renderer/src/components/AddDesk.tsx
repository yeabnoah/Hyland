import { motion } from 'framer-motion'
import exam from '../assets/images/study.png'
import maker from '../assets/images/maker.png'
import idea from '../assets/images/idea.png'
import { FolderPlus } from 'lucide-react'
import folder from '../assets/images/folder.webp'
import '../global.css'
import { useState } from 'react'

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

const [modal, setModal] = useState(false)
function AddDesk(): JSX.Element {
  //   const { setPage } = usePage()
  return (
    <motion.div
      // variants={container}
      initial="hidden"
      animate="visible"
      className=" flex-1 mt-5 mx-5 overflow-x-hidden hide_scroll_bar overflow-y-scroll"
    >
      <motion.h2 className=" font-semibold text-lg text-gray-200">New Desk</motion.h2>

      <div className=" md:flex md:flex-row flex flex-col  md:items-center mt-5 md:mt-2 md:justify-evenly">
        <motion.div
          transition={{ delay: 0.15 }}
          variants={cards}
          whileHover={{
            scale: 1.08,
            transition: {
              duration: 0.2
            }
          }}
          className=" h-fit w-fit mt-2 md:w-56 lg:w-72 items-center rounded-md hover:cursor-pointer bg-purple-400"
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
          className=" h-fit w-fit mt-2 md:w-56 lg:w-72 items-center rounded-md hover:cursor-pointer bg-indigo-400"
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
          className=" h-fit w-fit mt-2 md:w-56 lg:w-72 items-center rounded-md hover:cursor-pointer bg-emerald-400"
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
        <div className=" mt-5 h-72 w-[30%]  mx-5 rounded-lg border-dashed">
          <motion.img variants={Start} src={folder} />
          <motion.div variants={cards} className="">
            <h2 className="text-white text-center">No folder yet ...</h2>
            <button className="group mx-20 mt-2">
              <div className=" flex items-center justify-center gap-2 bg-purple-400 py-2 px-2 rounded-md hover:-translate-y-1 duration-200 hover:bg-purple-500">
                <FolderPlus className=" text-secondary" size={18} />
                <h4 className=" text-secondary text-sm">New Folder</h4>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {modal && (
        <div className=" bg-black bg-opacity-70 h-screen absolute top-0 left-0 w-screen flex items-center justify-center">
          <div className="backdrop-blur-sm w-full h-full absolute top-0 left-0"></div>
          <div className="w-[250px] opacity-100 z-10 flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
            <div className="">
              <div className="text-center p-3 flex-auto justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 flex items-center text-gray-600 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"></path>
                </svg>
                <h2 className="text-xl font-bold py-4 text-gray-200">Are you sure?</h2>
                <p className="text-sm text-gray-500 px-2">
                  Do you really want to delete your account? This process cannot be undone
                </p>
              </div>
              <div className="p-2 mt-2 text-center space-x-1 md:block">
                <button className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
                  Cancel
                </button>
                <button className="bg-purple-400 hover:bg-purple-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full transition ease-in duration-300">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default AddDesk
