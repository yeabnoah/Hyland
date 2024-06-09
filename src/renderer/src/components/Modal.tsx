import useModal from '@renderer/context/modalContext'
import { FC } from 'react'
import { motion } from 'framer-motion'
import folder from '../assets/images/folderr.png'

const modal = {
  hidden: {
    opacity: 0,
    // scale: 2,
    y: -50
  },
  visible: {
    y: 0,
    opacity: 1,
    // scale: 1,
    transition: {
      delay: 0.2,
      delayChildren: 0.9,
      staggerChildren: 0.2,
      duration: 0.2
    }
  }
}

const Modal: FC = () => {
  const { isShowing, setIsShowing } = useModal()
  return (
    <div>
      {isShowing && (
        <div
          //   variants={modal}
          className="bg-black bg-opacity-70 h-screen absolute top-0 left-0 w-screen flex items-center justify-center"
        >
          <div className="backdrop-blur-sm w-full h-full absolute top-0 left-0"></div>
          <motion.div
            variants={modal}
            className="w-[450px] mx-5 mid:mx-0 opacity-100 z-10 flex flex-col p-2 mid:p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl"
          >
            <div>
              <div className="text-center md:p-3 flex-auto justify-center">
                <img src={folder} className="w-12 h-12 flex items-center text-gray-600 mx-auto" />

                <h2 className="mid:text-xl font-bold py-4 text-base text-gray-200">
                  What Do You wanna Call Your Folder
                </h2>

                <input className=" outline-none py-2 w-[90%] rounded-lg bg-black text-white px-5" />
                <p className="mid:text-sm text-xs text-gray-500 px-2">
                  Once you created a folder You can use them to store your study materials and
                  projects related files.
                </p>
              </div>
              <div className="p-2 mt-2 text-center space-x-1 md:block">
                <button
                  onClick={() => {
                    setIsShowing(!isShowing)
                  }}
                  className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    setIsShowing(false)
                  }}
                  className="bg-purple-400 hover:bg-purple-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full transition ease-in duration-300"
                >
                  Confirm
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Modal
