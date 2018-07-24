import gameLessons from "../../main_game/game_lessons";
import store from "../store/store";
import duplicateAction from "../actions/duplicate_action";
import updateStatusAction from "../actions/update_status_action";

const onDuplicateAnswer = (event) => {
    event.preventDefault();
    store.dispatch(duplicateAction(
        gameLessons.duplicateLine.solvedCode,
        gameLessons.duplicateLine.lines.solved,
    ));
    store.dispatch(updateStatusAction());
};

export default onDuplicateAnswer;
