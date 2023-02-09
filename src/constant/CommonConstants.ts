/**
 * Common constants.
 */

/**
 * Database model name for Restaurant.
 */
export const RESTAURANT = "Restaurant";

/**
 * Database access account username.
 */
export const DATABASE_USERNAME = "dev";

/**
 * Database access account password.
 */
export const DATABASE_PASSWORD = "munch197";

/**
 * Database URI.
 */
export const DATABASE_URI = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@munchcluster.2v0u4xw.mongodb.net/?retryWrites=true&w=majority`;

/**
 * Success status message.
 */
export const SUCCESS = "success";

/**
 * Failure status message.
 */
export const FAILURE = "failure";

/**
 * Invalid body parameters error message.
 */
export const INVALID_BODY_PARAMETERS = "Invalid body parameters";

/**
 * Invalid login information error message.
 */
export const INVALID_LOGIN = "Invalid login";

/**
 * Non-validated restaurant error message.
 */
export const NON_VALIDATED_RESTAURANT = "Restaurant not validated";

/**
 * Account already registered error message.
 */
export const ACCOUNT_ALREADY_REGISTERED = "Account already registered";
