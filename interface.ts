/**
 * 
 */
interface UserType {
    readonly _id: string,
    email : string,
    userId: number,
    googleId? : string,
    
    
    startTrial() : string,
    //OR
    //startTrial : () => string,
    getCouponName(couponName : string): string
}

const Diano:UserType = {
    _id:"dians98", 
    email:"diano.faniry@gmail.com", 
    userId:98,
    startTrial : () => {
        return "Trail started"
    },
    getCouponName(couponName: "Test") {
        return couponName
    },
}