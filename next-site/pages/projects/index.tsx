import React from 'react'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { MdOutlineEast } from 'react-icons/md'
import Layout from '../../components/Layout'
import BackButton from '../../components/BackButton'
import { Category } from '../../models/category'
import { Project as ProjectModel } from '../../models/project'
import Project from '../../components/Project'
import Checklist from '../../components/Checklist'


const Projects = ({ categories, projects }: { categories: Category[], projects: ProjectModel[] }) => {
    return (
        <Layout>
            <section className="head">
                <div className="head__info">
                    <BackButton />
                    <h2 className="head__title">Projects</h2>
                    <p className="head__desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ea voluptate minus cum ab quae at sit earum fugit nesciunt.
                    </p>
                </div>
            </section>

            <section className="section section_border-top">
                <header className="section__header">
                    <nav className="section__nav">
                        <Checklist data={categories} />
                    </nav>
                </header>
                <div>
                    {projects.map(project =>
                        <Project key={project.id} project={project} />
                    )}
                </div>
            </section>

            <section className="section section_border-top">
                <header className="section__header">
                    <h3 className="section__title">FAQ</h3>
                </header>

                <div className="faq">
                    <div className="question">
                        <p className="question__title">Lorem ipsum dolor sit amet.</p>
                        <p className="question__subtitle">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="question">
                        <p className="question__title">Lorem ipsum dolor sit amet.</p>
                        <p className="question__subtitle">Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="question">
                        <p className="question__title">Lorem ipsum dolor sit amet.</p>
                        <p className="question__subtitle">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
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

export const getStaticProps: GetStaticProps = async () => {
    const categories = await axios.get('/categories')
    const projects = await axios.get('/projects?populate=*')

    return {
        props: {
            categories: categories.data.data,
            projects: projects.data.data,
        },
        revalidate: 60
    }
}

export default Projects