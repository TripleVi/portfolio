import { Route, Routes } from 'react-router'

import { MainLayout } from '@/layouts'
import { HomePage } from '@/pages'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
