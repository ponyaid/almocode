import axios from 'axios'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import { MdOutlineEast } from 'react-icons/md'
import {
    FaReact,
    FaJs,
    FaNode,
    FaPython,
    FaFigma,
    FaGithub,
    FaShopify
} from 'react-icons/fa'
import Layout from '../../components/Layout'
import Questions from '../../components/Questions'
import { Service } from '../../models/service'
import classes from '../../src/scss/services.module.scss'


const TechIcon = ({ tech }: { tech: string }) => {
    if (tech.toLowerCase() === 'react')
        return <FaReact />
    if (tech.toLowerCase() === 'js')
        return <FaJs />
    if (tech.toLowerCase() === 'node')
        return <FaNode />
    if (tech.toLowerCase() === 'python')
        return <FaPython />
    if (tech.toLowerCase() === 'figma')
        return <FaFigma />
    if (tech.toLowerCase() === 'github')
        return <FaGithub />
    if (tech.toLowerCase() === 'shopify')
        return <FaShopify />
}


const Service = ({ service }: { service: Service }) => {
    return (
        <Layout>
            <section className="head head_dark">
                <div className="head__info head__info_col head__info_sticky">
                    <h2 className="head__title">{service.attributes.name}</h2>
                    <p className="head__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, placeat velit?
                    </p>
                    <button className={`btn head__btn`}>
                        Get estimate
                        <MdOutlineEast />
                    </button>
                </div>
                <div className="head__body">
                    <div className="head__cover">
                        <Image
                            alt="pic"
                            src={process.env.NEXT_PUBLIC_STRAPI_HOST + service.attributes.preview.data.attributes.url}
                            width={720}
                            height={494}
                            quality={60}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center top'
                        />
                    </div>
                    <div className="head__text">
                        <ReactMarkdown>
                            {service.attributes.description}
                        </ReactMarkdown>
                    </div>
                </div>
            </section>

            <section className="section section_dark">
                <header className="section__header">
                    <h3 className="section__title">Expertise</h3>
                </header>

                <div className={classes.details}>
                    {service.attributes.capabilities.data.map(capability =>
                        <div key={capability.id} className={classes.detail}>
                            <h4 className={classes.detail__title}>{capability.attributes.name}</h4>
                            <div className={classes.detail__techs}>
                                <ul>
                                    {capability.attributes.technologies.data.map(tech =>
                                        <li key={tech.id} className={classes.detail__tech}>
                                            <TechIcon tech={tech.attributes.name} />
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <ul className={classes.detail__list}>
                                {capability.attributes.points.map(point =>
                                    <li
                                        key={point.id}
                                        className={classes.detail__listItem}>
                                        {point.text}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}

                </div>
            </section>

            <section className="section">
                <header className="section__header">
                    <h3 className="section__title">FAQ</h3>
                </header>

                <Questions questions={service.attributes.articles.data} />
            </section>

            <section className="cta">
                <p>Let’s work together.</p>
                <p>We’d love to hear from you</p>
                <button className={`btn cta__btn`}>
                    Get in touch
                    <MdOutlineEast />
                </button>
            </section>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const services = await axios.get('/services?populate=*')

    const paths = services.data.data.map((service: Service) => ({
        params: { slug: service.attributes.slug }
    }))
    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }: { params: { slug: string } }) => {
    const service = await axios.get(
        `/services?filters[slug][$eq]=${params.slug}&populate=capabilities.points,capabilities.technologies,articles,preview`
    )

    return {
        props: {
            service: service.data.data[0],
        },
        revalidate: 60
    }
}


export default Service