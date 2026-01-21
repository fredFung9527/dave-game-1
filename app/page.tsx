import { TheMatrix } from '@/components/card'
import { MatrixDataProvider } from '@/components/MatrixDataProvider'
import MatrixPosition from '@/components/MatrixPosition'
import { Container, Grid } from '@mui/material'
import { Fragment } from 'react/jsx-runtime'

export default function Home() {
  return (
    <Container sx={{ p: 2 }} maxWidth='xs' disableGutters>
      <MatrixDataProvider>
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
      </MatrixDataProvider>
    </Container>
  )
}
