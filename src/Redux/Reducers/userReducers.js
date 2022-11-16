import { SIGN_UP, SIGN_IN } from "../Actions/userActions";

const initialState = {
    user: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                user: action.user,
            }

        case SIGN_IN:
            const user = state.user.find((user) => user.email === action.user.email && user.password === action.user.password);
            return {
                ...state,
                user: user,
            }

        default:
            return state;
    }
}

export default userReducer;