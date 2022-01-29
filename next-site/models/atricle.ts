export interface Article {
    id: number,
    attributes: {
        slug: string,
        title: string,
        text?: string,
        preview?: string
    }
}