'use client'

import { Card, Menu } from '@mui/material'
import { useMatrixData } from './MatrixDataProvider'
import { MatrixPositionName } from './card'
import { useState } from 'react'
import { filter, values } from 'lodash'
import CardNamePicker from './CardNamePicker'

export default function MatrixPosition({ position }: { position: MatrixPositionName }) {
  const { matrixData, onCardNameChange } = useMatrixData()

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const value = matrixData[position]
  const isPaired = value && filter(values(matrixData), (v) => v === value).length === 2 || false

  return (
    <>
      <Card
        elevation={2}
        sx={{
          minHeight: 60,
          cursor: 'pointer',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          ...(isPaired && {
            backgroundColor: 'primary.main',
            color: 'white',
          })
        }}
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {value ?? '-'}
      </Card>

      {Boolean(anchorEl) && (
        <Menu anchorEl={anchorEl} open onClose={() => setAnchorEl(null)}>
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