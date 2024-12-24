/**
 * The following lists define enumerations referenced by attributes in AdCOM objects.
 * @see https://github.com/InteractiveAdvertisingBureau/AdCOM/blob/main/AdCOM%20v1.0%20FINAL.md#enumerations-
 */
declare module "iab-adcom/enum" {
  /**
   * Identifies the type of user agent a user identifier is from
   */
  export enum AgentType {
    /** An ID which is tied to a specific web browser or device (cookie-based, probabilistic, or other) */
    BROWSER_OR_DEVICE = 1,
    /** In-app impressions, which will typically contain a type of device ID */
    IN_APP = 2,
    /** A person-based ID that is the same across devices */
    PERSON_BASED = 3,
  }

  /**
   * API frameworks either supported by a placement or required by an ad
   */
  export enum APIFramework {
    VPAID_1_0 = 1,
    VPAID_2_0 = 2,
    MRAID_1_0 = 3,
    ORMMA = 4,
    MRAID_2_0 = 5,
    MRAID_3_0 = 6,
    OMID_1_0 = 7,
    SIMID_1_0 = 8,
    SIMID_1_1 = 9,
  }

  /**
   * Status codes used in Audit objects to reflect status or workflow state
   */
  export enum AuditStatusCode {
    /** An audit has not yet been completed on this ad */
    PENDING_AUDIT = 1,
    /** Pre-approved before audit completion */
    PRE_APPROVED = 2,
    /** Audit complete and ad approved for use */
    APPROVED = 3,
    /** Audit complete but ad found unacceptable */
    DENIED = 4,
    /** Material changes detected, requiring resubmission */
    CHANGED_RESUBMISSION_REQUESTED = 5,
    /** Ad marked as expired by vendor */
    EXPIRED = 6,
  }

  /**
   * Triggers that result in an ad slot refreshing
   */
  export enum AutoRefreshTrigger {
    /** Unknown refresh trigger */
    UNKNOWN = 0,
    /** Refresh triggered by user-initiated action such as scrolling */
    USER_ACTION = 1,
    /** Event-driven content change */
    EVENT = 2,
    /** Time-based refresh on predefined interval */
    TIME = 3,
  }

  /**
   * Options for taxonomies used to describe content, audience, and ad creative categories
   */
  export enum CategoryTaxonomy {
    /** @deprecated IAB Tech Lab Content Category Taxonomy 1.0 */
    CONTENT_TAXONOMY_1_0 = 1,
    /** @deprecated IAB Tech Lab Content Category Taxonomy 2.0 */
    CONTENT_TAXONOMY_2_0 = 2,
    /** IAB Tech Lab Ad Product Taxonomy 1.0 */
    AD_PRODUCT_TAXONOMY_1_0 = 3,
    /** IAB Tech Lab Audience Taxonomy 1.1 */
    AUDIENCE_TAXONOMY_1_1 = 4,
    /** IAB Tech Lab Content Taxonomy 2.1 */
    CONTENT_TAXONOMY_2_1 = 5,
    /** IAB Tech Lab Content Taxonomy 2.2 */
    CONTENT_TAXONOMY_2_2 = 6,
    /** IAB Tech Lab Content Taxonomy 3.0 */
    CONTENT_TAXONOMY_3_0 = 7,
    /** IAB Tech Lab Ad Product Taxonomy 2.0 */
    AD_PRODUCT_TAXONOMY_2_0 = 8,
  }

  /**
   * Types of creative activation (click) behavior types
   */
  export enum ClickType {
    /** Non-clickable creative */
    NON_CLICKABLE = 0,
    /** Clickable but details unknown */
    CLICKABLE_UNKNOWN = 1,
    /** Clickable with embedded browser/webview */
    CLICKABLE_EMBEDDED_BROWSER = 2,
    /** Clickable with native browser */
    CLICKABLE_NATIVE_BROWSER = 3,
  }

