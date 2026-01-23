'use client'

import { Box, Button } from '@mui/material'
import { useMatrixData } from './MatrixDataProvider'

export default function ResetButton() {
  const { resetMatrixData } = useMatrixData()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: '80px' }}>
      <Button variant='outlined' color='inherit' onClick={resetMatrixData}>
        清空
      </Button>
    </Box>
  )
}