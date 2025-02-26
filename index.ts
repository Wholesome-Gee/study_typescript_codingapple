namespace MyNamespace {
  export type Dog = string;
}
interface Dog { name : string };



let dog1 :MyNamespace.Dog = 'bark';
let dog2 :Dog = { name : 'paw' }