  /**
   * Markup types allowed for companion ads that apply to video and audio ads
   */
  export enum CompanionType {
    /** Static resource companion */
    STATIC_RESOURCE = 1,
    /** HTML resource companion */
    HTML_RESOURCE = 2,
    /** iframe resource companion */
    IFRAME_RESOURCE = 3,
  }

  /**
   * Types of device connectivity
   */
  export enum ConnectionType {
    /** Ethernet/wired connection */
    ETHERNET = 1,
    /** WiFi connection */
    WIFI = 2,
    /** Cellular network - unknown generation */
    CELLULAR_UNKNOWN = 3,
    /** 2G cellular network */
    CELLULAR_2G = 4,
    /** 3G cellular network */
    CELLULAR_3G = 5,
    /** 4G cellular network */
    CELLULAR_4G = 6,
    /** 5G cellular network */
    CELLULAR_5G = 7,
  }

  /**
   * Types of content contexts in which ads may appear
   */
  export enum ContentContext {
    /** Video (i.e., video file or stream such as Internet TV broadcasts) */
    VIDEO = 1,
    /** Game (i.e., an interactive software game) */
    GAME = 2,
    /** Music (i.e., audio file or stream such as Internet radio broadcasts) */
    MUSIC = 3,
    /** Application (i.e., an interactive software application) */
    APPLICATION = 4,
    /** Text (i.e., primarily textual document such as a web page, eBook, or news article) */
    TEXT = 5,
    /** Other (i.e., none of the other categories applies) */
    OTHER = 6,
    /** Unknown content context */
    UNKNOWN = 7,
  }

  /**
   * Standard list of creative attributes for ads or placement restrictions
   */
  export enum CreativeAttribute {
    /** Audio Ad (Autoplay) */
    AUDIO_AD_AUTOPLAY = 1,
    /** Audio Ad (User Initiated) */
    AUDIO_AD_USER_INITIATED = 2,
    /** Expandable (Automatic) */
    EXPANDABLE_AUTOMATIC = 3,
    /** Expandable (User Initiated - Click) */
    EXPANDABLE_CLICK = 4,
    /** Expandable (User Initiated - Rollover) */
    EXPANDABLE_ROLLOVER = 5,
    /** In-Banner Video Ad (Autoplay) */
    IN_BANNER_VIDEO_AUTOPLAY = 6,
    /** In-Banner Video Ad (User Initiated) */
    IN_BANNER_VIDEO_USER_INITIATED = 7,
    /** Pop (e.g., Over, Under, or Upon Exit) */
    POP = 8,
    /** Provocative or Suggestive Imagery */
    PROVOCATIVE_IMAGERY = 9,
    /** Shaky, Flashing, Flickering, Extreme Animation, Smileys */
    DISRUPTIVE_ANIMATION = 10,
    /** Surveys */
    SURVEYS = 11,
    /** Text Only */
    TEXT_ONLY = 12,
    /** User Interactive (e.g., Embedded Games) */
    USER_INTERACTIVE = 13,
    /** Windows Dialog or Alert Style */
    DIALOG_STYLE = 14,
    /** Has Audio On/Off Button */
    AUDIO_BUTTON = 15,
    /** Ad Provides Skip Button */
    SKIP_BUTTON = 16,
    /** Adobe Flash */
    FLASH = 17,
    /** Responsive; Sizeless; Fluid */
    RESPONSIVE = 18,
  }

