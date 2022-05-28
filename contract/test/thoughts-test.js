const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("thoughts", function () {
  it("Signup flow", async function () {
    const Thoughts = await ethers.getContractFactory("Thoughts");
    const [user1, user2] = await ethers.getSigners();
    const thoughts = await Thoughts.deploy();
    await thoughts.deployed();

    await thoughts.signup("om", "Om", "bio", "someUrl");
    console.log("signing up user");

    expect(await thoughts.usernames(user1.address)).to.equal("om");

    await expect(thoughts.signup("","","","")).to.be.revertedWith(
      "User already exist"
    );
    console.log("test user already exists error");

    await expect(
      thoughts
        .connect(user2)
        .signup("omraut", "Omrau", "some bio", "someUrlavt")
    ).to.be.revertedWith("Username is taken");
    console.log("test username is taken error");
  });
});
