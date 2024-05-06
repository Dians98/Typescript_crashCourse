/**
 * Restrict choices of users 
 */

enum seatChoiceNumber  {
    /**
     * Always increasing number
     */
    AISLE, //0
    MIDDLE, //1
    WINDOW //2
}

enum seatChoice  {

    AISLE = "AISLE", 
    MIDDLE = "MIDDLE", 
    WINDOW = "WINDOW"
}

const hcSeat = seatChoice.WINDOW
const seat = seatChoiceNumber.AISLE