  /**
   * Subtypes of audio and video ad creatives
   */
  export enum AudioVideoCreativeSubtype {
    /** VAST 1.0 */
    VAST_1_0 = 1,
    /** VAST 2.0 */
    VAST_2_0 = 2,
    /** VAST 3.0 */
    VAST_3_0 = 3,
    /** VAST 1.0 Wrapper */
    VAST_1_0_WRAPPER = 4,
    /** VAST 2.0 Wrapper */
    VAST_2_0_WRAPPER = 5,
    /** VAST 3.0 Wrapper */
    VAST_3_0_WRAPPER = 6,
    /** VAST 4.0 */
    VAST_4_0 = 7,
    /** VAST 4.0 Wrapper */
    VAST_4_0_WRAPPER = 8,
    /** DAAST 1.0 */
    DAAST_1_0 = 9,
    /** DAAST 1.0 Wrapper */
    DAAST_1_0_WRAPPER = 10,
    /** VAST 4.1 */
    VAST_4_1 = 11,
    /** VAST 4.1 Wrapper */
    VAST_4_1_WRAPPER = 12,
    /** VAST 4.2 */
    VAST_4_2 = 13,
    /** VAST 4.2 Wrapper */
    VAST_4_2_WRAPPER = 14,
    /** VAST 4.3 */
    VAST_4_3 = 15,
    /** VAST 4.3 Wrapper */
    VAST_4_3_WRAPPER = 16,
  }

  /**
   * Subtypes of display ad creatives
   */
  export enum DisplayCreativeSubtype {
    /** HTML */
    HTML = 1,
    /** AMPHTML */
    AMPHTML = 2,
    /** Structured Image Object */
    STRUCTURED_IMAGE = 3,
    /** Structured Native Object */
    STRUCTURED_NATIVE = 4,
  }

  /**
   * Options for the delivery of video or audio content
   */
  export enum DeliveryMethod {
    /** Streaming delivery */
    STREAMING = 1,
    /** Progressive delivery */
    PROGRESSIVE = 2,
    /** Download delivery */
    DOWNLOAD = 3,
  }

  /**
   * Types of devices
   */
  export enum DeviceType {
    /** Mobile/Tablet - General */
    MOBILE_TABLET = 1,
    /** Personal Computer */
    PERSONAL_COMPUTER = 2,
    /** Connected TV */
    CONNECTED_TV = 3,
    /** Phone */
    PHONE = 4,
    /** Tablet */
    TABLET = 5,
    /** Connected Device */
    CONNECTED_DEVICE = 6,
    /** Set Top Box */
    SET_TOP_BOX = 7,
    /** OOH Device */
    OOH_DEVICE = 8,
  }

  /**
   * Types of context in which a native ad may appear
   */
  export enum DisplayContextType {
    /** Content-centric context */
    CONTENT = 10,
    /** Article content */
    ARTICLE = 11,
    /** Video content */
    VIDEO = 12,
    /** Audio content */
    AUDIO = 13,
    /** Image content */
    IMAGE = 14,
    /** User-generated content */
    USER_GENERATED = 15,
    /** Social-centric context */
    SOCIAL = 20,
    /** Email content */
    EMAIL = 21,
    /** Chat/IM content */
    CHAT = 22,
    /** Product context */
    PRODUCT = 30,
    /** App store/marketplace */
    APP_STORE = 31,
    /** Product reviews site */
    PRODUCT_REVIEWS = 32,
  }

  /**
   * General types of display placements
   */
  export enum DisplayPlacementType {
    /** In the feed of content */
    IN_FEED = 1,
    /** In the atomic unit of the content */
    IN_CONTENT = 2,
    /** Outside the core content */
    OUTSIDE_CONTENT = 3,
    /** Recommendation widget */
    RECOMMENDATION = 4,
  }

  /**
   * Types of entities providing quantity measurement for impression multipliers
   */
  export enum DOOHMultiplierMeasurementSourceType {
    /** Unknown source */
    UNKNOWN = 0,
    /** Measurement Vendor Provided */
    MEASUREMENT_VENDOR = 1,
    /** Publisher Provided */
    PUBLISHER = 2,
    /** Exchange Provided */
    EXCHANGE = 3,
  }

  /**
   * Supported taxonomies for DOOH venue types
   */
  export enum DOOHVenueTaxonomy {
    /** AdCom DOOH Venue Types (deprecated) */
    ADCOM = 0,
    /** OpenOOH Venue Taxonomy 1.0 */
    OPENOOH_1_0 = 1,
    /** DPAA Device Venue Types */
    DPAA = 2,
    /** DMI Categorization of Venues 1.1 */
    DMI_1_1 = 3,
    /** OMA taxonomy Jan 2022 */
    OMA_2022 = 4,
    /** OpenOOH Venue Taxonomy 1.1 */
    OPENOOH_1_1 = 5,
  }

