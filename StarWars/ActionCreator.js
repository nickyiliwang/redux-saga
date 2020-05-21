import { TYPES } from "./types";

export const fetchStarWarsRequest = () => ({
  type: TYPES.FETCH_STAR_WARS_REQUEST,
});

export const fetchStarWarsSuccess = () => ({
  type: TYPES.FETCH_STAR_WARS_SUCCESS,
});
