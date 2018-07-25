import { DUPLICATE_LINE } from "../action_types/action_types";

const duplicateAction = (code, lines) => {
    return {
        type: DUPLICATE_LINE,
        code,
        lines,
    }
};

export default duplicateAction;
