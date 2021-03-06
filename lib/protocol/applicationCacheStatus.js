/**
 *
 * Get the status of the html5 application cache.
 *
 * @returns {Number} Status code for application cache: **{UNCACHED = 0, IDLE = 1, CHECKING = 2, DOWNLOADING = 3, UPDATE_READY = 4, OBSOLETE = 5}**
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/application_cache/status
 * @type protocol
 *
 */

module.exports = function applicationCacheStatus () {

    this.requestHandler.create('/session/:sessionId/application_cache/status', arguments[arguments.length - 1]);

};