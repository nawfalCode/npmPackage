/**
 * UUID Prefix
 * Done by Nawfal Ali
 * 23/06/2015
 */
var uuid = require('node-uuid');
module.exports = {
    getUuidV1: function(uuidProperties) {
        var uuidTemp = new Array(uuidProperties.length + 16);
        uuid.v1(null, uuidTemp, uuidProperties.length);
        for (var i = 0; i < uuidProperties.length; i++) {
            uuidTemp[i] = uuidProperties[i];
        }
        return uuidTemp;
    }
};