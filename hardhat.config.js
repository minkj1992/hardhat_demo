require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      // 0x20CE8B2190949f48F5D32d5BbbfE7E3760811F61
      accounts: [process.env.TEST_ACCOUNT_PRIVATE_KEY],
    },
  },
  solidity: "0.8.4",

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
