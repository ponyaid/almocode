import { Article } from './atricle'
import { Capability } from './capability';
import { Project } from './project';


export interface Service {
    id: number,
    attributes: {
        slug: string,
        name: string,
        description: string,
        updatedAt: string,
        createdAt: string,
        publishedAt: string,
        projects: { data: Project[] },
        capabilities: { data: Capability[] },
        articles: { data: Article[] },
        locale: string,

        preview: {
            data: {
                attributes: {
                    url: string,
                    width: number,
                    height: number,
                    alternativeText: string,
                }
            }
        }
    }
}