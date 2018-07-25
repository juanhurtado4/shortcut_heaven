import { UPDATE_MODAL_STATUS } from "../action_types/action_types";
import gameLessons from "../../main_game/game_lessons";

const updateModalAction = (id) => {
    const currStatus = gameLessons[id].modalStatus;
    return {
        type: UPDATE_MODAL_STATUS,
        status: !currStatus,
        id,
    }
};

export default updateModalAction;
