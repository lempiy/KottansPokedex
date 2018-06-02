export interface IPokemon {
    national_id: number,
    name: string,
    resource_uri: string,
    types: IType[]
}

export interface IPokemonDetails {
    height: number,
    id: number,
    name: string,
    weight: number,
    stats: IStats[]
}

interface IStats {
    base_stat: number,
    effort: number,
    stat: IStat
}

interface IStat {
    name: string,
    url: string
}

interface IType {
    name: string,
    resource_uri: string,
}
