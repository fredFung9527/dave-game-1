import { Box, Divider, Grid } from '@mui/material'
import { CardName } from './card'
import { Fragment } from 'react/jsx-runtime'

const FirstRow: CardName[] = ['龍', '馬', '蟹']
const SecondRow: CardName[] = ['燈', '尾', '車']
const ThirdRow: CardName[] = ['貝', '星', '母']

const Spacing = 2.5

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
    <Box>
      {[FirstRow, SecondRow, ThirdRow].map((row, idx) => (
        <Fragment key={idx}>
          {Boolean(idx) && <Divider />}
          <Grid container key={row.join(',')}>
            {row.map((cardName) => (
              <Grid
                size={4}
                key={cardName}
                onClick={() => onCardNameClick(cardName)}
                sx={{
                  cursor: 'pointer',
                  color: value === cardName ? 'primary.main' : undefined,
                  p: Spacing
                }}
              >
                {cardName}
              </Grid>
            ))}
          </Grid>
        </Fragment>
      ))}
    </Box>
  )
}