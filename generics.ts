
/**
 * Generic is used for the reusability of the components, function, array, etc... 
 */
interface bottle{
    brand: string,
    type: number
}

class bottle implements bottle{
    public brand:string;
    public type:number;

    constructor(brand:string, type:number){
        this.brand = brand;
        this.type = type;
    }
}

let coca = new bottle('Coca-cola',2);

function bottleidentity<T>(arg: T):T {
    return arg;
}

bottleidentity<bottle>(coca);

/**
 * Generics with functions
 */

function getSearchProduct<T>(product: T[]/**Or Array<T> */):T{
    //database operation
    const index = 3;
    return product[index];
}

const getSearchProductArrowFunction = <T>(product: Array<T>):T => {
    const index = 3;
    return product[index];
} 

/**
 * Use case : generics class that can handle all type of sellable item(quiz or course)
 */

interface Quiz {
    name : string,
    type: String
    
}

interface Course{
    name : string,
    author : string,
    length : string
}

class Sellable<T>{
    public card : T[] = [];

    addToCard(product: T) {
        this.card.push(product);
    }
}

let typescript_crash_course = new Sellable<Course>();
// Creating a course
const course1: Course = {
    name: "TypeScript Crash Course",
    author: "John Doe",
    length: "5 hours"
};

// Adding the course to the card
typescript_crash_course.addToCard(course1);

console.log(typescript_crash_course.card); // Output: [ { name: 'TypeScript Crash Course', author: 'John Doe', length: '5 hours' } ]

