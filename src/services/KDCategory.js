import * as constans from "../utils/constants/constants";

let pageConfig = {
  tabs: [
    {
      title: "KD_Category",
      list: {
        url: `${constans.API_URL}/KDCategory/list`,
      },
      getById: {
        url: `${constans.API_URL}/KDCategory/getById`,
      },
      insert: {
        url: `${constans.API_URL}/KDCategory/insert`,
      },
      update: {
        url: `${constans.API_URL}/KDCategory/update`,
      },
      delete: {
        url: `${constans.API_URL}/KDCategory/delete`,
      },
    },
  ],
};

export default pageConfig;
