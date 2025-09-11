import { Footer, Header } from '@/components'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="bg-base-200">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