  /**
   * Digital out-of-home venue types (derived from DPAA Programmatic Standards)
   * @deprecated
   */
  export enum DOOHVenueType {
    /** Airborne */
    AIRBORNE = 1,
    /** Airports - General */
    AIRPORTS_GENERAL = 2,
    /** Airports - Baggage Claim */
    AIRPORTS_BAGGAGE_CLAIM = 3,
    /** Airports - Terminal */
    AIRPORTS_TERMINAL = 4,
    /** Airports - Lounges */
    AIRPORTS_LOUNGES = 5,
    /** ATMs */
    ATMS = 6,
    /** Backlights */
    BACKLIGHTS = 7,
    /** Bars */
    BARS = 8,
    /** Benches */
    BENCHES = 9,
    /** Bike Racks */
    BIKE_RACKS = 10,
    /** Bulletins */
    BULLETINS = 11,
    /** Buses */
    BUSES = 12,
    /** Cafes */
    CAFES = 13,
    /** Casual Dining Restaurants */
    CASUAL_DINING = 14,
    /** Child Care */
    CHILD_CARE = 15,
    /** Cinema */
    CINEMA = 16,
    /** City Information Panels */
    CITY_INFO_PANELS = 17,
    /** Convenience Stores */
    CONVENIENCE_STORES = 18,
    /** Dedicated Wild Posting */
    WILD_POSTING = 19,
    /** Doctors Offices - General */
    DOCTORS_GENERAL = 20,
    /** Doctors Offices - Obstetrics */
    DOCTORS_OBSTETRICS = 21,
    /** Doctors Offices - Pediatrics */
    DOCTORS_PEDIATRICS = 22,
    /** Family entertainment */
    FAMILY_ENTERTAINMENT = 23,
    /** Ferries */
    FERRIES = 24,
    /** Financial Services */
    FINANCIAL_SERVICES = 25,
    /** Gas Stations */
    GAS_STATIONS = 26,
    /** Golf Courses */
    GOLF_COURSES = 27,
    /** Gyms */
    GYMS = 28,
    /** Hospitals */
    HOSPITALS = 29,
    /** Hotels */
    HOTELS = 30,
    /** Junior Posters */
    JUNIOR_POSTERS = 31,
    /** Kiosks */
    KIOSKS = 32,
    /** Malls - General */
    MALLS_GENERAL = 33,
    /** Malls - Food Courts */
    MALLS_FOOD_COURTS = 34,
    /** Marine */
    MARINE = 35,
    /** Mobile Billboards */
    MOBILE_BILLBOARDS = 36,
    /** Movie Theater Lobbies */
    MOVIE_LOBBIES = 37,
    /** Newsstands */
    NEWSSTANDS = 38,
    /** Office Buildings */
    OFFICE_BUILDINGS = 39,
    /** Phone Kiosks */
    PHONE_KIOSKS = 40,
    /** Posters */
    POSTERS = 41,
    /** QSR */
    QSR = 42,
    /** Rail */
    RAIL = 43,
    /** Receptacles */
    RECEPTACLES = 44,
    /** Resorts / Leisure */
    RESORTS = 45,
    /** Retail */
    RETAIL = 46,
    /** Salons */
    SALONS = 47,
    /** Shelters */
    SHELTERS = 48,
    /** Sports Arenas */
    SPORTS_ARENAS = 49,
    /** Subway */
    SUBWAY = 50,
    /** Taxis / Wrapped vehicles */
    TAXIS = 51,
    /** Truckside */
    TRUCKSIDE = 52,
    /** Universities */
    UNIVERSITIES = 53,
    /** Urban Panels */
    URBAN_PANELS = 54,
    /** Veterinarian Offices */
    VETERINARIAN = 55,
    /** Walls / Spectaculars */
    WALLS = 56,
    /** Other */
    OTHER = 57,
  }

