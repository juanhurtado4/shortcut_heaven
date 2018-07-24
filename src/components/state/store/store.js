import game_lessons from "../../game/game_lessons";
import rootReducer from "../reducers/root_reducer";
// TODO: Change component to account for status and lesson name being global
// TODO: Change reducers to account for the same as above
// TODO: Have UI for every single lesson. Before and after

class Store {
    constructor(reducer) {
        this.state = {
            status: game_lessons.duplicateLine.status,
            lessonName: game_lessons.duplicateLine.id,
            editor: {
                code: game_lessons.duplicateLine.code,
                lines: game_lessons.duplicateLine.lines.default,
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
        this.state = this.reducer(this.state, action);
        this.listeners.forEach((listener) => listener())
    };
}

const store = new Store(rootReducer);

export default store;
