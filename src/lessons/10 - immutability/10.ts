
export type UserwithLaptop = {
    name: string
    age: number
    address: {
        city: string
        house: number
    },
    laptop: {
        title: string
    }
}

export const upgradeUserLaptop = (u: UserwithLaptop, laptop:string) => {
    return {...u, laptop: {...u.laptop, title: laptop}}
}