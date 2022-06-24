import { CounterDecremant, CounterIncremant, CounterReset } from "../Action/CounterAction";
import { DECREMENT, INCREMENT, RESET } from "../Contant/CounterConstant";


const counterState = { count: 2 };
console.log(counterState);

const CounterReducer = (state = counterState, action) => {
    console.log(action.type);
    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,

            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case RESET:
            return {
                ...state,
                count: 0
            };



        default:
            return state;
    }

}

export default CounterReducer