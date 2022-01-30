import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { MdOutlineEast } from 'react-icons/md'
import Layout from '../../components/Layout'
import BackButton from '../../components/BackButton'
import { Category } from '../../models/category'
import { Project as ProjectModel } from '../../models/project'
import Project from '../../components/Project'
import Checklist from '../../components/Checklist'
import { Article } from '../../models/atricle'
import Questions from '../../components/Questions'


const Projects = ({ categories, projects, articles }: {
    categories: Category[],
    projects: ProjectModel[],
    articles: Article[]
}) => {
    const [filtered, setFiltered] = useState<ProjectModel[]>([])
    const [selectedCategories, setSelectedCategories] = useState<number[]>([])

    useEffect(() => {
        if (!selectedCategories.length) {
            return setFiltered(projects)
        }

        const updated = projects.filter(p => selectedCategories.includes(p.attributes.category.data.id))
        setFiltered(updated)
    }, [projects, selectedCategories])

    const checklistHandler = (i?: number) => {
        if (i === undefined) {
            return setSelectedCategories([])
        }

        const id = categories[i].id
        const updated = [...selectedCategories]
        const index = updated.indexOf(id)
        if (index === -1) {
            setSelectedCategories([...updated, id])
        } else {
            updated.splice(index, 1)
            setSelectedCategories(updated)
        }
    }

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
                        <Checklist
                            onChange={checklistHandler}
                            data={categories.map(category => category.attributes.name)}
                        />
                    </nav>
                </header>
                <div>
                    {filtered.map(project =>
                        <Project key={project.id} project={project} />
                    )}
                </div>
            </section>

            <section className="section section_border-top">
                <header className="section__header">
                    <h3 className="section__title">FAQ</h3>
                </header>

                <Questions questions={articles} />
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
    const articles = await axios.get('/articles?pagination[limit]=3')
    const categories = await axios.get('/categories')
    const projects = await axios.get('/projects?populate=*')

    return {
        props: {
            articles: articles.data.data,
            categories: categories.data.data,
            projects: projects.data.data,
        },
        revalidate: 60
    }
}

export default Projects