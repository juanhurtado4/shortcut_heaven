const duplicateAction = (code, lines) => {
    return {
        type: DUPLICATE_LINE,
        code,
        lines,
    }
};

export default duplicateAction;
