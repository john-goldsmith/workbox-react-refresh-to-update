/**
 * See https://developers.google.com/web/tools/workbox/reference-docs/latest/index-all
 * or https://developers.google.com/web/tools/workbox/reference-docs/latest
 * for full API documentation.
 */

/**
 * DO NOT USE THE workbox-sw PACKAGE -- IT'S NOT NEEDED! The workbox-sw
 * package simply provides a global `workbox` namespace with all of the
 * same plugins, and is an alternative to using the corresponding
 * `import {...} from 'workbox-*' packages.
 * See https://developers.google.com/web/tools/workbox/modules/workbox-sw
 */

/**
 * DO NOT USE THE workbox-window PACAKGE HERE! The workbox-window package
 * is intended to be run in the `window` context (e.g., in a web page) and
 * not in the context of a service worker.
 * See https://developers.google.com/web/tools/workbox/modules/workbox-window
 */

// See https://developers.google.com/web/tools/workbox/modules/workbox-background-sync
// import {
// BackgroundSyncPlugin, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-background-sync.BackgroundSyncPlugin
// Queue // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-background-sync.Queue
// } from 'workbox-background-sync';

// See https://developers.google.com/web/tools/workbox/modules/workbox-broadcast-update
// import {
// BroadcastCacheUpdate, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-broadcast-update.BroadcastCacheUpdate
// BroadcastUpdatePlugin, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-broadcast-update.BroadcastUpdatePlugin
// responsesAreSame // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-broadcast-update#.responsesAreSame
// } from 'workbox-broadcast-update';

// See https://developers.google.com/web/tools/workbox/modules/workbox-cacheable-response
// import {
// CacheableResponse, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-cacheable-response.CacheableResponse
// CacheableResponsePlugin // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-cacheable-response.CacheableResponsePlugin
// } from 'workbox-cacheable-response';

// See https://developers.google.com/web/tools/workbox/modules/workbox-core
import {
  // cacheNames, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-core#.cacheNames
  clientsClaim, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-core#.clientsClaim
  // copyResponse, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-core#.copyResponse
  // registerQuotaErrorCallback, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-core#.registerQuotaErrorCallback
  setCacheNameDetails, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-core#.setCacheNameDetails
  // skipWaiting // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-core#.skipWaiting
} from 'workbox-core';

// See https://developers.google.com/web/tools/workbox/modules/workbox-expiration
// import {
// CacheExpiration, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-expiration.CacheExpiration
// ExpirationPlugin // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-expiration.ExpirationPlugin
// } from 'workbox-expiration';

// See https://developers.google.com/web/tools/workbox/modules/workbox-google-analytics
// import {
// initialize // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-google-analytics#.initialize
// } from 'workbox-google-analytics';

// See https://developers.google.com/web/tools/workbox/modules/workbox-navigation-preload
// import {
// disable, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-navigation-preload#.disable
// enable, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-navigation-preload#.enable
// isSupported // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-navigation-preload#.isSupported
// } from 'workbox-navigation-preload';

// See https://developers.google.com/web/tools/workbox/modules/workbox-precaching
import {
  // PrecacheController, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching.PrecacheController
  // addPlugins, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.addPlugins
  // addRoute, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.addRoute
  // cleanupOutdatedCaches, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.cleanupOutdatedCaches
  // createHandler, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.createHandler
  // createHandlerBoundToURL, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.createHandlerBoundToURL
  // getCacheKeyForURL, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.getCacheKeyForURL
  // matchPrecache, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.matchPrecache
  // precache, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.precache
  precacheAndRoute, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-precaching#.precacheAndRoute
} from 'workbox-precaching';

// See https://developers.google.com/web/tools/workbox/modules/workbox-range-requests
// import {
// RangeRequestsPlugin, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-range-requests.RangeRequestsPlugin
// createPartialResponse // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-range-requests#.createPartialResponse
// } from 'workbox-range-requests';

// See https://developers.google.com/web/tools/workbox/modules/workbox-routing
// import {
// NavigationRoute, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing.NavigationRoute
// RegExpRoute, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing.RegExpRoute
// Route, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing.Route
// Router, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing.Router
// registerRoute, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing#.registerRoute
// setCatchHandler, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing#.setCatchHandler
// setDefaultHandler // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-routing#.setDefaultHandler
// } from 'workbox-routing';

// See https://developers.google.com/web/tools/workbox/modules/workbox-strategies
// import {
// CacheFirst, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.CacheFirst
// CacheOnly, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.CacheOnly
// NetworkFirst, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.NetworkFirst
// NetworkOnly, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.NetworkOnly
// StaleWhileRevalidate // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-strategies.StaleWhileRevalidate
// } from 'workbox-strategies';

// See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-streams
// import {
// concatenate, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-streams#.concatenate
// concatenateToResponse, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-streams#.concatenateToResponse
// isSupported, // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-streams#.isSupported
// strategy // See https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-streams#.strategy
// } from 'workbox-streams';

// See https://developers.google.com/web/tools/workbox/guides/configure-workbox#configure_cache_names

clientsClaim();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

setCacheNameDetails({
  prefix: 'workbox_react',
});

/**
 * DO NOT REMOVE THE FOLLOWING LINE! At build time, the Workbox Webpack
 * plugin replaces `__WB_MANIFEST` with an array of resources to
 * precache (effectively making this file act as a specialized template).
 *
 * See https://developers.google.com/web/tools/workbox/guides/codelabs/webpack#optional-injection
 */
precacheAndRoute(self.__WB_MANIFEST);
