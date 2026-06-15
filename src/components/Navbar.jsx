import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Certificate', href: '#certificate' },
  { label: 'Blog', href: '#blogs' },
]

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NavLinkItem({ link, className, onClick }) {
  if (link.to) {
    return (
      <Link to={link.to} className={className} onClick={onClick}>
        {link.label}
      </Link>
    )
  }

  return (
    <a href={link.href} className={className} onClick={onClick}>
      {link.label}
    </a>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="w-full bg-[#f3f3f3] border-b border-[#e8e8e8]">
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="relative z-20 shrink-0">
          <img
            src="/da1c33177006ccc1015506eff0e60d070cb6f646.png"
            alt="Keshav Ram"
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 lg:flex"
          aria-label="Main navigation"
        >
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = link.to ? location.pathname === link.to : false
              return (
                <li key={link.label}>
                  <NavLinkItem
                    link={link}
                    className={`font-heading text-[15px] leading-none tracking-[-0.01em] text-[#1a1a1a] transition-colors hover:text-black ${
                      isActive ? 'font-semibold' : 'font-normal'
                    }`}
                  />
                </li>
              )
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          className="relative z-20 hidden items-center gap-2.5 rounded-full bg-[#0f1a2e] px-5 py-2.5 font-heading text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#1a2740] lg:inline-flex"
        >
          Contact Now
          <ArrowIcon />
        </a>

        <button
          type="button"
          className="relative z-20 inline-flex items-center justify-center rounded-md p-2 text-[#1a1a1a] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6L18 18M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 7H20M4 12H20M4 17H20" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-[#e8e8e8] bg-[#f3f3f3] transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = link.to ? location.pathname === link.to : false
              return (
                <li key={link.label}>
                  <NavLinkItem
                    link={link}
                    className={`block rounded-lg px-3 py-2.5 font-heading text-[15px] text-[#1a1a1a] transition-colors hover:bg-[#eaeaea] ${
                      isActive ? 'font-semibold' : 'font-normal'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  />
                </li>
              )
            })}
          </ul>
          <a
            href="#contact"
            className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#0f1a2e] px-5 py-3 font-heading text-[11px] font-medium uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#1a2740]"
            onClick={() => setMenuOpen(false)}
          >
            Contact Now
            <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
