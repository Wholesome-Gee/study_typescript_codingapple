## 타입스크립트 필수문법 10분정리아 설치 셋팅
### 1. 타입스크립트 설치
- `npm i -g typescript`
- `index.ts` 파일 생성
- `tsconfig.json` 파일 생성
  ```ts
  {
    "compilerOptions": {
      "target":"es5",
      "module":"commonjs",
      "strictNullChecks": true,
      // ts에서 html을 불러올때, null인지 아닌지 캐치할 수 있음.
    }
  }
  ```
- `tsc -w` 을 입력하여 ts를 js로 컴파일
### 2. 리액트에서 타입스크립트 설치
- 이미있는 React 프로젝트에 설치하는거라면 `npm i --save typescript @types/node @types/react @types/react-dom @types/jest`
- 새로 React 프로젝트를 만드는거라면 `npx create-react-app <폴더명> --template typescript`
### 3. 변수에 타입지정
```ts
let 이름:string = '지용'
// 변수 이름은 문자열만 들어올 수 있다.

let 이름:string = ['지용'] 
// 변수 이름은 문자열만 들어올 수 있는 배열이다.

let 이름:{name:string, age?:number} = {name:'지용' age:30}
// 변수 이름은 객체이고, name값은 문자열만 age값은 숫자타입만 들어올 수 있다. 
// 그리고 age는 옵션이다.

let 이름:string|number = '지용'
let 이름:string|number = 123
// 변수 이름은 문자열이거나 숫자만 들어올 수 있다.

type MyType = string|number
let 이름:MyType = '지용'
let 이름:MyType = 123
// type 키워드로 타입자체를 변수화 시킬 수 있다.

type MyType = '지용'|'철수'
let 이름:MyType = '지용'
let 이름:MyType = '철수'
// type과 값을 지정해버릴 수도 있다.

type MyType = [number, string];
let 나:MyType = [32,'지용']
// 변수 나는 배열타입이고 첫번쨰 요소는 숫자타입, 두번쨰요소는 문자열 타입만 들어올 수 있다.

type MyType = {
  [key:string]:string
}
// MyType 타입의 객체내부에 string타입의 key는 값이 string 타입이다.

function 함수(x:number) :number {
  return x + 1;
}
// 함수는 숫자 타입을 리턴하고, 함수의 파라미터는 넘버타입만 들어올 수 있다.

class User {
  name:string;
  construction(name:string){
    this.name = name;
  }
}
// name은 string타입이고, 미리 중괄호 밖에 설정을 한번 더 해줘야한다.
- sting / number / boolean / null / undefined/ bigint / [] / {} 등
```
---
## 타입스크립트 컴파일시 세부설정 (tsconfig.json)
### 1. `tsconfig.json` 파일 생성
```ts
{
    "compilerOptions": {
      "target": "es5",  // 컴파일 버전 설정 ( es1~5, es2016, esnext )
    "module": "commonjs", // commonjs는 require로 다른 js파일을 불러오고 es2015,esnext는 import로 다른 js파일을 불러옴.
    "noImplicitAny": true, // 의도치않게 any타입이 발생할 경우 에러를 띄움.
    "strictNullChecks": true // null, undefined 타입에 이상한 조작이 들어가면 에러를 띄움.
  }
}
```
### 2. tsconfig에 들어갈만한 다른 항목들
```ts
{
  "compilerOptions": {
    "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
    "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
    "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
    "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
    "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
    "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
    "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
    "outDir": "./", //js파일 아웃풋 경로바꾸기
    "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
    "removeComments": true, //컴파일시 주석제거 

    "strict": true, //strict 관련, noImplicit 어쩌구 관련 모드 전부 켜기
    "noImplicitAny": true, //any타입 금지 여부
    "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기 
    "strictFunctionTypes": true, //함수파라미터 타입체크 강하게 
    "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
    "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
    "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

    "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
    "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
    "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
    "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
  }
}
```
### 3. 참조문서 링크
-  https://www.typescriptlang.org/tsconfig 
---
## 타입 미리 정하기 애매할때 ( union, any, unknown )
### 1. union타입
- `let a :(string | number)`
- 가급적 소괄호 안에 작성하기
- 원시자료형 변수에 union타입을 선언하면, 변수의 할당과 동시에 다른 하나의 타입은 사라진다.
- 참조자료형 변수에 union타입을 선언하면, 변수의 할당에도 다른 하나의 타입은 사라지지 않는다.
### 2. any타입
- 아무자료나 집어넣을 수 있다. (타입을 해제시켜버림)
- 비상 시 외에는 잘 안쓴다. (버그 발생 시 추적이 어려움)
  ```ts
  let 이름 :any = 'kim'
  이름 = 123;
  이름 = undefined;
  이름 = []

  let 이름2 :string = 이름 
  // 이름은 any타입이고, 이름2에 할당하면 이름2의 string 타입이 해제된다.
  ```
