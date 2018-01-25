"use strict";
exports.__esModule = true;
var artifacts_1 = require("./artifacts");
var requestSynchroneExtensionEscrow_service_1 = require("./servicesExtensions/requestSynchroneExtensionEscrow-service");
/**
 * getServiceFromAddress return the service of a coresponding extension contract address
 * @param   address     The address of the extension contract
 * @return  The service object or undefined if not found
 */
exports.getServiceFromAddress = function (address) {
    if (!address)
        return undefined;
    if (isThisArtifact(artifacts_1["default"].requestSynchroneExtensionEscrowArtifact, address)) {
        return new requestSynchroneExtensionEscrow_service_1["default"]();
    }
    else {
        return undefined;
    }
};
var isThisArtifact = function (artifact, address) {
    if (!address)
        return false;
    var found = false;
    Object.keys(artifact.networks).forEach(function (k) {
        found = found ||
            (artifact.networks[k].address
                && artifact.networks[k].address.toLowerCase() === address.toLowerCase());
    });
    return found;
};
