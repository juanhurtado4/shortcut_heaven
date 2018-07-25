import editorReducer from "./editor_reducer";
import modalReducer from "./modal_reducer";
import statusReducer from "./status_reducer";

const rootReducer = (state = {}, action) => {
    return {
        ...state,
        editor: editorReducer(state.editor, action),
        modal: modalReducer(state.modal, action),
        status: statusReducer(state.status, action),
    }
};

export default rootReducer;
