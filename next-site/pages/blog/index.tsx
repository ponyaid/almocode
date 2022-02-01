import axios from 'axios'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Moment from 'react-moment'
import { useEffect, useState } from 'react'
import { MdOutlineEast } from 'react-icons/md'
import BackButton from '../../components/BackButton'
import Layout from '../../components/Layout'
import Tablist from '../../components/Tablist'
import { Article } from '../../models/atricle'
import { Service } from '../../models/service'
import classes from '../../src/scss/blog.module.scss'
import ReactMarkdown from 'react-markdown'


const Blog = ({ articles, services }: {
    articles: Article[],
    services: Service[],
}) => {
    const [filtered, setFiltered] = useState<Article[]>([])

    useEffect(() => {
        setFiltered(articles)
    }, [articles])

    const tablistHandler = (value: number) => {
        if (value === 0) {
            return setFiltered(articles)
        }
        const index = value - 1
        const updated = articles.filter(a => {
            const arr = a.attributes.services.data.map(s => s.id)
            return arr.includes(services[index].id)
        })

        setFiltered(updated)
    }

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
                        <Tablist
                            onChange={tablistHandler}
                            data={['All articles', ...services.map(service => service.attributes.name)]}
                        />
                    </nav>
                </header>
                <div className={classes.blog}>
                    {filtered.map(article =>
                        <Link key={article.id} href={`/blog/${article.attributes.slug}`}>
                            <a className={classes.blog__item}>
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
                                    <span className={classes.blog__itemCategory}>
                                        <Moment format='MMM DD, YYYY'>{article.attributes.createdAt}</Moment>
                                    </span>
                                    <p className={classes.blog__itemTitle}>
                                        {article.attributes.title}</p>
                                    <div className={classes.blog__itemText}>
                                        <ReactMarkdown>{article.attributes.text}</ReactMarkdown>
                                    </div>
                                </div>
                            </a>
                        </Link>
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


export const getStaticProps: GetStaticProps = async () => {
    const articles = await axios.get('/articles?populate=*')
    const services = await axios.get('/services?populate=*')

    return {
        props: {
            articles: articles.data.data,
            services: services.data.data
        },
        revalidate: 60
    }
}


export default Blog