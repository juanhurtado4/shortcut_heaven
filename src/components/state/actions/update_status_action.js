import { UPDATE_STATUS } from "../action_types/action_types";

const updateStatusAction = () => {
    return {
        type: UPDATE_STATUS,
        status: true
    }
};

export default updateStatusAction;
