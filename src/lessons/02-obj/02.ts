export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: {streetTitle: string; city: {title: string, countryTitle: string}}
    technologies: {id: number; title: string}[]
}

export const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.technologies[2].title)