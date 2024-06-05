import {
  BotMessageSquare,
  FileText,
  Flame,
  Folder,
  Home,
  LayoutDashboard,
  Music,
  Telescope,
  Timer
} from 'lucide-react'
import ReturnMain from './components/pagesController'
import usePage from './context/PageContext'

function App(): JSX.Element {
  const { setPage } = usePage()
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
              <button
                onClick={() => {
                  setPage('Home')
                }}
                className="parent flex gap-2 items-center rounded-md justify-start px-5 py-2 duration-300"
              >
                <Home
                  className="child group-hover:text-purple-400 group-hover:text-lg text-gray-200 group-hover:-translate-y-1 duration-300"
                  size={17}
                />
                <h4 className="child group-hover:text-purple-400 text-gray-200 text-sm group-hover:-translate-y-1 duration-300">
                  Home
                </h4>
              </button>
            </div>

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

        <ReturnMain />
      </div>
    </>
  )
}

export default App
