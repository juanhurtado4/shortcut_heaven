import { UPDATE_STATUS } from "../action_types/action_types";
import gameLessons from "../../main_game/game_lessons";

const statusReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_STATUS:
            gameLessons.duplicateLine.status = action.status;
            return action.status;
        default :
            return state
    }
};

export default statusReducer;
