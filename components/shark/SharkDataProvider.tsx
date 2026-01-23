'use client'

import { createContext, useContext, useState } from 'react'

interface SharkDataProviderProps {
  targetIndex: number, setTargetIndex: (index: number) => void,
  used: number, setUsed: (used: number) => void,
}

const DefaultSharkDataProviderProps: SharkDataProviderProps = {
  targetIndex: 0, setTargetIndex: () => { },
  used: 0, setUsed: () => { },
}

const SharkDataContext = createContext<SharkDataProviderProps>(DefaultSharkDataProviderProps)

function SharkDataProvider({ children }: { children: React.ReactNode }) {
  const [targetIndex, setTargetIndex] = useState(0)
  const [used, setUsed] = useState(0)

  return (
    <SharkDataContext.Provider
      value={{
        targetIndex, setTargetIndex,
        used, setUsed
      }}
    >
      {children}
    </SharkDataContext.Provider>
  )
}

function useSharkData() {
  const context = useContext(SharkDataContext)
  if (!context) {
    throw new Error('useSharkData must be used within a SharkDataProvider')
  }
  return context
}

export { SharkDataProvider, useSharkData }