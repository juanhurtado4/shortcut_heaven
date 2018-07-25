import { UPDATE_STATUS } from "../action_types/action_types";

const updateStatusAction = (id) => {
    return {
        type: UPDATE_STATUS,
        status: true,
        id,
    }
};

export default updateStatusAction;
