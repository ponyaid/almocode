import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineEast } from 'react-icons/md'
import BackButton from '../../components/BackButton'
import Layout from '../../components/Layout'
import Tablist from '../../components/Tablist'
import classes from '../../src/scss/blog.module.scss'


const Blog = () => {
    return (
        <Layout>
            <section className="head">
                <div className="head__info">
                    <BackButton />
                    <h2 className="head__title">Blog</h2>
                    <p className="head__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, placeat velit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </section>

            <section className="section section_border-top">
                <header className="section__header">
                    <nav className="section__nav">
                        <Tablist data={['All articles', 'One more tab', 'Something']} />
                    </nav>
                </header>
                <div className={classes.blog}>
                    {[1, 2, 3, 4, 5, 6].map(key =>
                        <div key={key} className={classes.blog__item}>
                            <div className={classes.blog__itemImg}>
                                <Image
                                    layout="fill"
                                    alt="cover"
                                    src="/assets/StockSnap_60M8KU6CXB.jpg"
                                    objectFit="cover"
                                    objectPosition="center top"
                                />
                            </div>
                            <div className={classes.blog__itemInfo}>
                                <span className={classes.blog__itemCategory}>Lorem</span>
                                <p className={classes.blog__itemTitle}>Lorem ipsum dolor sit.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, ut!</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="cta">
                <p>Let’s work together.</p>
                <p>We’d love to hear from you</p>
                <Link href="/contacts">
                    <a className={`btn cta__btn`}>
                        Get in touch
                        <MdOutlineEast />
                    </a>
                </Link>
            </section>
        </Layout>
    )
}


export default Blog