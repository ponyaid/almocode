import { Technology } from './technology';

export interface Capability {
    id: number,
    attributes: {
        name: string,
        points: {
            id: number,
            text: string,
        }[],
        technologies: { data: Technology[] }
    }
}