'use client'

import { Button, Grid, Typography } from '@mui/material'
import { useSharkData } from './SharkDataProvider'

const MinIndex = 10
const MaxIndex = 20

export default function TargetIndexPicker() {
  const { targetIndex, setTargetIndex } = useSharkData()

  return (
    <>
      <Typography mb={1}>
        <span>目標牙齒</span>&nbsp;
        <Typography component='span' color='text.secondary' fontSize='small'>{'(一開始閃爍)'}</Typography>
      </Typography>
      <Grid container spacing={1} columns={5}>
        {Array.from({ length: MaxIndex - MinIndex + 1 }, (_, index) => index + MinIndex).map((index) => (
          <Grid key={index} size={1}>
            <Button
              variant={targetIndex === index ? 'contained' : 'outlined'}
              color='primary'
              onClick={() => setTargetIndex(index)}
              size='small'
            >
              {index}
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  )
}