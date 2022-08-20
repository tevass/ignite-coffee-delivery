import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { LayoutContainer } from './styles'

export function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
