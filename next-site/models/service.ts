import { Article } from './atricle'
import { Capability } from './capability';


export interface Service {
    id: number,
    attributes: {
        slug: string,
        name: string,
        description: string,
        updatedAt: string,
        createdAt: string,
        publishedAt: string,
        parameters: {
            id: number,
            key: string,
            value: string
        }[],
        capabilities: { data: Capability[] },
        articles: { data: Article[] },
        locale: string
    }
}