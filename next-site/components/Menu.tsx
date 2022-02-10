import React, { useContext } from 'react'
import Image from 'next/image'
import { MdClose } from 'react-icons/md'
import useTranslation from 'next-translate/useTranslation'
import classes from '../src/scss/menu.module.scss'
import { MenuContext } from '../context/MenuContext'
import LanguageToggle from './LanguageToggle'


const Menu = () => {
    const { t } = useTranslation()
    const { isMenu, menuToggle } = useContext(MenuContext)

    if (!isMenu) {
        return null
    }

    return (
        <div className={classes.menu}>
            <header className={classes.header}>
                <a href='/' className={classes.logo}>
                    <Image
                        layout="fill"
                        alt="almocode"
                        src="/assets/logo.svg"
                        objectFit="contain"
                        objectPosition="center left"
                    />
                </a>
                <button
                    onClick={menuToggle}
                    className={classes.header__closeBtn}>
                    <MdClose />
                </button>
            </header>
            <nav className={classes.nav}>
                <a href={'/'} className={classes.nav__item}>
                    {t("common:home")}
                </a>
                <a href={'/projects'} className={classes.nav__item}>
                    {t("common:projects")}
                </a>
                <a href={'/about'} className={classes.nav__item}>
                    {t("common:about")}
                </a>
                <a href={'/blog'} className={classes.nav__item}>
                    {t("common:blog")}
                </a>
            </nav>
            <footer className={classes.footer}>
                <a href={'mailto:hello@almocode.co'}>
                    hello@almocode.co
                </a>
                <LanguageToggle />
            </footer>
        </div>
    )
}


export default Menu