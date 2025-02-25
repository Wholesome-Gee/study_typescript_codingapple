class User {
  private static x = 10;
  public static y = 20;
  static addOne(a:number):number {
    return User.x + a
  }
  static print():number{
    return User.x;
  }
}
console.log(User.addOne(3)) //이렇게 하면 x가 3 더해져야함
console.log(User.addOne(4)) //이렇게 하면 x가 4 더해져야함
console.log(User.print())