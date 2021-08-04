import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

export default function NavLink({ children, href }) {
  const child = children
  const router = useRouter()

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        'aria-current': router.pathname === href ? 'page' : null,
      })}
    </Link>
  )
}
