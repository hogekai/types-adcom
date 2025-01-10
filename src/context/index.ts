/**
 * This group of objects represent concepts that are interacting, presenting, enclosing, or are otherwise relating to the world in which impressions live. These include the user, their device, their location, the channel (e.g., site, app, digital out-of-home) with which they are interacting, the channel's publisher, its content, and any regulations that are in effect (e.g., COPPA, GDPR).
 * @see https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md#context-objects-
 */
import { CategoryTaxonomy, DOOHVenueType } from "../enum";

/**
 * Abstract base interface for all distribution channels
 */
export interface DistributionChannel {
  /**
   * Vendor-specific unique identifier
   */
  id?: string;

  /**
   * Displayable name
   */
  name?: string;

  /**
   * Publisher details
   */
  pub?: Publisher;

  /**
   * Content details
   */
  content?: Content;
}

export interface Site extends DistributionChannel {
  /**
   * Domain of the site
   */
  domain?: string;

  /**
   * Content categories describing the site
   */
  cat?: string[];

  /**
   * Content categories describing the current section
   */
  sectcat?: string[];

  /**
   * Content categories describing the current page
   */
  pagecat?: string[];

  /**
   * Taxonomy for cat/sectcat/pagecat attributes
   */
  cattax?: CategoryTaxonomy;

  /**
   * Site has privacy policy
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  privpolicy?: number;

  /**
   * Keywords about the site
   * @deprecated
   */
  keywords?: string;

  /**
   * Array of keywords about the site
   */
  kwarray?: string[];

  /**
   * URL of the page
   */
  page?: string;

  /**
   * Referrer URL
   */
  ref?: string;

  /**
   * Search string that caused navigation
   */
  search?: string;

  /**
   * Site optimized for mobile
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  mobile?: number;

  /**
   * Page built with AMP HTML
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  amp?: number;

  ext?: Record<string, unknown>;
}

export interface Publisher {
  /**
   * Vendor-specific unique publisher ID
   */
  id?: string;

  /**
   * Displayable name
   */
  name?: string;

  /**
   * Highest level domain
   */
  domain?: string;

  /**
   * Content categories
   */
  cat?: string[];

  /**
   * Taxonomy for cat attribute
   */
  cattax?: CategoryTaxonomy;

  ext?: Record<string, unknown>;
}

export interface App extends DistributionChannel {
  /**
   * Domain of the app
   */
  domain?: string;

  /**
   * Content categories describing the app
   */
  cat?: string[];

  /**
   * Content categories describing the current section
   */
  sectcat?: string[];

  /**
   * Content categories describing the current page/view
   */
  pagecat?: string[];

  /**
   * Taxonomy for cat/sectcat/pagecat attributes
   */
  cattax?: CategoryTaxonomy;

  /**
   * App has privacy policy
   * 0 = no
   * 1 = yes
   * @minimum 0
   * @maximum 1
   */
  privpolicy?: number;

  /**
   * Keywords about the app
   * @deprecated
   */
  keywords?: string;

  /**
   * Array of keywords about the app
   */
  kwarray?: string[];

  /**
   * Bundle or package name
   * @description Should NOT be app store IDs
   */
  bundle?: string;

  /**
   * App store ID
   */
  storeid?: string;

  /**
   * App store URL
   */
  storeurl?: string;

  /**
   * Application version
   */
  ver?: string;

  /**
   * Paid app indicator
   * 0 = free
   * 1 = paid
   * @default 0
   * @minimum 0
   * @maximum 1
   */
  paid?: number;

  ext?: Record<string, unknown>;
}

export interface Dooh extends DistributionChannel {
  /**
   * Type of out-of-home venue
   */
  venue?: DOOHVenueType;

  /**
   * Fixed location indicator
   * 1 = fixed
   * 2 = movable
   * @minimum 1
   * @maximum 2
   */
  fixed?: number;

  /**
   * Exposure time in seconds per view
   * @minimum 0
   */
  etime?: number;

  /**
   * Minimum DPI for text-based creative elements
   * @minimum 0
   */
  dpi?: number;

  ext?: Record<string, unknown>;
}

/**
 * Interface representing content in which an impression can appear
 */
export interface Content {
  /**
   * ID uniquely identifying the content
   */
  id?: string;

  /**
   * Episode number
   */
  episode?: number;

  /**
   * Content title
   */
  title?: string;

  /**
   * Content series
   */
  series?: string;

  /**
   * Content season (e.g., "Season 3")
   */
  season?: string;

  /**
   * Artist credited with the content
   */
  artist?: string;

  /**
   * Genre that best describes the content
   */
  genre?: string;

