import { DUPLICATE_LINE } from "../action_types/action_types";
import gameLessons from "../../main_game/game_lessons";

const editor_reducer = (state = {}, action) => {
    switch(action.type) {
        case DUPLICATE_LINE:
            gameLessons.duplicateLine.status = true;
            return {
                ...state,
                code: action.code,
                lines: action.lines,
                status: gameLessons.duplicateLine.status,
            };
        default :
            return state
    }
};

export default editor_reducer;
