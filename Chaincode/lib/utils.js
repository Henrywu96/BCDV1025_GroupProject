'use strict';

const moment = require('moment');
const shipVessel = require('./shipvessel.json');
const isJSON = require('is-json');
/**
 * @param {String} shipID
 * @returns {Bool}
*/

exports.isValidShipVessel = function(shipID) {
    return Boolean(shipVessel[shipID] && shipVessel[shipID] !== {});
};

exports.getCurrentTimestamp = function() {
    return moment().format('YYYY-MM-DDTHH:mm:ss');
};

exports.isJSON = function(jsonObj) {
    return isJSON(jsonObj);
};