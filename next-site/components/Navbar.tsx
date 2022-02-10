import React, { useContext, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MdMenu } from 'react-icons/md'
import useTranslation from 'next-translate/useTranslation'
import classes from '../src/scss/navbar.module.scss'
import { MenuContext } from '../context/MenuContext'
import axios from 'axios'
import { Service } from '../models/service'
import LanguageToggle from './LanguageToggle'


const Navbar = () => {
    const router = useRouter()
    const { t, lang } = useTranslation()
    const { menuToggle } = useContext(MenuContext)
    const [services, setServices] = useState<Service[]>([])
    const [isDropMenu, setIsDropMenu] = useState(false)
    const dropMenu = useRef(null)

    useEffect(() => {
        (async () => {
            const services = await axios.get(`/services?locale=${lang}`)
            setServices(services.data.data)
        })()
    }, [lang])

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (dropMenu.current && !dropMenu.current.contains(event.target)) {
                setIsDropMenu(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [dropMenu])

    return (
        <div className={classes.navbar}>
            <Link href='/'>
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

            <nav className={`${classes.navbar__nav}`}>
                <ul>
                    <li className={`${classes.navbar__navItem} 
                    ${router.pathname == '/' ? classes.navbar__navItem_active : ''}`}>
                        <Link href="/"><a>{t("common:home")}</a></Link>
                    </li>
                    <li className={`${classes.navbar__navItem} 
                    ${router.pathname == '/projects' ? classes.navbar__navItem_active : ''}`}>
                        <Link href="/projects"><a>{t("common:projects")}</a></Link>
                    </li>
                    <li className={`${classes.navbar__navItem} 
                    ${router.pathname == '/services' ? classes.navbar__navItem_active : ''}`}>
                        <button onClick={() => setIsDropMenu(!isDropMenu)}>
                            {t("common:services")}
                        </button>
                        <div
                            ref={dropMenu}
                            className={`${classes.dropMenu} ${isDropMenu ? classes.dropMenu_active : ''}`}>
                            <ul>
                                {services.map(service =>
                                    <li key={service.id}>
                                        <Link href={`/services/${service.attributes.slug}`}>
                                            <a >{service.attributes.name}</a>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </li>
                    <li className={`${classes.navbar__navItem} 
                    ${router.pathname == '/about' ? classes.navbar__navItem_active : ''}`}>
                        <Link href="/about"><a>{t("common:about")}</a></Link>
                    </li>
                    <li className={`${classes.navbar__navItem} 
                    ${router.pathname == '/blog' ? classes.navbar__navItem_active : ''}`}>
                        <Link href="/blog"><a>{t("common:blog")}</a></Link>
                    </li>
                </ul>
            </nav>
            <nav className={classes.navbar__nav}>
                <Link href={'/contacts'}>
                    <a className='btn btn_primary'>
                        {t("common:contact-us")}
                    </a>
                </Link>
                <div className={classes.navbar__language}>
                    <LanguageToggle />
                </div>
            </nav>
            <button
                onClick={menuToggle}
                className={classes.navbar__menuBtn}>
                <MdMenu />
            </button>
        </div>
    )
}

export default Navbar