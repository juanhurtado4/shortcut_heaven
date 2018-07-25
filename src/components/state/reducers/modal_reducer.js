import { UPDATE_MODAL_STATUS } from "../action_types/action_types";
import gameLessons from "../../main_game/game_lessons";

const modalReducer = (state = {}, action) => {
    switch(action.type) {
        case UPDATE_MODAL_STATUS:
            const currLesson = action.id;
            gameLessons[currLesson].modalStatus = action.status;
            return {
                ...state,
                status: action.status,
            };
        default :
            return state
    }
};

export default modalReducer;
