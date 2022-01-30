import Link from 'next/link'
import Image from 'next/image'
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa'
import classes from '../src/scss/footer.module.scss'
import { MdEmail, MdHome, MdPhone } from 'react-icons/md'


const Footer = () => {
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
                        Search
                    </button>
                </form>
            </header>

            <div className={classes.footer__details}>
                <nav className={classes.footer__nav}>
                    <p className={classes.footer__title}>Navigation</p>
                    <Link href={'/'}>
                        <a className={classes.footer__navItem}>Home</a>
                    </Link>
                    <Link href={'/projects'}>
                        <a className={classes.footer__navItem}>All projects</a>
                    </Link>
                    <Link href={'/about'}>
                        <a className={classes.footer__navItem}>About for us</a>
                    </Link>
                    <Link href={'/blog'}>
                        <a className={classes.footer__navItem}>Our blog</a>
                    </Link>
                    <Link href={'/contacts'}>
                        <a className={classes.footer__navItem}>Contacts</a>
                    </Link>
                </nav>
                <nav className={classes.footer__nav}>
                    <p className={classes.footer__title}>Services</p>
                    <Link href={'/'}>
                        <a className={classes.footer__navItem}>E-commerce</a>
                    </Link>
                    <Link href={'/'}>
                        <a className={classes.footer__navItem}>Web sites</a>
                    </Link>
                    <Link href={'/'}>
                        <a className={classes.footer__navItem}>Mobile apps</a>
                    </Link>
                    <Link href={'/'}>
                        <a className={classes.footer__navItem}>Start ups</a>
                    </Link>
                    <Link href={'/'}>
                        <a className={classes.footer__navItem}>UX/UI Design</a>
                    </Link>
                </nav>
                <div className={`${classes.footer__contacts}`}>
                    <p className={classes.footer__title}>Contacts</p>
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
                        <p><a href="mailto:hello@almocode.co">hello@almocode.co</a></p>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>
                <p>Copyright © 2021 Almocode Inc. All rights reserved.</p>
                <select className={classes.select}>
                    <option value="RU">RU</option>
                    <option value="EN">EN</option>
                </select>
            </div>
        </footer>
    )
}

export default Footer