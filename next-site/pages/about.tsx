import axios from 'axios'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Feedback from '../components/Feedback'
import Layout from '../components/Layout'
import classes from '../src/scss/about.module.scss'
import { Team } from '../models/team'


const About = ({ team }: { team: Team }) => {
    return (
        <Layout>
            <section className="head">
                <div className="head__info head__info_col">
                    <h2 className="head__title">About</h2>
                    <p className="head__desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, placeat velit?
                    </p>
                </div>
                <div className="head__body">
                    <div className="head__text">
                        <h4>Lorem, ipsum dolor.</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui veritatis nesciunt. Ut blanditiis architecto incidunt?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam tenetur quis, modi ullam molestias quia odio, facilis amet inventore natus soluta est fuga provident repellat facere eos quod aperiam et numquam maxime cum rerum! Animi, fugit aliquam ullam voluptas quidem numquam illum harum quae quisquam iste tenetur dignissimos unde.</p>
                        <h4>Lorem ipsum dolor sit.</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, fuga.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic architecto incidunt, quae culpa, neque omnis sapiente qui nobis nemo quidem consequuntur unde dolorem vel!</p>
                    </div>
                </div>
            </section>

            <section className="section section_border-top">
                <header className="section__header">
                    <h3 className="section__title">Team</h3>
                </header>
                <div className={classes.team}>
                    {team.attributes.teammates.map(teammate =>
                        <div key={teammate.id} className={classes.team__item}>
                            <div className={classes.team__pic}>
                                <Image
                                    alt="avatar"
                                    src={process.env.NEXT_PUBLIC_STRAPI_HOST + teammate.avatar.data.attributes.url}
                                    width={282}
                                    height={282}
                                    quality={60}
                                    objectFit='cover'
                                    layout='responsive'
                                    objectPosition='center'
                                />
                            </div>
                            <div>
                                <p className={classes.team__name}>{teammate.name}</p>
                                <p className={classes.team__position}>{teammate.position}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Feedback />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const team = await axios.get('/team?populate=teammates,teammates.avatar')

    return {
        props: {
            team: team.data.data,
        },
        revalidate: 60
    }
}

export default About