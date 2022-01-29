import { useEffect, useRef, useState } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import axios from 'axios'
import type { LottiePlayer } from 'lottie-web'
import { MdOutlineEast, MdSouthEast } from 'react-icons/md'

import Layout from '../components/Layout'
import Project from '../components/Project'
import Checklist from '../components/Checklist'
import Tablist from '../components/Tablist'
import { Service } from '../models/service'
import { Project as ProjectModel } from '../models/project'
import { Category } from '../models/category'
import classes from '../src/scss/home.module.scss'



const Home = ({ services, categories, projects }: {
  services: Service[],
  categories: Category[],
  projects: ProjectModel[]
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default))
  }, [])

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data.json',
      });

      return () => animation.destroy()
    }
  }, [lottie])

  return (
    <Layout>
      <section className={classes.head}>
        <figure className={classes.head__figure}>
          <div className={classes.head__figureContent} ref={ref} />
        </figure>

        <div className={classes.head__info}>
          <h1 className={classes.head__title}>
            SaaS application development and go to market company
          </h1>
          <p className={classes.head__subtitle}>
            We are here to bring the lacking expertise and reduce operational costs for
            your SaaS product by wrapping your core business team with reliable offshore experts
          </p>
        </div>
        <Link href="/contacts">
          <a className={`btn ${classes.head__btn}`}>Get estimate</a>
        </Link>
      </section>

      <section className={classes.industries}>
        <div className={classes.industries__items}>
          {services.map(service =>
            <Link href={`/services/${service.attributes.slug}`} key={service.id}>
              <a className={classes.industry}>
                <header className={classes.industry__header}>
                  <h4>{service.attributes.name}</h4>
                  <MdSouthEast className={classes.industry__icon} />
                </header>

                <div className={classes.industry__details}>
                  {service.attributes.parameters?.map(parameter =>
                    <p key={parameter.id} className={classes.industry__detail}>
                      <span className={classes.industry__number}>{parameter.value}</span>&nbsp;
                      <span>{parameter.key}</span>
                    </p>
                  )}
                </div>
              </a>
            </Link>
          )}
        </div>
      </section>

      <section className="section">
        <header className="section__header">
          <h2 className="section__title">
            Projects
          </h2>
          <nav className="section__nav">
            <Checklist data={categories} />
          </nav>
          <Link href='/projects'>
            <a className="btn section__btn">
              All projects
              <MdOutlineEast />
            </a>
          </Link>
        </header>

        <div >
          {projects.map(project =>
            <Project key={project.id} project={project} />
          )}
        </div>
      </section>

      <section className="section section_dark">
        <header className="section__header">
          <h2 className="section__title">
            Technologies
          </h2>
          <nav className="section__nav">
            <Tablist theme="dark" data={[
              'Popular', 'Front-end', 'Back-end', 'Database', 'DevOps'
            ]} />
          </nav>
        </header>

        <div className={classes.technologies}>
          {['JS', 'TypeScript', 'React', 'Redux', 'NextJS', 'Vue', 'Webpack'].map(technology =>
            <div key={technology} className={classes.technology}>
              <p className={classes.technology__title}>{technology}</p>
              <span>
                Show projects
                <MdOutlineEast />
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <header className="section__header">
          <h2 className="section__title">Stages</h2>
        </header>
        <div className={classes.stages}>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>01</span>
              <h3 className={classes.stage__title}>Pre-estimation</h3>
            </div>
            <p>15 years in SaaS application development services</p>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>02</span>
              <h3 className={classes.stage__title}>Final estimation</h3>
            </div>
            <p>15 years in SaaS application development services</p>
            <button className={`btn ${classes.stage__btn}`}>
              Send contact
              <MdOutlineEast />
            </button>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>03</span>
              <h3 className={classes.stage__title}>Design</h3>
            </div>
            <p>15 years in SaaS application development services</p>
            <button className={`btn ${classes.stage__btn}`}>
              Send contact
              <MdOutlineEast />
            </button>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>04</span>
              <h3 className={classes.stage__title}>Development</h3>
            </div>
            <p>15 years in SaaS application development services</p>
            <button className={`btn ${classes.stage__btn}`}>
              Send contact
              <MdOutlineEast />
            </button>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>05</span>
              <h3 className={classes.stage__title}>Manual & automatic testing</h3>
            </div>
            <p>15 years in SaaS application development services</p>
            <button className={`btn ${classes.stage__btn}`}>
              Send contact
              <MdOutlineEast />
            </button>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>06</span>
              <h3 className={classes.stage__title}>Support</h3>
            </div>
            <p>15 years in SaaS application development services</p>
            <button className={`btn ${classes.stage__btn}`}>
              Send contact
              <MdOutlineEast />
            </button>
          </div>
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
  const services = await axios.get('/services?populate=*')
  const categories = await axios.get('/categories')
  const projects = await axios.get('/projects?populate=*')

  return {
    props: {
      services: services.data.data,
      categories: categories.data.data,
      projects: projects.data.data,
    },
    revalidate: 60
  }
}

export default Home
