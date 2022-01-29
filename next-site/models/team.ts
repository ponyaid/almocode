export interface Team {
    id: number,
    attributes: {
        teammates: {
            id: number,
            name: string,
            position: string
        }[]
    }
}