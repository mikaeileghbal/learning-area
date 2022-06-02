import { ActionTypes } from "./Types";
import { data as initialData } from "./placeholderData";
import { RestDataSource } from "./RestDataSource";

const dataSource = new RestDataSource();

export const loadData = (dataType, params) => {
  return {
    type: ActionTypes.DATA_LOAD,
    // payload: {
    //   dataType: dataType,
    //   data: initialData[dataType],
    // },
    payload: dataSource.GetData(dataType, params).then((response) => ({
      dataType,
      data: response.data,
      total: Number(response.headers["x-total-count"]),
      params,
    })),
  };
};
