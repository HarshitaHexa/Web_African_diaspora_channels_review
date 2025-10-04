"use server";

import apiCall from "../../utils/api.utils";

export const getLiveChannelsData = async () => {
  const response = await apiCall();
  // console.log("getLiveChannelsData ", response);
  return response;
};
