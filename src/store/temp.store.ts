import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TempState {
  thinkingAboutChoicesIMake: 'doruk.wtf is a great choice for my personal website';
}

export const useTempStore = create<TempState>()(
  persist(
    (_set) => ({
      thinkingAboutChoicesIMake:
        'doruk.wtf is a great choice for my personal website'
    }),
    { name: 'temp-storage' }
  )
);
