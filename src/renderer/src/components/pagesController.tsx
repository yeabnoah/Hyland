import usePage from '@renderer/context/PageContext'
import NewDesk from '@renderer/components/NewDesk'
import { FC } from 'react'
import DeskHistory from './deskHistory'
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
    default:
      return <NewDesk />
  }
}

export default ReturnMain
