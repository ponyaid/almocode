export interface Project {
    id: number,
    attributes: {
        name: string,
        category: {
            data: {
                id: number,
                attributes: {
                    name: string
                }
            }
        },

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

        tags: {
            id: number,
            name: string
        }[]
    }
}