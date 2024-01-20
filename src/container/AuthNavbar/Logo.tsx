import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { logo } from '@/_shared/assets/icons'

const Logo = () => {
  return (
    <Link href="/">
        <Image
            src={logo}
            width={143.336}
            height={30}
            alt='logo-icon'
        />
    </Link>
  )
}

export default Logo