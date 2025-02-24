let 제목 = document.querySelector('#title');
// 제목은 null일 수도 있고 Element일 수도 있기에 narrowing을 해줘야한다.

// let 제목 = document.querySelector('#title') as Element;
// 제목.innerHTML = '반가워요'
// as 키워드는 비상 시 쓰거나 100%확신이 들 때 사용하는거라고 한다.


if(제목!==null){
  제목.innerHTML = '반가워요'
}

if(제목 instanceof Element){
  제목.innerHTML = '반가워요'
}

if(제목?.innerHTML){
  제목.innerHTML = '반가워요'
}

// 마지막방법은 tsconfig.json에서 "strictNullChecks": true를 삭제 → 그럴꺼면 뭐하러 ts를 쓰나

let 링크 = document.querySelector('.link')
if (링크 instanceof HTMLAnchorElement){
  링크.href = 'https://kakao.com'
}
// 링크는 Element 클래스에 상속된 HTMLAnchorElement에 상속되어 있으므로 정확한 클래스명은 HTMLAnchorElement 이다.
let 버튼 = document.querySelector('#button')
if (버튼 instanceof HTMLButtonElement){
  버튼.innerHTML = '가보자구'
}
// 버튼은 Element 클래스에 상속된 HTMLButtonElement에 상속되어 있으므로 정확한 클래스명은 HTMLButtonElement 이다.

버튼?.addEventListener('click',function(){
  let 이미지 = document.querySelector('#image')
  let 링크들 = document.querySelectorAll('.naver')
  if(이미지 instanceof HTMLImageElement){
    이미지.src = 'new.jpg';
  }
  링크들.forEach((링크)=>{
    if(링크 instanceof HTMLAnchorElement){
      링크.href = 'http://kakao.com/';
    }
  })
})
// 버튼이 존재한다면 addEventListener 동작

