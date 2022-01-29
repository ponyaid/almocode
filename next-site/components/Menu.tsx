import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import classes from '../src/scss/menu.module.scss'
import { MenuContext } from '../context/MenuContext'


const Menu = () => {
    const { isMenu, menuToggle } = useContext(MenuContext)

    if (!isMenu) {
        return null
    }

    return (
        <div className={classes.menu}>
            <header className={classes.header}>
                <Link href={'/'}>
                    <a className={classes.logo}>
                        <Image
                            layout="fill"
                            alt="almocode"
                            src="/assets/logo.svg"
                            objectFit="contain"
                            objectPosition="center left"
                        />
                    </a>
                </Link>
                <button
                    onClick={menuToggle}
                    className={classes.header__closeBtn}>
                    <MdClose />
                </button>
            </header>
            <nav className={classes.nav}>
                <a href={'/'} className={classes.nav__item}>Home</a>
                <a href={'/projects'} className={classes.nav__item}>Projects</a>
                <a href={'/'} className={classes.nav__item}>Services</a>
                <a href={'/about'} className={classes.nav__item}>About</a>
                <a href={'/blog'} className={classes.nav__item}>Blog</a>
            </nav>
            <footer className={classes.footer}>
                <a href={'mailto:hello@almocode.co'}>hello@almocode.co</a>
                <select>
                    <option value='RU'>RU</option>
                    <option value='EN'>EN</option>
                </select>
            </footer>
        </div>
    )
}


export default Menu