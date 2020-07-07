// Store , store의 state 에 접근하기 위해서는 Action 을 거쳐야함 .

// 1. Action type 정의하기
//  a) 대문자로 정의
//  b) 모듈이름 / 액션 이름 형태로 작성.
const INCREASE = 'counter/INCREASE';
const DECREASE = "counter/DECREASE";

// 2 . Action 생성함수 만들기
//export 키워드 .. 다른 파일에서 불러와서 사용가능.
//{
//    type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼",
//    payload: "액션의 실행에 필요한 임의의 데이터",
//}
export const increase =  () => ({type: INCREASE});  
export const decrease =  () => ({type: DECREASE});
 
// 3. counter 모듈의 초기상태와 리듀서 함수 만들기.

const initialState = {
    number : 0
};

// 현재 상태를 참조하여 새로운 상태 리턴해줌.   
// 즉 , Redux에 한해서는 아래와 같이 이전 상태와 Action을 합쳐, 
// 새로운 state를 만드는 조작을 말합니다.
// 초기상태는 default 옵션에서 정의됨 , 반환된 state는 store에 바로 반영
function counter(state = initialState , action){
    switch (action.type) {
        case INCREASE:
            return {
                number : state.number + 1
            };
        case DECREASE:
            return {
                number : state.number - 1
            };    
        default:
             return state;
    }
}

//export vs export default ?
//여러개 내보냄 // 하나만 내보냄
export default counter;
