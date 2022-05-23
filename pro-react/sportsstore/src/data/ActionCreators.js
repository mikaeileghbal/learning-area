import { ActionTypes } from "./Types";
import { data as initialData } from "./placeholderData";

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: initialData[dataType],
  },
});
