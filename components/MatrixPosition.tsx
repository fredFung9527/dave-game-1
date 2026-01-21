'use client'

import { Box } from '@mui/material'
import { useMatrixData } from './MatrixDataProvider'

export default function MatrixPosition() {
  const { matrixData } = useMatrixData()

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'black',
        p: 2
      }}
    >
      X
    </Box>
  )
}