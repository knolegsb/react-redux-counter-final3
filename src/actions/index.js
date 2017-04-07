export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_INIT = 'SET_INIT';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function setInit(value) {
    return {
        type: SET_INIT,
        initial: value
    };
}
