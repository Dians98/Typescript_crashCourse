
/**
 * Type is used to define the datatype
 * It is like an interface
 */
type User = {
    name : string;
    email : string;
    isActive: boolean;
}

/**
 * 
 * @param user should be type User that we defined above
 * @returns the same type
 */
function createUser(user:User){
    return {name:"", email: "",isActive:true}
}

createUser({name:"", email: "",isActive:true})