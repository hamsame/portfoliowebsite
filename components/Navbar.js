import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  const router = useRouter()
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href='/'>
            <a
              className={
                router.pathname === '/' ? styles.activeNavbarItem : null
              }
            >
              Hamsa Elmi
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a
              className={
                router.pathname === '/about' ? styles.activeNavbarItem : null
              }
            >
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a
              className={
                router.pathname === '/contact' ? styles.activeNavbarItem : ''
              }
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
