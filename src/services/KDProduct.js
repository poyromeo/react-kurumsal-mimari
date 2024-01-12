import * as constans from "../utils/constants/constants";

let pageConfig = {
  tabs: [
    {
      title: "KD_Product",
      list: {
        url: `${constans.API_URL}/KDProduct/list`,
      },
      getById: {
        url: `${constans.API_URL}/KDProduct/getById`,
      },
      insert: {
        url: `${constans.API_URL}/KDProduct/insert`,
      },
      update: {
        url: `${constans.API_URL}/KDProduct/update`,
      },
      delete: {
        url: `${constans.API_URL}/KDProduct/delete`,
      },
    },
  ],
};

export default pageConfig;
