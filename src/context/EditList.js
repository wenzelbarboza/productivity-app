import { faker } from "@faker-js/faker";

export const EditList = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...state,
                {
                    task: action.payload.task,
                    id: faker.datatype.uuid(),
                    justTimer: false,
                    complete: false,
                },
            ];
            break;
        case "COMPLETE":
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        complete: !item.complete
                    }
                }
                return item
            })
        case "DELETE":
            return state.filter((item) => item.id != action.id)
        default:
            return state;
    }
};

export const EditTimer = (state, action) => {
    switch (action.type) {
        case "START_TIMER":
            return {
                ...state,
                timerValue: action.timerValue
            }
        case "START_STOP":
            return {
                ...state,
                start: action.start
            }
        case "SESSION_INCREMENT":
            return {
                ...state,
                sessionValue: action.sessionValue,
                timerValue: action.timerValue
            }
        case "SESSION_DECREMENT":
            return {
                ...state,
                sessionValue: action.sessionValue,
                timerValue: action.timerValue
            }
        case "BREAK_INCREMENT":
            return {
                ...state,
                breakValue: action.breakValue,
            }
        case "BREAK_DECREMENT":
            return {
                ...state,
                breakValue: action.breakValue,
            }
        default:
            return state
    }
}

// state.filter((item) => item.id === action.id ? item.complete = !item.complete : true)
// 
