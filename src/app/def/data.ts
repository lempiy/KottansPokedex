export interface IData<T> {
    meta: IMeta,
    objects: T[]
}

interface IMeta {
    limit: number,
    next: string|null,
    offset: number,
    previous: string|null,
    total_count: number
}
