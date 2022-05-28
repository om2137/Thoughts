const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Thought", function () {
  it("Signup flow", async function () {
    const Thoughts = await ethers.getContractFactory("Thoughts");
    //const [user1, user2] = await ethers.getSigners();
    const [user] = await ethers.getSigners();
    const thoughts = await Thoughts.deploy();
    await thoughts.deployed();

    await thoughts.signup("om", "Om", "bio", "someUrl");
    console.log("signing up user");

    expect(await thoughts.usernames(user.address)).to.equal("om");
  });
});