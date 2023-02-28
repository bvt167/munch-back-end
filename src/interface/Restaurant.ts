/**
 * Interface for Restaurant database document.
 */
export interface Restaurant {
  /**
   * Restaurant name.
   */
  restaurantName: string;

  /**
   * Account email.
   */
  email: string;

  /**
   * Account password.
   */
  password: string;

  /**
   * Account job title.
   */
  jobTitle: string;

  /**
   * Restaurant address.
   */
  address: string;

  /**
   * Validation status.
   */
  isValidated: boolean;
}
