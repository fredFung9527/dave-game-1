'use client'

import { createContext, useContext, useState } from 'react'
import { CardMatrix, CardName, DefaultCardMatrix, MatrixPositionName } from './card'

interface MatrixDataProviderProps {
  matrixData: CardMatrix,
  onCardNameChange: (position: MatrixPositionName, value: CardName | null) => void
}

const DefaultMatrixDataProviderProps: MatrixDataProviderProps = {
  matrixData: DefaultCardMatrix,
  onCardNameChange: () => { }
}

const MatrixDataContext = createContext<MatrixDataProviderProps>(DefaultMatrixDataProviderProps)

function MatrixDataProvider({ children }: { children: React.ReactNode }) {
  const [matrixData, setMatrixData] = useState<CardMatrix>(DefaultCardMatrix)
  function onCardNameChange(position: MatrixPositionName, value: CardName | null) {
    setMatrixData((prev) => ({ ...prev, [position]: value }))
  }

  return (
    <MatrixDataContext.Provider value={{ matrixData, onCardNameChange }}>
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