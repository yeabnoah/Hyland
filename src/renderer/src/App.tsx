import { useState } from 'react'
import mavric from './assets/images/jjj.jpg'
import { CalendarHeart, HardDrive, Menu, PlusSquare, Search } from 'lucide-react'
// import SideBar from './components/sidebar'

function App(): JSX.Element {
  const [sidebar, setSideBar] = useState<boolean>(true)
  const [sidebarSmall, setSideBarSmall] = useState<boolean>(false)

  const handleSidebar = (): void => {
    setSideBar(false)
    setSideBarSmall(true)
  }

  const handleSidebarSmall = (): void => {
    setSideBarSmall(false)
    setSideBar(true)
  }

  return (
    <>
      <div className=" bg-gradient-to-tr flex test  from-indigo-400 via-purple-500 to-fuchsia-500 bg-cover h-screen w-screen">
        <div
          className={`h-full w-56 flex flex-col justify-between  transition-transform transform  bg-text1 ${sidebar ? 'block' : 'hidden'}`}
        >
          <div className=" flex justify-between mx-5 items-center mt-5">
            <h3 className=" text-purple-400  text-xl font-extrabold">Hyland</h3>
            <Menu onClick={handleSidebar} className=" text-white" size={18} />
          </div>

          <div className=" justify-start flex items-center my-5">
            <div className=" flex-col flex w-full">
              <button className=" bg-gradient-to-r justify-center gap-2 items-center flex from-indigo-500 to-purple-500 py-[5px] mx-5 my-1 rounded-md">
                <CalendarHeart size={18} />
                Favorites
              </button>
              <button className=" bg-gradient-to-r justify-center gap-2 items-center flex from-indigo-500 to-purple-500 py-[5px] mx-5 my-1 rounded-md">
                <HardDrive size={18} />
                My Drive
              </button>
              <button className=" bg-gradient-to-r justify-center gap-2 items-center flex from-indigo-500 to-purple-500 py-[5px] mx-5 my-1 rounded-md">
                <PlusSquare size={18} />
                Add Music
              </button>
            </div>
          </div>

          <div className=" justify-center flex items-center mb-1">
            <p className=" text-gray-400 text-xs text-center">copyright @2024</p>
          </div>
        </div>

        <div
          className={`h-full flex flex-col px-5 justify-between  transition-transform transform  bg-text1 ${sidebarSmall ? 'block' : 'hidden'} `}
        >
          <div className=" flex justify-center items-center mt-5">
            <Menu onClick={handleSidebarSmall} className=" text-white" size={18} />
          </div>

          <div className=" justify-start flex items-center my-5">
            <div className=" flex-col flex w-full">
              <button className=" justify-center gap-2 items-center flex py-[5px] my-1 rounded-md">
                <CalendarHeart size={18} className=" text-purple-500" />
              </button>
              <button className=" justify-center gap-2 items-center flex py-[5px] my-1 rounded-md">
                <HardDrive size={18} className=" text-purple-500" />
              </button>
              <button className=" justify-center gap-2 items-center flex py-[5px] my-1 rounded-md">
                <PlusSquare size={18} className=" text-purple-500" />
              </button>
            </div>
          </div>
        </div>

        <div className=" flex-1 mt-5 mx-5">
          <div className=" flex w-max py-1 rounded-md bg-text1 gap-2 justify-center items-center border-text1 border-[1px]">
            <input
              className=" bg-transparent text-xs p-1 mx-2"
              placeholder="Search something here .."
            />
            <Search className=" text-purple-500 mx-2" size={18} />
          </div>
          <h3 className=" text-black font-semibold mt-5">Music List</h3>

          <div className=" mt-3 flex flex-wrap gap-5">
            <div className=" h-64 w-44 bg-text1 rounded-md">
              <img src={mavric} className=" h-[70%] rounded-t-md" />
            </div>

            <div className=" h-64 w-44 bg-text1 rounded-md">
              <img src={mavric} className=" h-[70%] rounded-t-md" />
            </div>

            <div className=" h-64 w-44 bg-text1 rounded-md">
              <img src={mavric} className=" h-[70%] rounded-t-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
