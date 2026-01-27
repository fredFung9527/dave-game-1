import { Box, Divider } from '@mui/material'
import { SharkDataProvider } from './SharkDataProvider'
import TargetIndexPicker from './TargetIndexPicker'
import UsedInput from './UsedInput'
import Suggestion from './Suggestion'

export default function SharkGame() {
  return (
    <SharkDataProvider>
      <TargetIndexPicker />
      <Box sx={{ mt: 2 }}>
        <UsedInput />
      </Box>
      <Divider sx={{ mt: 3, mb: 2 }} />
      <Suggestion />
    </SharkDataProvider>
  )
}