  /**
   * Album to which the content belongs
   */
  album?: string;

  /**
   * International Standard Recording Code
   */
  isrc?: string;

  /**
   * URL of the content
   */
  url?: string;

  /**
   * Content categories using taxonomy IDs
   */
  cat?: string[];

  /**
   * Taxonomy used for cat attribute
   */
  cattax?: number;

  /**
   * Production quality
   */
  prodq?: number;

  /**
   * Type of content (game, video, text, etc.)
   */
  context?: number;

  /**
   * Content rating (e.g., MPAA)
   */
  rating?: string;

  /**
   * User rating of the content
   */
  urating?: string;

  /**
   * Media rating per IQG guidelines
   */
  mrating?: number;

  /**
   * Comma-separated list of keywords
   * @deprecated
   */
  keywords?: string;

  /**
   * Array of keywords describing the content
   */
  kwarray?: string[];

  /**
   * Live content indicator
   * 0 = not live
   * 1 = live
   * @minimum 0
   * @maximum 1
   */
  live?: number;

  /**
   * Source relationship
   * 0 = indirect
   * 1 = direct
   * @minimum 0
   * @maximum 1
   */
  srcrel?: number;

  /**
   * Length of content in seconds
   */
  len?: number;

  /**
   * Content language using ISO-639-1-alpha-2
   */
  lang?: string;

  /**
   * Content language using IETF BCP 47
   */
  langb?: string;

  /**
   * Embedded content indicator
   * 0 = no
   * 1 = yes
   */
  embed?: number;

  /**
   * Content producer details
   */
  producer?: Producer;

  /**
   * Network details
   */
  network?: Network;

  /**
   * Channel details
   */
  channel?: Channel;

  /**
   * Additional user data
   */
  data?: Data[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing the producer of the content
 */
export interface Producer {
  /**
   * Vendor-specific unique producer identifier
   */
  id?: string;

  /**
   * Displayable name of the producer
   */
  name?: string;

  /**
   * Highest level domain of the producer
   */
  domain?: string;

  /**
   * Content categories describing the producer
   */
  cat?: string[];

  /**
   * Taxonomy used for cat attribute
   */
  cattax?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing the network the ad will be displayed on
 */
export interface Network {
  /**
   * Unique identifier assigned by the publisher
   */
  id?: string;

  /**
   * Network name
   */
  name?: string;

  /**
   * Primary domain of the network
   */
  domain?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing the channel the ad will be displayed on
 */
export interface Channel {
  /**
   * Unique identifier assigned by the publisher
   */
  id?: string;

  /**
   * Channel name
   */
  name?: string;

  /**
   * Primary domain of the channel
   */
  domain?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing additional data
 */
export interface Data {
  /**
   * Vendor-specific ID for the data provider
   */
  id?: string;

  /**
   * Vendor-specific displayable name for the data provider
   */
  name?: string;

  /**
   * Array of data segments
   */
  segment?: Segment[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing a data segment
 */
export interface Segment {
  /**
   * ID of the data segment
   */
  id?: string;

  /**
   * Displayable name of the data segment
   */
  name?: string;

  /**
   * String representation of the data segment value
   */
  value?: string;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing Extended Identifier UIDs
 */
export interface ExtendedIdentifierUID {
  /**
   * Cookie or platform-native identifier
   */
  id?: string;

  /**
   * Type of user agent the match is from
   * It is highly recommended to set this, as many DSPs separate app-native IDs 
   * from browser-based IDs and require a type value for ID resolution
   */
  atype?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing regulations in effect
 */
export interface Regs {
  /**
   * Flag indicating if COPPA regulations apply
   * 0 = no, 1 = yes
   */
  coppa?: number;

  /**
   * Flag indicating if GDPR regulations apply
   * 0 = no, 1 = yes
   */
  gdpr?: number;

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}

/**
 * Interface representing restrictions on ad responses
 */
export interface Restrictions {
  /**
   * Block list of content categories using IDs from the taxonomy indicated in cattax
   */
  bcat?: string[];

  /**
   * The taxonomy in use for the bcat attribute
   * @default 2
   */
  cattax?: number;

  /**
   * Block list of advertisers by their domains (e.g., "ford.com")
   */
  badv?: string[];

  /**
   * Block list of apps for which ads are disallowed
   * Should be bundle or package names (e.g., "com.foo.mygame")
   */
  bapp?: string[];

  /**
   * Block list of creative attributes
   */
  battr?: number[];

  /**
   * Optional vendor-specific extensions
   */
  ext?: Record<string, unknown>;
}