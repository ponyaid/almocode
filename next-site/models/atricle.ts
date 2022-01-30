import { Service } from './service';

export interface Article {
    id: number,
    attributes: {
        slug: string,
        title: string,
        text?: string,
        preview?: string,
        createdAt: string,
        services: { data: Service[] }
    }
}