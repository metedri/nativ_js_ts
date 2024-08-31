import { CityType, GovernmentBuildingsType } from "../02-obj/02_02";

const ages = [10, 20, 22, 1, 100, 90, 14];

const predicate = (age:number) => {
    return age > 90;
};

const oldAge =[100];

type CoursesTupe = {
    title: string
    price: number
};

const courses = [
    {title: 'css', price: 110},
    {title: 'js', price: 200},
    {title: 'react', price: 150},
];

const chipCourses = courses.filter((courses)=> courses.price < 160);

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
};

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], staff: number) => {
    return buildings.filter(b => b.staffCount > staff)
};