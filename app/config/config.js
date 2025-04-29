import * as path from "path";

export const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME;


//email



export const MAX_JSON_SIZE = "50MB";
export const URL_ENCODED = true;

export const REQUEST_TIME_LIMIT = 15 * 60 * 1000;
export const REQUEST_LIMIT_NUMBER = 3000;

export const WEB_CACHE = false;
export const PORT = process.env.PORT;