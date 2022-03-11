import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { LINKS } from '../../constants/links'

import * as S from './styles'

const Navbar: React.FC = () => {
  const router = useRouter()

  return (
    <S.Navbar>
      <Image src={'/logo.svg'} alt="caiqalmeida logo" width={64} height={66} />

      <S.Menu>
        {LINKS.map((item) => (
          <Link key={item.text} href={item.path} passHref>
            <S.MenuItem
              className={router.pathname == item.path ? 'active' : ''}
            >
              {item.text}
            </S.MenuItem>
          </Link>
        ))}
      </S.Menu>
    </S.Navbar>
  )
}

export default Navbar
