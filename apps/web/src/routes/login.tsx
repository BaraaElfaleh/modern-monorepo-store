import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../modules/auth/views/LoginForm'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginForm />
}
