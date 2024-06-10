import usePage from '@renderer/context/PageContext'
import NewDesk from '@renderer/components/NewDesk'
import { FC } from 'react'
import DeskHistory from './deskHistory'
import AddDesk from './AddDesk'
import Reader from './Reader'
// import {usePage}

const ReturnMain: FC = () => {
  // const [page, setPage] = useState('test')
  const { page } = usePage()

  switch (page) {
    case 'Home':
      return <NewDesk />
    case 'Study':
      return <NewDesk />
    case 'History':
      return <DeskHistory />
    case 'Add':
      return <AddDesk />
    case 'Reader':
      return <Reader />
    default:
      return <NewDesk />
  }
}

export default ReturnMain
