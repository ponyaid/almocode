export interface Project {
    id: number,
    attributes: {
        name: string,
        category: {
            data: {
                attributes: {
                    name: string
                }
            }
        },
        tags: {
            id: number,
            name: string
        }[]
    }
}