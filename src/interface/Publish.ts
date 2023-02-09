/**
 * Interface for Publish database document.
 */
export interface Publish {

    /**
     * Image url.
     */
    image_url: string
  
    /**
     * Multiple Posts.
     */
    is_carousel_item: boolean
  
    /**
     * Post Caption.
     */
    caption: string
  
    /**
     * Validation status.
     */
    isValidated: boolean
}