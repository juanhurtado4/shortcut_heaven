import gameLessons from "../../main_game/game_lessons";
import rootReducer from "../reducers/root_reducer";

class CreateStore {
    constructor(reducer) {
        this.state = {
            status: gameLessons.duplicateLine.status,
            lessonName: gameLessons.duplicateLine.id,
            modal: {
                status: gameLessons.duplicateLine.modalStatus,
                title: gameLessons.duplicateLine.modalTitle,
                body: gameLessons.duplicateLine.modalBody,
            },
            editor: {
                code: gameLessons.duplicateLine.code,
                lines: gameLessons.duplicateLine.lines.default,
            },
            tips: {
                // text of current lesson
            }

        };
        this.listeners = [];
        this.reducer = reducer;
    };

    getState = () => this.state;

    subscribe = (listener) => {
        this.listeners.push(listener);
    };

    dispatch = (action) => {
        console.log('State before: ', this.state);
        this.state = this.reducer(this.state, action);
        this.listeners.forEach((listener) => listener())
    };
}

const store = new CreateStore(rootReducer);

export default store;
