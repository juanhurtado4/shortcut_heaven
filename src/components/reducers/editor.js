const DUPLICATE_LINE = 'DUPLICATE_LINE';
const NEXT_LESSON = 'NEXT_LESSON';

const editor = (state = {}, action) => {
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

export default editor;
