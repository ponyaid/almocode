import { Capability } from './capability'
import { Service } from './service'


export interface Home {
    attributes: {
        title: string,
        subtitle: string,
        services: {
            base: { data: Service }
        }[],
        capabilities: {
            base: { data: Capability }
        }[]
    }
}