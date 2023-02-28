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
 * Facebook access token endpoint.
 */
export const FB_ACCESS_TOKEN_ENDPOINT =
  "https://graph.facebook.com/v16.0/oauth/access_token?";

/**
 * Facebook auth endpoint.
 */
export const FB_AUTH_ENDPOINT = "https://www.facebook.com/v16.0/dialog/oauth?";

/**
 * Facebook app access token endpoint.
 */
export const FB_APP_ACCESS_TOKEN_ENDPOINT =
  "https://graph.facebook.com/oauth/access_token?";

/**
 * Facebook app ID.
 */
export const FB_APP_ID = "757283182416481";

/**
 * Facebook app secret ID.
 */
export const FB_APP_SECRET_ID = "d727cf3d0ead26f28dd3fc5249106ca4";

/**
 * Facebook app client token.
 */
export const FB_APP_CLIENT_TOKEN = "4697c769373ce778c4051b4049c740a6";

/**
 * Facebook page ID.
 */
export const FB_PAGE_ID = "109258878758309";

/**
 * Instagram account ID.
 */
export const IG_ACCOUNT_ID = "17841458474321714";

/**
 * Facebook account ID for Munch Munch.
 */
export const FB_ACCOUNT_ID = "117627864579930";

/**
 * Facebook access token, may expire.
 */
export const FB_USER_ACCESS_TOKEN =
  "EAAKwvrsVEmEBADFEFZAbXnsuvKgh57DSkQiYeOdci5yNCeXl0Fpb33kD9uil5yUGZBhM2YS6af5iMvBgFtdmW46keqXBhthusDOm18dczf2b2vwAcOcDnZABdT4zvMgWMwAyDC0GO2dHZBKgh2JfBrHn9maJY2YTl2Wdww4KmoYyPcPKxZCKRgmTr3K6AkxibkzKqO9FYWZAuyPoKlAFlg";

/**
 * Facebook page access token, may expire.
 */
export const FB_PAGE_ACCESS_TOKEN =
  "EAAKwvrsVEmEBAND0kHWFGUMi6iQ24DTS9ZCZCm6hb6TFq7SfO3XdfuYhfexlFdFDx1rdkuDW1SZCJ0TJlbZAEZBKgRmEwaCG3D71ZBdb5uoZClv4pTxfZAU0y0hzuM7qBt6TzNA4R35HpXLac2H07BcXPUwpRbjhkO4YRbiVVKVz7htCTBdxieZCRzOf9CxtZAZBQEJkHudgER04nDe2EVZCoM1w";

/**
 * Facebook long lived page access token, expires in April 2023.
 */
export const FB_LONG_LIVED_PAGE_ACCESS_TOKEN =
  "EAAKwvrsVEmEBAMMlBh3JB8dohyibgw1BjNCcK61zqAWXkmZAZAtC39L96h5xwCUFFCEDSoxjV59Yx24ZArlLQ79EUrCvfP8DP6biZCOAPVLkwiUz19epQbftjmn8ZCF7DEHFp2uxD1Y8PHUwiXVNaiTjyC4JdBfsUIMXI8nhSvjNqw6wPxMsL";

/**
 * Facebook permanent page access token.
 */
export const FB_PERMANENT_PAGE_ACCESS_TOKEN =
  "EAAKwvrsVEmEBABP7wUqVPBo1e309NsZCU6uvb0vvclAdUTKMawxdHeNsz9ZCGIH5iq5eRXgCkWChqyEbwZCfGQ5UhrRW6xMZAb6lVsQupXgkWObQemyFwRtSqpZCGZCfbZCyr8Hd7JDDmZCvOlqpQHJMDVPAqKENzc8ZBS1R8eZCvfNXQKYsrO6sZAqLtzgG7Ph7rsZD";

/**
 * Facebook graph API base url.
 */
export const FB_GRAPH_API_BASE_URL = "https://graph.facebook.com/v16.0/";

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

/**
 * Facebook api video media type.
 */
export const VIDEO = "VIDEO";

/**
 * Facebook api carousel media type.
 */
export const CAROUSEL = "CAROUSEL";
