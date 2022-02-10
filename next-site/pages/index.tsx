import { useCallback, useEffect, useRef, useState } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import axios from 'axios'
import type { LottiePlayer } from 'lottie-web'
import { MdOutlineEast, MdSouthEast } from 'react-icons/md'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../components/Layout'
import Project from '../components/Project'
import Tablist from '../components/Tablist'
import { Capability } from '../models/capability'
import { Home } from '../models/home'
import { Project as ProjectModel } from '../models/project'
import classes from '../src/scss/home.module.scss'


const Home = ({ projects, home }: {
  projects: ProjectModel[],
  home: Home
}) => {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const [lottie, setLottie] = useState<LottiePlayer | null>(null)
  const [currentCapability, setCurrentCapability] = useState(0)

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

  const tablistHandler = useCallback((index: number) => {
    setCurrentCapability(index)
  }, [])

  return (
    <Layout>
      <section className={classes.head}>
        <figure className={classes.head__figure}>
          <div className={classes.head__figureContent} ref={ref} />
        </figure>

        <div className={classes.head__info}>
          <h1 className={classes.head__title}>
            {home.attributes.title}
          </h1>
          <p className={classes.head__subtitle}>
            {home.attributes.subtitle}
          </p>
        </div>
        <Link href="/contacts">
          <a className={`btn ${classes.head__btn}`}>
            {t('common:get-estimate')}
          </a>
        </Link>
      </section>

      <section className={classes.industries}>
        <div className={classes.industries__items}>
          {home.attributes.services.map(service =>
            <Link
              key={service.base.data.id}
              href={`/services/${service.base.data.attributes.slug}`}>
              <a className={classes.industry}>
                <header className={classes.industry__header}>
                  <h4>{service.base.data.attributes.name}</h4>
                  <MdSouthEast className={classes.industry__icon} />
                </header>

                <div className={classes.industry__details}>
                  <p className={classes.industry__detail}>
                    <span className={classes.industry__number}>
                      0{service.base.data.attributes.projects.data.length}
                    </span>&nbsp;
                    <span>{t('common:projects')}</span>
                  </p>
                  <p className={classes.industry__detail}>
                    <span className={classes.industry__number}>
                      0{service.base.data.attributes.capabilities.data.length}
                    </span>&nbsp;
                    <span>{t('common:capabilities')}</span>
                  </p>
                </div>
              </a>
            </Link>
          )}
        </div>
      </section>

      <section className="section">
        <header className="section__header">
          <h2 className="section__title">
            {t('common:projects')}
          </h2>
          <Link href='/projects'>
            <a className="btn section__btn">
              {t('common:see-more')}
              <MdOutlineEast />
            </a>
          </Link>
        </header>

        <div>
          {projects.map(project =>
            <Project key={project.id} project={project} />
          )}
        </div>
      </section>

      <section className="section section_dark">
        <header className="section__header">
          <h2 className="section__title">
            {t('common:technologies')}
          </h2>
          <nav className="section__nav">
            <Tablist
              theme="dark"
              onChange={tablistHandler}
              data={home.attributes.capabilities.map(capability => capability.base.data.attributes.name)}
            />
          </nav>
        </header>
        <div className={classes.technologies}>
          {home.attributes.capabilities[currentCapability]?.base.data.attributes.technologies.data.map(technology =>
            <div key={technology.id} className={classes.technology}>
              <p className={classes.technology__title}>
                {technology.attributes.name}
              </p>
              <span>
                {t('common:see-more')}
                <MdOutlineEast />
              </span>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <header className="section__header">
          <h2 className="section__title">{t('common:stages')}</h2>
        </header>
        <div className={classes.stages}>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>01</span>
              <h3 className={classes.stage__title}>Pre-estimation</h3>
            </div>
            <p>
              You`ve got the initial estimation of development costs based on your spec and meet our Project team
            </p>
            <Link href={'/contacts'}>
              <a className={`btn ${classes.stage__btn}`}>
                Contact us
                <MdOutlineEast />
              </a>
            </Link>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>02</span>
              <h3 className={classes.stage__title}>Final estimate</h3>
            </div>
            <p>
              You`ve got the final development cost based on our resource and time estimation and project plan including risk mitigation
            </p>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>03</span>
              <h3 className={classes.stage__title}>UI/UX Design</h3>
            </div>
            <p>
              We know that UI/UX design is not only about a visual picture. You will get an attractive and user-friendly design of your web or mobile interface, that is comfortable to end user
            </p>
            <Link href={'/projects'}>
              <a className={`btn ${classes.stage__btn}`}>
                Show cases
                <MdOutlineEast />
              </a>
            </Link>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>04</span>
              <h3 className={classes.stage__title}>Development</h3>
            </div>
            <p>
              You meet a development team that will work on your project and we start the development process
            </p>
            <Link href={'/projects'}>
              <a className={`btn ${classes.stage__btn}`}>
                Show cases
                <MdOutlineEast />
              </a>
            </Link>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>05</span>
              <h3 className={classes.stage__title}>QA Testing</h3>
            </div>
            <p>
              We make sure that all mistakes and defects are prevented and delivered solution will run smoothly and totally meet your expectations
            </p>
          </div>
          <div className={classes.stage}>
            <div className={classes.stage__header}>
              <span>06</span>
              <h3 className={classes.stage__title}>Support & management</h3>
            </div>
            <p>
              We guarantee the smooth delivery of your project with our experienced Project managers and advantageous combinations of the best PM tools and methodologies
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <p>{t('cta:title')}</p>
        <p>{t('cta:subtitle')}</p>
        <Link href="/contacts">
          <a className={`btn cta__btn`}>
            {t('cta:action')}
            <MdOutlineEast />
          </a>
        </Link>
      </section>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const querystring = require('querystring')

  const homeParams = {
    locale,
    populate: [
      'services.base.projects',
      'services.base.capabilities',
      'capabilities.base.technologies'
    ]
  }

  const projects = await axios.get('/projects?populate=*')
  const home = await axios.get(`/home?${querystring.stringify(homeParams)}`)

  return {
    props: {
      projects: projects.data.data,
      home: home.data.data,
    },
    revalidate: 60
  }
}

export default Home
