import editor_reducer from "./editor_reducer";

const rootReducer = (state = {}, action) => {
    return {
        editor: editor_reducer(state.editor, action),
    }
};

export default rootReducer;
