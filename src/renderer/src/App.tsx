import {
  BotMessageSquare,
  FileText,
  Flame,
  Folder,
  History,
  Import,
  LayoutDashboard,
  Music,
  PlusSquare,
  Telescope,
  Timer
} from 'lucide-react'
import study from './assets/images/bg-study.svg'

function App(): JSX.Element {
  return (
    <>
      <div className=" flex bg-cover h-screen w-screen">
        <div className="h-full w-56 flex flex-col transition-transform transform px-5 py-5">
          <div className=" flex justify-start items-center text-gray-200 gap-2">
            <Flame className=" text-purple-400" />
            <h4 className="  text-purple-400">Shama Studies</h4>
          </div>

          <div className=" mt-7 flex gap-2 items-center">
            <LayoutDashboard className=" text-gray-200" size={17} />
            <h4 className=" text-gray-200 text-sm">Tools</h4>
          </div>

          <div className=" mt-3">
            <div className="group">
              <button className="parent flex gap-2 items-center rounded-md justify-start px-5 py-2 duration-300">
                <FileText
                  className="child group-hover:text-purple-400 group-hover:text-lg text-gray-200 group-hover:-translate-y-1 duration-300"
                  size={17}
                />
                <h4 className="child group-hover:text-purple-400 text-gray-200 text-sm group-hover:-translate-y-1 duration-300">
                  Reader
                </h4>
              </button>
            </div>

            <div className="group">
              <button className="parent flex gap-2 items-center rounded-md justify-start px-5 py-2 duration-300">
                <Music
                  className="child group-hover:text-purple-400 group-hover:text-lg text-gray-200 group-hover:-translate-y-1 duration-300"
                  size={17}
                />
                <h4 className="child group-hover:text-purple-400 text-gray-200 text-sm group-hover:-translate-y-1 duration-300">
                  Music
                </h4>
              </button>
            </div>

            <div className="group">
              <button className="parent flex gap-2 items-center rounded-md justify-start px-5 py-2 duration-300">
                <Timer
                  className="child group-hover:text-purple-400 group-hover:text-lg text-gray-200 group-hover:-translate-y-1 duration-300"
                  size={17}
                />
                <h4 className="child group-hover:text-purple-400 text-gray-200 text-sm group-hover:-translate-y-1 duration-300">
                  Timer
                </h4>
              </button>
            </div>

            <div className="group">
              <button className="parent flex gap-2 items-center rounded-md justify-start px-5 py-2 duration-300">
                <Folder
                  className="child group-hover:text-purple-400 group-hover:text-lg text-gray-200 group-hover:-translate-y-1 duration-300"
                  size={17}
                />
                <h4 className="child group-hover:text-purple-400 text-gray-200 text-sm group-hover:-translate-y-1 duration-300">
                  My Drive
                </h4>
              </button>
            </div>

            <div className="group">
              <button className="parent flex gap-2 items-center rounded-md justify-start px-5 py-2 duration-300">
                <BotMessageSquare
                  className="child group-hover:text-purple-400 group-hover:text-lg text-gray-200 group-hover:-translate-y-1 duration-300"
                  size={17}
                />
                <h4 className="child group-hover:text-purple-400 text-gray-200 text-sm group-hover:-translate-y-1 duration-300">
                  Buddy
                </h4>
              </button>
            </div>
          </div>

          <div className=" mt-5 flex gap-2 items-center">
            <Telescope className=" text-gray-200" size={17} />
            <h4 className=" text-gray-200 text-sm">Explore</h4>
          </div>
        </div>

        <div className="flex-1 mt-5 mx-5">
          <h2 className=" font-semibold text-xl text-gray-200">My Desk</h2>

          <div className=" justify-center flex items-center">
            <img src={study} className=" h-52 w-max mt-[16%] justify-center items-center" />
          </div>

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
              <button className="group">
                <div className=" flex items-center justify-center gap-2 bg-purple-200 py-2 px-2 rounded-md hover:-translate-y-1 duration-200 hover:bg-purple-500">
                  <History className=" text-secondary" size={18} />
                  <h4 className=" text-secondary text-sm">History</h4>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
