const { upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const SimpleStorageUpgrade = await hre.ethers.getContractFactory(
    "SimpleStorageUpgrade"
  );
  const ssu = await upgrades.deployProxy(SimpleStorageUpgrade, [500], {
    initializer: "set",
  });

  console.log(`SimpleStorageUpgrade deployed to: ${ssu.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
