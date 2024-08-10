import { StudentType } from "../02-obj/02"
import { CityType, GovernmentBuildingsType } from "../02-obj/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: student.technologies.length + 1,
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const changeStudentLive = (s: StudentType, city: string) => {
    return s.address.city.title === city
}

export const changeBudget = (c: GovernmentBuildingsType, a: number) => {
    c.budget += a
}

export const repairHouse = (s: CityType) => {
    s.houses[1].repaired = true;
}

export const toFireStaff = (s: CityType, a: number) => {
    s.governmentBuildings[0].staffCount -= a
}

export const toHireStaff = (s: CityType, a: number) => {
    s.governmentBuildings[0].staffCount += a
}