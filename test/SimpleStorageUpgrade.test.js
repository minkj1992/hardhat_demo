const hre = require("hardhat");
const { expect } = require("chai");

describe("SimpleStorageUpgrade", function () {
  const wallets = waffle.provider.getWallets();

  before(async () => {
    const signer = waffle.provider.getSigner();
    const SimpleStorageUpgrade = await hre.artifacts.readArtifact(
      "SimpleStorageUpgrade"
    );
    this.instance = await waffle.deployContract(signer, SimpleStorageUpgrade);
  });

  it("should change the value", async () => {
    const giveValue = 500;

    const tx = await this.instance.connect(wallets[1]).set(giveValue);
    const value = await this.instance.get();

    expect(value).to.be.equal(giveValue);
  });

  it("should revert", async () => {
    const over5000 = 6000;
    await expect(this.instance.set(over5000)).to.be.revertedWith(
      "Should be less than 5000"
    );
  });
});
