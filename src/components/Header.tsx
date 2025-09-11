import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(prev => {
        if (window.scrollY > prev) {
          setShowHeader(false)
        } else {
          setShowHeader(true)
        }
        return window.scrollY
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        'bg-base-100/85 fixed top-0 right-0 left-0 z-50 shadow-sm transition-transform duration-300',
        showHeader || 'translate-y-[calc(-100%-4px)]'
      )}
    >
      <nav className="navbar container">
        <div className="navbar-start">
          <Link to='/' className="font-bold text-2xl bg-clip-text bg-gradient-to-br from-secondary to-accent text-transparent">EmptyV</Link>
        </div>
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#education">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input type="checkbox" className="theme-controller" value="dark" />
            <SunIcon className="swap-off h-5" />
            <MoonIcon className="swap-on h-5" />
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Header