  /**
   * Methods of tracking ad events
   */
  export enum EventTrackingMethod {
    /** Image-Pixel: URL provided will be inserted as a 1x1 pixel */
    IMAGE_PIXEL = 1,
    /** JavaScript: URL provided will be inserted as a JavaScript tag */
    JAVASCRIPT = 2,
  }

  /**
   * Types of ad events available for tracking
   */
  export enum EventType {
    /** Delivered as part of creative markup */
    LOADED = 1,
    /** Ad impression per IAB/MRC Guidelines */
    IMPRESSION = 2,
    /** MRC definition of 50% in view for 1 second */
    VIEWABLE_MRC_50 = 3,
    /** 100% in view for 1 second (GroupM standard) */
    VIEWABLE_MRC_100 = 4,
    /** Video 50% in view for 2 seconds */
    VIEWABLE_VIDEO_50 = 5,
  }

  /**
   * Directions in which an expandable ad may expand
   */
  export enum ExpandableDirection {
    /** Expand to the left */
    LEFT = 1,
    /** Expand to the right */
    RIGHT = 2,
    /** Expand upward */
    UP = 3,
    /** Expand downward */
    DOWN = 4,
    /** Expand to full screen */
    FULL_SCREEN = 5,
    /** Resize/Minimize */
    RESIZE = 6,
  }

  /**
   * Types of audio feeds
   */
  export enum FeedType {
    /** Music streaming service */
    MUSIC_STREAMING = 1,
    /** FM/AM broadcast */
    BROADCAST = 2,
    /** Podcast */
    PODCAST = 3,
    /** Catch-up radio */
    CATCHUP_RADIO = 4,
    /** Web radio */
    WEB_RADIO = 5,
    /** Video game audio */
    VIDEO_GAME = 6,
    /** Text to speech */
    TEXT_TO_SPEECH = 7,
  }

  /**
   * Methods for ID matching
   */
  export enum IDMatchMethod {
    /** Unknown */
    UNKNOWN = 0,
    /** No matching occurred */
    NO_MATCH = 1,
    /** Browser Cookie Sync */
    COOKIE_SYNC = 2,
    /** Authenticated match */
    AUTHENTICATED = 3,
    /** Observed match */
    OBSERVED = 4,
    /** Inferred match */
    INFERENCE = 5,
  }

  /**
   * Services for IP geolocation
   */
  export enum IPLocationService {
    /** ip2location */
    IP2LOCATION = 1,
    /** Neustar (Quova) */
    NEUSTAR = 2,
    /** MaxMind */
    MAXMIND = 3,
    /** NetAcuity (Digital Element) */
    NETACUITY = 4,
  }

  /**
   * Media linearity options
   */
  export enum LinearityMode {
    /** Linear */
    LINEAR = 1,
    /** Non-Linear (Overlay) */
    NON_LINEAR = 2,
  }

  /**
   * Types of location determination
   */
  export enum LocationType {
    /** GPS/Location Services */
    GPS = 1,
    /** IP Address */
    IP = 2,
    /** User Provided */
    USER_PROVIDED = 3,
  }

  /**
   * Media ratings based on TAG Inventory Quality Guidelines
   */
  export enum MediaRating {
    /** All Audiences */
    ALL_AUDIENCES = 1,
    /** Everyone Over Age 12 */
    OVER_12 = 2,
    /** Mature Audiences */
    MATURE = 3,
  }

  /**
   * Native data asset types
   */
  export enum NativeDataAssetType {
    /** Sponsored By message */
    SPONSORED = 1,
    /** Descriptive text */
    DESCRIPTION = 2,
    /** Numeric rating */
    RATING = 3,
    /** Number of likes */
    LIKES = 4,
    /** Number of downloads */
    DOWNLOADS = 5,
    /** Product price */
    PRICE = 6,
    /** Sale price */
    SALE_PRICE = 7,
    /** Phone number */
    PHONE = 8,
    /** Address */
    ADDRESS = 9,
    /** Additional description */
    DESCRIPTION_2 = 10,
    /** Display URL */
    DISPLAY_URL = 11,
    /** CTA button text */
    CTA_TEXT = 12,
  }

