import { createBrowserRouter, RouteObject } from 'react-router'
import { Home } from './pages/Home'
import { MapScreen } from './pages/MapScreen'
import { LocationDetails } from './pages/LocationDetails'
import { PlantTree } from './pages/PlantTree'
import { ReportCutting } from './pages/ReportCutting'
import { UserProfile } from './pages/UserProfile'
import { Community } from './pages/Community'
import { ImpactDashboard } from './pages/ImpactDashboard'
import { AIPlantAdvisor } from './pages/AIPlantAdvisor'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { Layout } from './components/Layout'
import { ProtectedRoute } from './components/ProtectedRoute'

export const router = createBrowserRouter([
  // Auth Routes (no protection)
  { path: '/login', Component: Login },
  { path: '/signup', Component: SignUp },

  // Protected Routes
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'map', Component: MapScreen },
      { path: 'location/:id', Component: LocationDetails },
      { path: 'plant-tree', Component: PlantTree },
      { path: 'report-cutting', Component: ReportCutting },
      {
        path: 'profile',
        Component: () => (
          <ProtectedRoute>
          <UserProfile />
          </ProtectedRoute>
        ),
      },
      { path: 'community', Component: Community },
      { path: 'impact', Component: ImpactDashboard },
      { path: 'ai-advisor', Component: AIPlantAdvisor },
    ],
  },
] as RouteObject[])