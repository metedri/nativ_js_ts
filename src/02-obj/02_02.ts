export type CityType = {
    title: string
    houses: {
        buildedAt: number;
        repaired: boolean;
        address: { number: number; street: { title: string } }
    }[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}

export type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: {
        street: {
            title: string
        }
    },
}