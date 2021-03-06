import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { MdEmail, MdHome, MdPhone } from 'react-icons/md'
import classes from '../src/scss/footer.module.scss'
import { Service } from '../models/service'
import LanguageToggle from './LanguageToggle'


const Footer = () => {
    const { t, lang } = useTranslation()
    const [services, setServices] = useState<Service[]>([])

    useEffect(() => {
        (async () => {
            const services = await axios.get(`/services?locale=${lang}`)
            setServices(services.data.data)
        })()
    }, [lang])

    return (
        <footer className={classes.footer}>
            <header className={classes.footer__header}>
                <Link href="/">
                    <a className={classes.logo}>
                        <Image
                            layout="fill"
                            alt="almocode"
                            src="/assets/logowhite.svg"
                            objectFit="contain"
                            objectPosition="center left"
                        />
                    </a>
                </Link>
                <ul className={classes.social}>
                    <li className={classes.social__item}>
                        <Link href="#"><a><FaInstagram /></a></Link>
                    </li>
                    <li className={classes.social__item}>
                        <Link href="#"><a><FaFacebookF /></a></Link>
                    </li>
                    <li className={classes.social__item}>
                        <Link href="#"><a><FaTelegramPlane /></a></Link>
                    </li>
                </ul>
                <form className={classes.searchForm}>
                    <input type="text" className={classes.searchForm__input} />
                    <button className={classes.searchForm__btn}>
                        {t('common:search')}
                    </button>
                </form>
            </header>

            <div className={classes.footer__details}>
                <nav className={classes.footer__nav}>
                    <p className={classes.footer__title}>
                        {t('common:navigation')}
                    </p>
                    <Link href={'/'}>
                        <a className={classes.footer__navItem}>
                            {t('common:home')}
                        </a>
                    </Link>
                    <Link href={'/projects'}>
                        <a className={classes.footer__navItem}>
                            {t('common:all-projects')}
                        </a>
                    </Link>
                    <Link href={'/about'}>
                        <a className={classes.footer__navItem}>
                            {t('common:about')}
                        </a>
                    </Link>
                    <Link href={'/blog'}>
                        <a className={classes.footer__navItem}>
                            {t('common:blog')}
                        </a>
                    </Link>
                    <Link href={'/contacts'}>
                        <a className={classes.footer__navItem}>
                            {t('common:contact-us')}
                        </a>
                    </Link>
                </nav>
                <nav className={classes.footer__nav}>
                    <p className={classes.footer__title}>
                        {t('common:services')}
                    </p>
                    {services.map(service =>
                        <Link key={service.id} href={`/services/${service.attributes.slug}`}>
                            <a className={classes.footer__navItem}>
                                {service.attributes.name}
                            </a>
                        </Link>
                    )}
                </nav>
                <div className={`${classes.footer__contacts}`}>
                    <p className={classes.footer__title}>
                        {t('common:contacts')}
                    </p>
                    <div className={classes.footer__contact}>
                        <MdHome />
                        <p>Ukraine, Kiev</p>
                    </div>
                    <div className={classes.footer__contact}>
                        <MdPhone />
                        <p><a href="tel:04410230112">044 102 301 12</a></p>
                    </div>
                    <div className={classes.footer__contact}>
                        <MdEmail />
                        <p><a href="mailto:hello@almocode.co">
                            hello@almocode.co
                        </a></p>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>
                <p>{t('common:copywrite')}</p>
                <LanguageToggle />
            </div>
        </footer>
    )
}

export default Footer