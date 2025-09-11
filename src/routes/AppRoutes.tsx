import { Route, BrowserRouter as Router, Routes } from 'react-router'

import { MainLayout } from '@/layouts'
import { HomePage } from '@/pages'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
