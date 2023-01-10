import {
  BaseRatingContext,
  RatingContext
} from "@shipengine/connect-native-rating-api";
import { logger } from "@shipengine/connect-runtime"; 
import { dhlGermanyData } from "./dhl-germany-data"; // change this import according to your module

const ratingContext = new BaseRatingContext(dhlGermanyData);

export const context: RatingContext = {
  getZone: async (zoneKeys) => ratingContext.getZone(zoneKeys),
  getRates: async (rateKeys) => ratingContext.getRates(rateKeys),
  getVariables: async (variableKeys) =>
    ratingContext.getVariables(variableKeys),
  log: logger // alternatively you can use ratingContext.log
};
