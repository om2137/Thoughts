const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("thought", function () {
  it("Signup flow", async function () {
    const Thoughts = await ethers.getContractFactory("Thoughts");
    const [user1, user2] = await ethers.getSigners();
    const thoughts = await Thoughts.deploy();
    await thoughts.deployed();

    await thoughts.signup("abhi", "Abhi", "Some bio", "someUrl");
    console.log("signing up abhi...");

    expect(await thoughts.usernames(user1.address)).to.equal("abhi");

    await expect(thoughts.signup("","","","")).to.be.revertedWith(
      "user already exist ewtgw"
    );
  
  });
});
