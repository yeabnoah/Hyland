import { create } from 'zustand'

interface Modal {
  isShowing: boolean
  setIsShowing: (newIsShowing: boolean) => void
}

const useModal = create<Modal>((set) => ({
  isShowing: false,
  setIsShowing: (newIsShowing: boolean): void => set({ isShowing: newIsShowing })
}))

export default useModal
