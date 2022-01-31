import { Service } from './service';

export interface Article {
    id: number,
    attributes: {
        slug: string,
        title: string,
        text: string,
        preview: {
            data: {
                attributes: {
                    url: string,
                    width: number,
                    height: number,
                    alternativeText: string,
                }
            }
        },
        createdAt: string,
        services: { data: Service[] }
    }
}