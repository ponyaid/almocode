import Link from 'next/link'
import { MdOutlineEast } from 'react-icons/md'
import classes from '../src/scss/project.module.scss'


const Project = ({ project }) => {
    return (
        <div className={classes.project}>
            <div className={classes.project__details}>
                <p className={classes.project__category}>
                    {project.attributes.category?.data.attributes.name}
                </p>
                <h3 className={classes.project__title}>
                    {project.attributes.name}
                </h3>
                <ul className={classes.project__tags}>
                    {project.attributes.tags?.map(tag =>
                        <li key={tag.id} className={classes.project__tag}>
                            {tag.name}
                        </li>
                    )}
                </ul>
                <MdOutlineEast className={classes.project__arrow} />
            </div>

            <Link href={`/projects/${project.slug}`}>
                <a className={classes.project__cover}>
                    <div className={classes.project__coverWrap}>

                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Project