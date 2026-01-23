'use client'

import { Grid, Paper, Typography } from '@mui/material'
import { useMatrixData } from './MatrixDataProvider'
import { useMemo } from 'react'
import { forEach } from 'lodash'
import { CardName } from './card'

export default function Summary() {
  const { matrixData } = useMatrixData()

  const summary = useMemo(() => {
    let notOpen = 0
    let paired = 0
    let needPaired = 0
    let cardCount: { [key in CardName]?: number } = {}

    forEach(matrixData, (value, position) => {
      if (value) {
        if (cardCount[value]) {
          cardCount[value]++
        } else {
          cardCount[value] = 1
        }
      } else {
        notOpen++
      }
    })

    forEach(cardCount, (count, cardName) => {
      if (count === 1) {
        needPaired++
      } else if (count === 2) {
        paired++
      }
    })

    return {
      notOpen, paired, needPaired
    }
  }, [matrixData])

  return (
    <Paper variant='outlined' sx={{ mb: 3, p: 2, borderRadius: 2 }}>
      <Grid container spacing={0.5}>
        <Grid size={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>已配對:&nbsp;</Typography>
          <Typography color='success.main'>{summary.paired}</Typography>
        </Grid>
        <Grid size={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>待配對:&nbsp;</Typography>
          <Typography>{summary.needPaired}</Typography>
        </Grid>
        <Grid size={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>未開牌:&nbsp;</Typography>
          <Typography color='text.secondary'>{summary.notOpen}</Typography>
        </Grid>
        <Grid size={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>如開牌:&nbsp;</Typography>
          <Typography color='primary.main' fontWeight='bold'>{Math.round(summary.needPaired / summary.notOpen * 100)}%</Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}