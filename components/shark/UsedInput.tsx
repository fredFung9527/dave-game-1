'use client'

import { Button, Grid, TextField, Typography } from '@mui/material'
import { useSharkData } from './SharkDataProvider'

export default function UsedInput() {
  const { used, setUsed } = useSharkData()

  function onUsedInput(v: string) {
    const number = Number(v)
    if (number > 0) {
      setUsed(number)
    } else {
      setUsed(0)
    }
  }

  return (
    <>
      <Typography mb={1}>
        <span>已使用牙齒</span>&nbsp;
        <Typography component='span' color='text.secondary' fontSize='small'>{'(自己加對方)'}</Typography>
      </Typography>
      <Grid container spacing={1} alignItems='center' columns={5}>
        <Grid size={1}>
          <TextField
            value={used}
            onChange={(e) => onUsedInput(e.target.value)}
            size='small'
            type='number'
            variant='standard'
          />
        </Grid>
        <Grid size={1}>
          <Button variant='outlined' color='primary' onClick={() => setUsed(used + 1)} size='small'>+1</Button>
        </Grid>
        <Grid size={1}>
          <Button variant='outlined' color='primary' onClick={() => setUsed(used + 2)} size='small'>+2</Button>
        </Grid>
        <Grid size={1}>
          <Button variant='outlined' color='primary' onClick={() => setUsed(used + 3)} size='small'>+3</Button>
        </Grid>
      </Grid>
    </>
  )
}