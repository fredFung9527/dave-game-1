import CardMatrix from '@/components/card/CardMatrix'
import { Container } from '@mui/material'

export default function Home() {
  return (
    <Container sx={{ p: 2 }} maxWidth='xs' disableGutters>
      <CardMatrix />
    </Container>
  )
}
