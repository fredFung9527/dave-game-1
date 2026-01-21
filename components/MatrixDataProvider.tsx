'use client'

import { createContext, useContext } from 'react'
import { CardMatrix, DefaultCardMatrix } from './card'

interface MatrixDataProviderProps {
  matrixData: CardMatrix,
}

const DefaultMatrixDataProviderProps: MatrixDataProviderProps = {
  matrixData: DefaultCardMatrix
}

const MatrixDataContext = createContext<MatrixDataProviderProps>(DefaultMatrixDataProviderProps)

function MatrixDataProvider({ children }: { children: React.ReactNode }) {
  return (
    <MatrixDataContext.Provider value={DefaultMatrixDataProviderProps}>
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