### 3. unknown타입
- any와 비슷하다. 
- 어떤 타입이 들어올지 모르는 경우 / 다양한 타입을 집어넣어야 할 경우에 사용한다.
- string을 넣든, number를 넣든, 뭐를 넣든 타입은 unknown이다.
  ```ts
  let 이름 :unknown = 'kim'
  이름 = 123;
  이름 = undefined;
  이름 = []

  let 이름2 :string = 이름 
  // 이름은 unknown타입이고, 이름2에 할당하면 이름2는 string타입만 받기에 에러가 발생한다.
  ```
---
## 함수에 타입 지정하는법 & void 타입
### 1. void 타입
- void타입은 함수에 한해서 사용할 수 있고, return이 없는 함수에 사용한다.
- 타입스크립트에서는 함수에 파라미터를 지정할 수 있고, 이 경우 함수는 무조건 파라미터를 전달해야하는데  
파라미터에 ? 를 붙혀서 파라미터를 옵션화 할 수 있다.
- ? 는 undefined 타입을 의미한다.
- 
  ```ts
  function 함수(x? :number):void {
    console.log(x);
  }

  function 함수(x :(number|undefined)):void {
    console.log(x);
  }

  함수(2)
  함수() // 원래는 파라미터를 넣으라는 에러가 뜨는데, 파라미터 x를 ?로 옵션화 하여서 에러가 없다.
  ```
---
## 타입확정하기 Narrowing(내로잉) & Assertion(어썰션)
### 1. Narrowing (내로잉)
- union 타입으로 나누어진 타입들에 의한 변수나 실행문을 조금 더 구체화 하는것
- 타입스크립트에서 함수 안에서 if문 쓸때 else문 안쓰면 에러가 뜸.
  ```ts
  function 함수(x :(number|string)) {
    //내로잉
    if( typeof x === 'number') {
      return x * 2
    } else if ( typeof x === 'string' ) {
      return x
    } else {
      return 0
    }
  }
  ```
### 2.Assertion (어썰션)
- union 타입같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할
- assertion을 쓰면 해당 변수를 다른 타입으로 생각해달라는거지, 다른타입으로 변환해달라는건 아님
  ```ts
  function 함수 (x :(number|string)) {
    return (x as number) + 1
    // 실제 x는 string이 들어오면 number로 생각해서 연산처리는 하되, x가 number타입으로 변하는건 아님
    // '123'이  파라미터로 들어오면 '1231'이 반환됨
  }
  ```
---
## 타입도 변수에 담아쓰세요 type alias 써서 & readonly
### 1. type alias
- 타입을 변수에 담아서 사용해라
  ```ts
  type Animal = string;
  type Person = { 
    name : string,
    age : number, 
  };

  let 강아지 :Animal = "뽀삐";
  let 주인 :Person = {
    name: "kim",
    age: 30,
  };
  ```

### 2. readonly
- object Type의 속성을 변경하지 못하게 하는 방법 = readonly
- readonly는 컴파일시 에러를 내는 것일 뿐, 컴파일 된 js파일에는 변경되어 적용되긴 한다.
  ```ts
  type Person = { 
    readonly name : string,
    age : number, 
  };
  let 주인 :Person = {
    name: "kim",
    age: 30,
  }
  
  // 주인.name = "park"  → error
  ```

### 3. object Type의 속성에도 ? 연산자를 붙힐 수 있다.
- `gender? :string,` 은 `gender : string|undefined` 와 같다.
  ```ts
  type Person = { 
    readonly name : string,
    age : number, 
  };
  let 주인 :Person = {
    name: "kim",
    age: 30,
  }
  ```

### 4. type extend ( type 합치기 )
 ```ts
 type Name = string;
 type Age = number;
 type NewOne = Name|Age; // type NewOne = string|number

 type Obj1 = { x:number };
 type Obj2 = { y:string };
 type NewObj = Obj1 & Obj2 & { z:string } // type NewObj = { x:number, y:string, z:string}
 ```
