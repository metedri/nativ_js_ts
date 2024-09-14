import { upgradeUserLaptop, UserwithLaptop } from "./10"

test('upgrade laptop to macbook', () =>{
    let user: UserwithLaptop ={
        name: 'Dimych',
        age: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const newUser = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(newUser)
    expect(user.address).toBe(newUser.address)
    expect(user.laptop).not.toBe(newUser.laptop)
    expect(newUser.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})