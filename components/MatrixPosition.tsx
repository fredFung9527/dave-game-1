'use client'

import { Card, Menu, MenuItem } from '@mui/material'
import { useMatrixData } from './MatrixDataProvider'
import { CardName, CardNameOptions, MatrixPositionName } from './card'
import { useState } from 'react'
import { filter, values } from 'lodash'

export default function MatrixPosition({ position }: { position: MatrixPositionName }) {
  const { matrixData, onCardNameChange } = useMatrixData()

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)

  const value = matrixData[position]
  const isPaired = value && filter(values(matrixData), (v) => v === value).length === 2 || false

  function onCardNameClick(cardName: CardName) {
    onCardNameChange(position, cardName === value ? null : cardName)
    setAnchorEl(null)
  }

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
          {CardNameOptions.map((option) => (
            <MenuItem key={option} onClick={() => onCardNameClick(option)} selected={value === option}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}