---
## Literal Types로 만드는 const 변수 유사품 & as const 문법법
### 1. Literal Types
- 특정 글자나 숫자만 가질 수 있게 제한을 두는 방법
  ```ts
  let name :'지용'|'철수';
  name = '지용'
  // name 은 '지용' 또는 '철수'타입입니다.
  type Person = {
    name :'지용'|'철수';
  };
  let man :Person = {
    name:'지용'
  }
  function 인사 (a :'hello') :void {
    console.log(a)
  }
  인사('hello')
  // 인사 함수의 파라미터는 'hello'타입만 가능합니다.
  ```
### 2. as const 문법
- as const는 객체나 배열을 읽기 전용으로 만들어준다.
- as const는 객체나 배열을 리터럴 타입으로 변환시킨다.
  ```ts
  let person = {
    name: 'kim'
  } as const;

  function getName(name :'kim') :void{
    // 파라미터 name은 'kim'리터럴 타입만 들어올 수 있다.
    console.log(name)
  }

  getName(person.name)
  // as const가 없었더라면 person.name은 string타입으로 파라미터 전송이 불가능했다.
  ```
- as const 대신하는 방법도 있다.
  ```ts

  //다른 방법1
  let person :{ name :'kim' } = {
    name: 'kim'
  }

  function getName(name :'kim') :void{
    console.log(name)
  }

  getName(person.name)


  //다른 방법2
  let person = {
    name: 'kim'
  }

  function getName(name :'kim') :void{
    console.log(name)
  }

  getName(person.name as 'kim')
  ```
---
## 함수와 methods를 type alias로 지정하는 법
### 1. 함수를 type alias(타입 변수)로 지정하기
- 함수를 type alias로 지정할 땐, arrow function을 사용한다.
- type alias로 지정된 함수를 사용하기 위해선 익명함수(함수표현식)을 사용해야 한다.
  ```ts
  type GetName = (name:string) => string;
  // GetName의 파라미터 name은 string 타입을 받고, GetName은 string을 리턴한다.

  let getName :GetName = function(name){
    return name;
  };

  getName('지용');
  ```

### 2.methods(객체 내의 함수) 안에 타입 지정하기
```ts
type Func = {
  plus: (x:number) => number,
  print: () => void
};

let func :Func = {
  plus (x) {
    return x + 1
  },
  print : () => {
    console.log('changeName 함수입니다.')
  }
};

func.plus(1);
func.print();
```
---
## 타입스크립트로 HTML 변경과 조작할 때 주의점
### 1. ts에서 html 찾기 (h4태그 가져오기)
- index.html
  ```html
  <script src="변환된 자바스크립트파일.js"></script>

  <h4 id="title">안녕하세요</h4>
  <a id="link" href="naver.com">링크</a>
  <button id="button">버튼</button>
  ```
- index.ts
  - document.querySelector(선택자)는 null 이거나 Element타입을 return한다. (narrowing 필요)

  ```ts
  // html에서 #title 가져오기

  let 제목 = document.querySelector('#title');
  // document.querySelector(선택자)는 null 이거나 Element를 return

  // 방법 1. narrow 사용
  if(제목!==null){
  제목.innerHTML = '반갑습니다.'
  } 

  // 방법 2. instance of narrow 사용
  if(제목 instanceof HTMLElement){
    제목.innerHTML = '반갑습니다.'
  }

  // 방법 3. optional chaining 사용
  if(제목?.innerHTML != undefined){
    제목.innerHTML = '반갑습니다.'
  }

  // 방법 4. assertion 사용 ( 좋지않음 )
  let 제목 = document.querySelector('#title') as HTMLElement;
  제목.innerHTML = '반갑습니다.'

  // 방법 5. tsconfig.json에 "strictNullChecks"를 지우기 ( 최악 )
  ```
### 2. ts에서 html 찾기 (a태그 가져오기)
  - 타입스크립트에서 html 요소들을 가져오면 가져온 요소는 기본적으로 Element 타입에 속한다.  
  Element 타입에 몇개의 기능을 더 붙힌 HTMLElement 타입이 존재하고,  
  HTMLElement 타입에 몇개의 기능을 더 붙힌 HTMLAnchorElement 타입이 존재한다.  
  (a태그는 HTMLAnchorElement에 속함)
    ```ts
    let 링크 = document.querySelector('#link')
    if(링크 instanceof HTMLAnchorElement) {
      링크.href = 'http://google.com/'
    }
    ```
### 3. ts에서 html 찾기 (button태그에 이벤트리스너 적용하기)
  ```ts
  let 버튼 = document.querySelector('#button');
  버튼?.addEventListener('click', function(){
    console.log('클릭')
  }
  ```
