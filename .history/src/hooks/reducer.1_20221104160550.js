export function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { state.count<1 ? count: state.count - 1 };
        case "reset":
            return { count: 0 };
        case "setValue":
            return { count: action.value };
        default:
            return state;
    }
}
