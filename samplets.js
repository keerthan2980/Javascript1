function isAdult(user) {
    return user.age > 18;
}
var keerthan = {
    name: 'Keerthan',
    age: 22
};
var isKeerthanAdult = isAdult(keerthan);
console.log('Is Keerthan adult--' + isKeerthanAdult);
 