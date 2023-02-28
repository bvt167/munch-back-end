/**
 * Utility functions for handling API requests and responses.
 */

import axios, { AxiosResponse } from "axios";
import {
  CAROUSEL,
  FB_GRAPH_API_BASE_URL,
  IG_ACCOUNT_ID,
  VIDEO,
} from "../constant/CommonConstants";

export const checkStatus = (resp: AxiosResponse) => {
  if (200 === resp.status) {
    return resp;
  }
  throw Error(resp.statusText);
};

export const createItemContainer = async (
  mediaType: string,
  mediaUrl: string,
  isCarouselItem: boolean
): Promise<string> => {
  const postParams: any = {
    is_carousel_item: String(isCarouselItem),
  };
  if (VIDEO === mediaType.toUpperCase()) {
    postParams.media_type = VIDEO;
    postParams.video_url = mediaUrl;
  } else {
    postParams.image_url = mediaUrl;
  }
  const containerId = await axios
    .post(`${FB_GRAPH_API_BASE_URL}${IG_ACCOUNT_ID}/media`, postParams)
    .then(checkStatus)
    .then((resp) => resp.data);
  return containerId;
};

export const createCarouselContainer = async (
  containerIds: string[]
): Promise<string> => {
  const postParams: any = {
    media_type: CAROUSEL,
    children: containerIds,
  };
  const carouselContainerId = await axios
    .post(`${FB_GRAPH_API_BASE_URL}${IG_ACCOUNT_ID}/media`, postParams)
    .then(checkStatus)
    .then((resp) => resp.data);
  return carouselContainerId;
};
