import SharkGame from '@/components/shark/SharkGame'
import { Box } from '@mui/material'

export default function Page() {
  return (
    <>
      <img src='/shark-teeth.png' alt='shark teeth' style={{ width: '100%', objectFit: 'contain' }} />
      <Box sx={{ p: 2 }}>
        <SharkGame />
      </Box>
    </>
  )
}