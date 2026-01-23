'use client'

import { Card, Menu } from '@mui/material'
import { useMatrixData } from './MatrixDataProvider'
import { CardName, MatrixPositionName } from './card'
import { useState } from 'react'
import { filter, values } from 'lodash'
import CardNamePicker from './CardNamePicker'

const PairColors: Record<CardName, string> = {
  '龍': 'primary.light',
  '馬': 'primary.main',
  '蟹': 'primary.dark',
  '燈': 'secondary.light',
  '尾': 'secondary.main',
  '車': 'secondary.dark',
  '貝': 'warning.light',
  '星': 'warning.main',
  '母': 'warning.dark',
}

export default function MatrixPosition({ position }: { position: MatrixPositionName }) {
  const { matrixData, onCardNameChange } = useMatrixData()

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const value = matrixData[position]
  const isPaired = value && filter(values(matrixData), (v) => v === value).length > 1 || false

  return (
    <>
      <Card
        elevation={2}
        sx={{
          minHeight: 60,
          cursor: 'pointer',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          ...(isPaired && {
            backgroundColor: PairColors[value!],
            color: 'white',
          })
        }}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {value ?? '-'}
      </Card>

      {Boolean(anchorEl) && (
        <Menu anchorEl={anchorEl} open onClose={() => setAnchorEl(null)} slotProps={{ list: { sx: { p: 0 } } }}>
          <CardNamePicker
            value={value}
            onChange={(v) => {
              onCardNameChange(position, v)
              setAnchorEl(null)
            }}
          />
        </Menu>
      )}
    </>
  )
}