  /**
   * Native image asset types
   */
  export enum NativeImageAssetType {
    /** Icon image (1:1 aspect ratio) */
    ICON = 1,
    /** Main image preview */
    MAIN = 3,
  }

  /**
   * Device operating system options
   */
  export enum OperatingSystem {
    /** Other Not Listed */
    OTHER = 0,
    /** 3DS System Software */
    THREE_DS = 1,
    /** Android */
    ANDROID = 2,
    /** Apple TV Software */
    APPLE_TV = 3,
    /** Asha */
    ASHA = 4,
    /** Bada */
    BADA = 5,
    /** BlackBerry */
    BLACKBERRY = 6,
    /** BREW */
    BREW = 7,
    /** ChromeOS */
    CHROME_OS = 8,
    /** Darwin */
    DARWIN = 9,
    /** FireOS */
    FIRE_OS = 10,
    /** FirefoxOS */
    FIREFOX_OS = 11,
    /** HelenOS */
    HELEN_OS = 12,
    /** iOS */
    IOS = 13,
    /** Linux */
    LINUX = 14,
    /** MacOS */
    MAC_OS = 15,
    /** MeeGo */
    MEEGO = 16,
    /** MorphOS */
    MORPH_OS = 17,
    /** NetBSD */
    NET_BSD = 18,
    /** NucleusPLUS */
    NUCLEUS_PLUS = 19,
    /** PS Vita System Software */
    PS_VITA = 20,
    /** PS3 System Software */
    PS3 = 21,
    /** PS4 Software */
    PS4 = 22,
    /** PSP System Software */
    PSP = 23,
    /** Symbian */
    SYMBIAN = 24,
    /** Tizen */
    TIZEN = 25,
    /** WatchOS */
    WATCH_OS = 26,
    /** WebOS */
    WEB_OS = 27,
    /** Windows */
    WINDOWS = 28,
  }

  /**
   * Placement positions as a relative measure of visibility
   */
  export enum PlacementPosition {
    /** Unknown */
    UNKNOWN = 0,
    /** Above The Fold */
    ABOVE_FOLD = 1,
    /** Locked (fixed position) */
    LOCKED = 2,
    /** Below The Fold */
    BELOW_FOLD = 3,
    /** Header */
    HEADER = 4,
    /** Footer */
    FOOTER = 5,
    /** Sidebar */
    SIDEBAR = 6,
    /** Fullscreen */
    FULLSCREEN = 7,
  }

  /**
   * Video placement subtypes from IAB Digital Video Guidelines
   * @deprecated as of 2.6-202303 release
   */
  export enum VideoPlacementSubtype {
    /** In-Stream: Played before, during or after streaming video content */
    IN_STREAM = 1,
    /** In-Banner: Exists within a web banner */
    IN_BANNER = 2,
    /** In-Article: Loads between paragraphs of editorial content */
    IN_ARTICLE = 3,
    /** In-Feed: Found in content, social, or product feeds */
    IN_FEED = 4,
    /** Interstitial/Slider/Floating: Covers entire or portion of screen */
    INTERSTITIAL = 5,
  }

  /**
   * Updated video placement subtypes in accordance with IAB Digital Video Guidelines
   */
  export enum VideoPlacementType {
    /** Instream: Pre-roll, mid-roll, and post-roll ads */
    INSTREAM = 1,
    /** Accompanying Content: Ads played with streaming video content */
    ACCOMPANYING = 2,
    /** Interstitial: Video ads played without video content */
    INTERSTITIAL = 3,
    /** No Content/Standalone: Video ads played without streaming video content */
    STANDALONE = 4,
  }

