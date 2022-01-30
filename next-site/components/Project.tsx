import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineEast } from 'react-icons/md'
import classes from '../src/scss/project.module.scss'


const Project = ({ project }) => {
    return (
        <div className={classes.project}>
            <div className={classes.project__details}>
                <p className={classes.project__category}>
                    {project.attributes.category.data?.attributes.name}
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
                        <Image
                            alt="pic"
                            src={process.env.NEXT_PUBLIC_STRAPI_HOST + project.attributes.preview.data.attributes.url}
                            width={800}
                            height={380}
                            quality={60}
                            objectFit='cover'
                            layout='responsive'
                            objectPosition='center top'
                        />
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default Project