function addTwo(num) {
    return num + 2;
}
addTwo(5);
var loginUser = function (email, password, hasActivated /*By default*/) {
    if (hasActivated === void 0) { hasActivated = false; }
};
/**
 * If we didn't add a default value on the function definitiion
 * We would have an error here
 */
loginUser("Diano", "diano.faniry@gmail.com");
var heros = ["Thor", "Spiderman", "Superman"];
/**
 * Map is used to loop through array in JS/TS
 */
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
