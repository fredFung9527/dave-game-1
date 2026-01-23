import { Grid } from '@mui/material'
import { MatrixDataProvider } from './MatrixDataProvider'
import Summary from './Summary'
import { TheMatrix } from './card'
import { Fragment } from 'react/jsx-runtime'
import MatrixPosition from './MatrixPosition'
import ResetButton from './ResetButton'

export default function CardMatrix() {
  return (
    <MatrixDataProvider>
      <Summary />

      <Grid container spacing={2} columns={6}>
        {TheMatrix.map((row, index) => (
          <Fragment key={index}>
            {row.map((position) => (
              <Grid size={1} key={position}>
                <MatrixPosition position={position} />
              </Grid>
            ))}
          </Fragment>
        ))}
      </Grid>

      <ResetButton />
    </MatrixDataProvider>
  )
}