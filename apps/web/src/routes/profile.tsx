import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from "../modules/auth"
import { ProfilePage } from "../pages/ProfilePage"

export const Route = createFileRoute('/profile')({
  component: () => {
    const { user, logout } = useAuth()
    
    return <ProfilePage user={user} onLogout={logout} />
  }
})