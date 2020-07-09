import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import {increase, decrease} from '../modules/counter'

const CounterContainer = ({number,increase,decrease}) => {
    return <Counter number={number} onIncrease={increase} onDecrease={decrease}></Counter>;
};

//  React의 Component자체는 Redux의 흐름에 타는 것이 불가능 합니다.
//  흐름에 타기 위해서는 ReactRedux에 의해 제공 되는 connect라고 불리는 함수를 이용
//  Component가 Store로부터 무언가 정보를 받는 경우, 그걸 props를 통해 받습니다. props는 immutable합니다. 
// 다시말해, 상태가 변경될 때마다 새로운 Component가 다시 만들어진다는 의미입니다. 이것을 염두에 둔 후에, connect를 실행하고 있는 주변 코드를 봅시다.



//1) Store가 가진 state를 어떻게 props에 엮을 지 정한다
const mapStateToProps = state => ({
    number : state.counter.number
});

//2) Reducer에 action을 알리는 함수 dispatch를 어떻게 props에 엮을 지 정한다
// const mapDispatchToProps = dispatch => ({
//     increase : () => {
//         dispatch(increase());
//         // return dispatch(increase());  //같음
//     },
//     decrease : () => {
//         dispatch(decrease());
//     }
// })

//3) 위에 두가지가 적용된 props를 받을 Component를 정한다
export default connect(
    mapStateToProps,
    //mapDispatchToProps, 
    // dispatch => 
    //     bindActionCreators(
    //         { 
    //             increase,
    //             decrease,
    //         },
    //         dispatch
    //     )
    {
        increase,
        decrease
    }
)(CounterContainer); 