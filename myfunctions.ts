function addTwo(num : number){
    return num +2
}

addTwo(5)

let loginUser = (email: string, password: string, hasActivated: boolean = false /*By default*/ ) => {

}
/**
 * If we didn't add a default value on the function definitiion
 * We would have an error here
 */
loginUser("Diano","diano.faniry@gmail.com") 

const heros = ["Thor","Spiderman","Superman"]

/**
 * Map is used to loop through array in JS/TS
 */
heros.map((hero):string => {
    return `hero is ${hero}`
})

