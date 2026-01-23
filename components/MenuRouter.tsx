'use client'

import { Button, Grid } from '@mui/material'
import { usePathname } from 'next/navigation'

interface MenuItemData {
  title: string,
  link: string,
}
const MenuItemData: MenuItemData[] = [
  {
    title: '對對碰',
    link: '/',
  },
  {
    title: '鯊魚牙齒',
    link: '/shark',
  }
]

export default function MenuRouter() {
  return (
    <Grid container>
      {MenuItemData.map((item) => (
        <Grid size={6} key={item.title}>
          <MenuItem title={item.title} link={item.link} />
        </Grid>
      ))}
    </Grid>
  )
}

function MenuItem({
  title,
  link,
}: {
  title: string,
  link: string,
}) {
  const pathname = usePathname()
  const isActive = pathname === link

  return (
    <Button
      variant={isActive ? 'contained' : 'text'}
      color='primary'
      sx={{ width: '100%', borderRadius: 0, border: 'none' }}
      href={link}
    >
      {title}
    </Button>
  )
}