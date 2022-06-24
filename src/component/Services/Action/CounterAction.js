import { DECREMENT, INCREMENT, RESET } from "../Contant/CounterConstant"

export const CounterIncremant = () => {
    return {
        type: INCREMENT
    }
}

export const CounterDecremant = () => {
    return {
        type: DECREMENT
    }
}
export const CounterReset = () => {
    return {
        type: RESET
    }
}
