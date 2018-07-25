import gameLessons from "../../main_game/game_lessons";
import store from "../store/store";
import duplicateAction from "../actions/duplicate_action";
import updateStatusAction from "../actions/update_status_action";
import updateModalAction from "../actions/update_modal_action";

const onDuplicateAnswer = (event) => {
    event.preventDefault();
    store.dispatch(duplicateAction(
        gameLessons.duplicateLine.solvedCode,
        gameLessons.duplicateLine.lines.solved,
    ));
    store.dispatch(updateStatusAction(gameLessons.duplicateLine.id));
    store.dispatch(updateModalAction(gameLessons.duplicateLine.id));
};

export default onDuplicateAnswer;
