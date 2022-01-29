import Link from 'next/link'
import { BsPaperclip } from 'react-icons/bs'
import { FaTelegramPlane, FaInstagram, FaFacebookF } from 'react-icons/fa'
import classes from '../src/scss/footer.module.scss'


const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__details}>
                <div className={classes.footer__detail}>
                    <h2 className={classes.footer__title}>Contact</h2>
                    <ul className={classes.footer__social}>
                        <li className={classes.footer__socialItem}><Link href="#"><a><FaInstagram /></a></Link></li>
                        <li className={classes.footer__socialItem}><Link href="#"><a><FaFacebookF /></a></Link></li>
                        <li className={classes.footer__socialItem}><Link href="#"><a><FaTelegramPlane /></a></Link></li>
                    </ul>
                    <form className={classes.searchForm}>
                        <input type="text" className={classes.searchForm__input} />
                        <button className={classes.searchForm__btn}>
                            Search
                        </button>
                    </form>
                </div>
                <div className={`${classes.footer__detail} ${classes.footer__detail_address}`}>
                    <div>
                        <p className={classes.footer__key}>Office</p>
                        <p className={classes.footer__value}>Ukraine, Kiev</p>
                    </div>
                    <div>
                        <p className={classes.footer__key}>Phone</p>
                        <p className={classes.footer__value}>044 102 301 12</p>
                    </div>
                    <div>
                        <p className={classes.footer__key}>E-mail</p>
                        <p className={classes.footer__value}>hello@almocode.co</p>
                    </div>
                </div>
                <div className={classes.footer__detail}>
                    <nav className={classes.footer__nav}>
                        <Link href={'/'}>
                            <a className={classes.footer__navItem}>Main</a>
                        </Link>
                        <Link href={'/'}>
                            <a className={classes.footer__navItem}>Projects</a>
                        </Link>
                        <Link href={'/'}>
                            <a className={classes.footer__navItem}>Services</a>
                        </Link>
                        <Link href={'/'}>
                            <a className={classes.footer__navItem}>About</a>
                        </Link>
                        <Link href={'/'}>
                            <a className={classes.footer__navItem}>Blog</a>
                        </Link>
                    </nav>
                    <select className={classes.select}>
                        <option value="RU">RU</option>
                        <option value="EN">EN</option>
                    </select>
                </div>
            </div>
            {/* <div className={classes.footer__formWrap}>
                <form className={classes.form}>
                    <input type="text" className={classes.form__input} placeholder='Name' />
                    <input type="text" className={classes.form__input} placeholder='Phone' />
                    <input type="text" className={classes.form__input} placeholder='E-mail' />
                    <div className={classes.form__footer}>
                        <div className={classes.upload}>
                            <label htmlFor="upload" className={classes.upload__label}>
                                <BsPaperclip />&nbsp;Attach file
                            </label>
                            <input id="upload" type="file" className={classes.upload__input} />
                        </div>

                        <button className='btn btn_primary'>Send request</button>
                    </div>
                </form>
            </div> */}

            <div className={classes.footer__copyright}>
                <p>Copyright © 2021 Almocode Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer