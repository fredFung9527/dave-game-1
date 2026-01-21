import { Box, Divider, Grid } from '@mui/material'
import { CardName } from './card'

const FirstRow: CardName[] = ['龍', '馬', '蟹']
const SecondRow: CardName[] = ['燈', '尾', '車']
const ThirdRow: CardName[] = ['貝', '星', '母']

const Spacing = 3

export default function CardNamePicker({
  value,
  onChange
}: {
  value: CardName | null,
  onChange: (value: CardName | null) => void
}) {
  function onCardNameClick(cardName: CardName) {
    onChange(value === cardName ? null : cardName)
  }

  return (
    <Box sx={{ px: 3, py: 2 }}>
      <Grid container spacing={Spacing}>
        {FirstRow.map((cardName) => (
          <Grid size={4} key={cardName} onClick={() => onCardNameClick(cardName)} sx={{ cursor: 'pointer', color: value === cardName ? 'primary.main' : undefined }}>
            {cardName}
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: Spacing }} />
      <Grid container spacing={Spacing}>
        {SecondRow.map((cardName) => (
          <Grid size={4} key={cardName} onClick={() => onCardNameClick(cardName)} sx={{ cursor: 'pointer', color: value === cardName ? 'primary.main' : undefined }}>
            {cardName}
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: Spacing }} />
      <Grid container spacing={Spacing}>
        {ThirdRow.map((cardName) => (
          <Grid size={4} key={cardName} onClick={() => onCardNameClick(cardName)} sx={{ cursor: 'pointer', color: value === cardName ? 'primary.main' : undefined }}>
            {cardName}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}