import { create } from 'zustand'

type Tag = string | { label: string; value: string }

interface StoreState {
  tags: Tag[]
  setTags: (newTags: Tag[]) => void
}

const useStore = create<StoreState>((set) => ({
  tags: [],
  setTags: (newTags) => set({ tags: newTags }),
}))

export default useStore
