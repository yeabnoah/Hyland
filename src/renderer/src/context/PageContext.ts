import { create } from 'zustand'

interface Page {
  page: string
  setPage: (newPage: string) => void
}

const usePage = create<Page>((set) => ({
  page: 'study',
  setPage: (newPage: string): void => set({ page: newPage })
}))

export default usePage
