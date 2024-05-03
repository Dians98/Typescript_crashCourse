type Cat = {
    /**
     * not be able to change 
     */
    readonly _id:string
    name : string
    age : number
    /**
     * ? is used to say optional
     */
    isWise ? : number
}

let myCat: Cat = {
    _id : "12345",
    name : "mimi",
    age :  2
}

myCat.name = "Miaou!"

/**
 * Not possible because it is a read only property
 */
/*
myCat._id="45678"; */