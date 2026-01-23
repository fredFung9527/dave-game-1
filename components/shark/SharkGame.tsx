import { SharkDataProvider } from './SharkDataProvider'
import TargetIndexPicker from './TargetIndexPicker'

export default function SharkGame() {
  return (
    <SharkDataProvider>
      <TargetIndexPicker />
    </SharkDataProvider>
  )
}