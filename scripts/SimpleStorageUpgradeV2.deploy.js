const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const proxyAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const SimpleStorageUpgradeV2 = await hre.ethers.getContractFactory(
    "SimpleStorageUpgradeV2"
  );

  const ssuV2 = await upgrades.upgradeProxy(
    proxyAddress,
    SimpleStorageUpgradeV2
  );

  console.log(`SimpleStorageUpgrade version 2 deployed to: ${ssuV2.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
