import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import BackButton from '../../components/BackButton'
import Layout from '../../components/Layout'
import { Article } from '../../models/atricle'


const Article = ({ article }: { article: Article }) => {
    return (
        <Layout>
            <section className="head">
                <div className="head__info head__info_col head__info_sticky">
                    <BackButton />
                    <h2 className="head__title">{article.attributes.title}</h2>
                </div>
                <div className="head__body">
                    <div className="head__cover">
                        <Image
                            alt="pic"
                            src={process.env.NEXT_PUBLIC_STRAPI_HOST + article.attributes.preview.data.attributes.url}
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
                            {article.attributes.text}
                        </ReactMarkdown>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const articles = await axios.get('/articles?populate=*')
    const paths = articles.data.data.map((article: Article) => ({
        params: { slug: article.attributes.slug }
    }))

    return { paths, fallback: 'blocking' }
}


export const getStaticProps: GetStaticProps = async ({ params }: { params: { slug: string } }) => {
    const articles = await axios.get(`/articles?filters[slug][$eq]=${params.slug}&populate=*`)

    return {
        props: {
            article: articles.data.data[0],
        },
        revalidate: 60
    }
}

export default Article