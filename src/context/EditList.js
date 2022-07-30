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

// state.filter((item) => item.id === action.id ? item.complete = !item.complete : true)
// 
