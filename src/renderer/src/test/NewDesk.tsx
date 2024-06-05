import { History, Import, PlusSquare } from 'lucide-react'
import study from '../assets/images/bg-study.svg'

function NewDesk(): JSX.Element {
  return (
    <div className=" flex-1 mt-5 mx-5">
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
  )
}

export default NewDesk