  /**
   * Media playback termination modes
   */
  export enum PlaybackCessationMode {
    /** On Video Completion or when Terminated by User */
    ON_COMPLETION = 1,
    /** On Leaving Viewport or when Terminated by User */
    ON_VIEWPORT_EXIT = 2,
    /** Continues as Floating/Slider Unit until Completion or Termination */
    FLOATING_UNTIL_COMPLETE = 3,
  }

  /**
   * Media playback methods
   */
  export enum PlaybackMethod {
    /** Initiates on Page Load with Sound On */
    AUTO_PLAY_SOUND_ON = 1,
    /** Initiates on Page Load with Sound Off by Default */
    AUTO_PLAY_SOUND_OFF = 2,
    /** Initiates on Click with Sound On */
    CLICK_TO_PLAY = 3,
    /** Initiates on Mouse-Over with Sound On */
    MOUSE_OVER = 4,
    /** Initiates on Entering Viewport with Sound On */
    VIEWPORT_SOUND_ON = 5,
    /** Initiates on Entering Viewport with Sound Off by Default */
    VIEWPORT_SOUND_OFF = 6,
    /** Continuous Playback */
    CONTINUOUS = 7,
  }

  /**
   * Pod deduplication settings
   */
  export enum PodDeduplicationSetting {
    /** Deduplicated on adomain */
    BY_DOMAIN = 1,
    /** Deduplicated on IAB category */
    BY_CATEGORY = 2,
    /** Deduplicated on creative ID */
    BY_CREATIVE_ID = 3,
    /** Deduplicated on mediafile URL */
    BY_MEDIAFILE_URL = 4,
  }

  /**
   * Pod sequence values for audio and video content streams
   */
  export enum PodSequence {
    /** Last pod in the content stream */
    LAST = -1,
    /** Any pod in the content stream */
    ANY = 0,
    /** First pod in the content stream */
    FIRST = 1,
  }

  /**
   * Content production quality options
   */
  export enum ProductionQuality {
    /** Unknown */
    UNKNOWN = 0,
    /** Professionally Produced */
    PROFESSIONAL = 1,
    /** Prosumer */
    PROSUMER = 2,
    /** User Generated Content (UGC) */
    USER_GENERATED = 3,
  }

  /**
   * Units of height and width for creatives and assets
   */
  export enum SizeUnit {
    /** Device Independent Pixels (DIPS) */
    DIPS = 1,
    /** Inches */
    INCHES = 2,
    /** Centimeters */
    CENTIMETERS = 3,
  }

  /**
   * Slot position values for audio and video ad pods
   */
  export enum SlotPosition {
    /** Last ad in the pod */
    LAST = -1,
    /** Any ad in the pod */
    ANY = 0,
    /** First ad in the pod */
    FIRST = 1,
    /** First or Last ad in the pod */
    FIRST_OR_LAST = 2,
  }

  /**
   * Video or audio start delay options
   */
  export enum StartDelayMode {
    /** Generic Post-Roll */
    POST_ROLL = -2,
    /** Generic Mid-Roll */
    MID_ROLL = -1,
    /** Pre-Roll */
    PRE_ROLL = 0,
    // Note: Values > 0 indicate Mid-Roll with specific start delay in seconds
  }

  /**
   * Sources for User-Agent metadata
   */
  export enum UserAgentSource {
    /** Unspecified/unknown */
    UNKNOWN = 0,
    /** User-Agent Client Hints (low-entropy headers only) */
    CLIENT_HINTS_LOW = 1,
    /** User-Agent Client Hints (with high-entropy headers) */
    CLIENT_HINTS_HIGH = 2,
    /** Parsed from User-Agent header */
    PARSED_UA = 3,
  }

  /**
   * Volume normalization modes for audio
   */
  export enum VolumeNormalizationMode {
    /** None */
    NONE = 0,
    /** Ad Volume Average Normalized to Content */
    AVERAGE = 1,
    /** Ad Volume Peak Normalized to Content */
    PEAK = 2,
    /** Ad Loudness Normalized to Content */
    LOUDNESS = 3,
    /** Custom Volume Normalization */
    CUSTOM = 4,
  }
}
