import { DUPLICATE_LINE } from "../action_types/action_types";
import gameLessons from "../../main_game/game_lessons";

const editorReducer = (state = {}, action) => {
    switch(action.type) {
        case DUPLICATE_LINE:
            return {
                ...state,
                code: action.code,
                lines: action.lines,
            };
        default :
            return state
    }
};

export default editorReducer;
