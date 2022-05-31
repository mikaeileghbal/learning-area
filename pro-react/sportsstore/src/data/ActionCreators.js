import { ActionTypes } from "./Types";
import { data as initialData } from "./placeholderData";
import RestDataSource from "./RestDataSource";

export const loadData = (dataType) => {
  return {
    type: ActionTypes.DATA_LOAD,
    // payload: {
    //   dataType: dataType,
    //   data: initialData[dataType],
    // },
    payload: RestDataSource(dataType).then((response) => ({
      dataType,
      data: response.data,
    })),
  };
};
