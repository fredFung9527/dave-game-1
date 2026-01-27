'use client'

import { Box, Typography } from '@mui/material'
import { useSharkData } from './SharkDataProvider'

export default function Suggestion() {
  const { targetIndex, used } = useSharkData()
  let remainder = undefined
  if (targetIndex > 0) {
    remainder = (targetIndex - 1 - (used ?? 0)) % 4
  }
  return (
    <>
      <Typography mb={2}>
        <span>計算:</span>&nbsp;
        <Typography component='span' color='text.secondary'>{`(${targetIndex || '_'} - 1 - ${used ?? 0}) % 4 = ${remainder ?? '_'}`}</Typography>
      </Typography>
      {Boolean(remainder === 0) &&
        <Box sx={{ border: '1px solid', borderColor: 'warning.main', p: 1, borderRadius: 2 }}>
          <Typography color='warning.main'>局勢未明朗，建議走“1”</Typography>
          <Typography color='text.secondary' fontSize='small'>記得更新“已使用牙齒”</Typography>
        </Box>
      }
      {Boolean(remainder && remainder > 0) &&
        <Box sx={{ border: '1px solid', borderColor: 'success.main', p: 1, borderRadius: 2 }}>
          <Typography color='success.main'>局勢明朗，先走“{remainder}”</Typography>
          <Typography color='text.secondary' fontSize='small'>然後每輪走4減去對面走的那個數</Typography>
        </Box>
      }
    </>
  )
}