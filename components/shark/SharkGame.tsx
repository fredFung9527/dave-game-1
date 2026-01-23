import { Box } from '@mui/material'
import { SharkDataProvider } from './SharkDataProvider'
import TargetIndexPicker from './TargetIndexPicker'
import UsedInput from './UsedInput'

export default function SharkGame() {
  return (
    <SharkDataProvider>
      <TargetIndexPicker />
      <Box sx={{ mt: 2 }}>
        <UsedInput />
      </Box>
    </SharkDataProvider>
  )
}