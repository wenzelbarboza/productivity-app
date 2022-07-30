import { faker } from '@faker-js/faker';


export const EditList = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return ([
                ...state,
                {
                    task: action.payload.task,
                    id: faker.datatype.uuid(),
                    justTimer: false,
                    complete: false
                }
            ])
        case "EDIT_ITEM":
        case "COMPLETE_ITEM":
        default:
            return state
    }
}