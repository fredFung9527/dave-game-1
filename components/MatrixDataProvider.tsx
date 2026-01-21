'use client'

import { createContext, useContext, useState } from 'react'
import { CardMatrix, CardName, DefaultCardMatrix, MatrixPositionName } from './card'

interface MatrixDataProviderProps {
  matrixData: CardMatrix,
  onCardNameChange: (position: MatrixPositionName, value: CardName | null) => void,
  resetMatrixData: () => void
}

const DefaultMatrixDataProviderProps: MatrixDataProviderProps = {
  matrixData: DefaultCardMatrix,
  onCardNameChange: () => { },
  resetMatrixData: () => { }
}

const MatrixDataContext = createContext<MatrixDataProviderProps>(DefaultMatrixDataProviderProps)

function MatrixDataProvider({ children }: { children: React.ReactNode }) {
  const [matrixData, setMatrixData] = useState<CardMatrix>(DefaultCardMatrix)

  function onCardNameChange(position: MatrixPositionName, value: CardName | null) {
    setMatrixData((prev) => ({ ...prev, [position]: value }))
  }

  function resetMatrixData() {
    setMatrixData(DefaultCardMatrix)
  }

  return (
    <MatrixDataContext.Provider
      value={{
        matrixData, onCardNameChange, resetMatrixData
      }}
    >
      {children}
    </MatrixDataContext.Provider>
  )
}

function useMatrixData() {
  const context = useContext(MatrixDataContext)
  if (!context) {
    throw new Error('useMatrixData must be used within a MatrixDataProvider')
  }
  return context
}

export { MatrixDataProvider, useMatrixData }