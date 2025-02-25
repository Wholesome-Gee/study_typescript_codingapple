var User = /** @class */ (function () {
    function User() {
    }
    User.addOne = function (a) {
        return User.x + a;
    };
    User.print = function () {
        return User.x;
    };
    User.x = 10;
    User.y = 20;
    return User;
}());
console.log(User.addOne(3)); //이렇게 하면 x가 3 더해져야함
console.log(User.addOne(4)); //이렇게 하면 x가 4 더해져야함
console.log(User.print());
