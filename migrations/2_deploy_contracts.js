var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var BandApp = artifacts.require("./BandApp.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(BandApp);
};
