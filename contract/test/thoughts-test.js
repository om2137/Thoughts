const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("thought", function () {
  it("Signup flow", async function () {
    const Thoughts = await ethers.getContractFactory("Thoughts");
    const [user1, user2] = await ethers.getSigners();
    const thoughts = await Thoughts.deploy();
    await thoughts.deployed();

    await thoughts.signup("om", "Om", "Some bio", "someUrl");
    console.log("signing up om...");

    const user = await thoughts.users("om");
    expect(user.name).to.equal("Om");
    expect(user.bio).to.equal("Some bio");
    expect(user.avatar).to.equal("someUrl");
    console.log("test signup is successful");

    const userFromAddress = await thoughts.getUser(user1.address);
    expect(userFromAddress.username).to.equal("om");
    expect(userFromAddress.name).to.equal("Om");
    expect(userFromAddress.bio).to.equal("Some bio");
    expect(userFromAddress.avatar).to.equal("someUrl");
    console.log("test signup is successful");

    expect(await thoughts.usernames(user1.address)).to.equal("om");

    await expect(thoughts.signup("","","","")).to.be.revertedWith(
      "check"
    );
    console.log("test user already exists error");

    await expect(
      thoughts
        .connect(user2)
        .signup("om", "OmRaut", "some bio", "someUrlavt")
    ).to.be.revertedWith("Username is taken, please try another one");
    console.log("test user already exists error");

    await thoughts.postThought("hello world");
    expect((await thoughts.thoughts(0)).content).to.equal("hello world");
    console.log("test postThought is successful");

    const thought = await thoughts.getThoughts();
    expect((await thought[0]).content).to.equal("hello world");
    console.log(thought[0].authorName);
    console.log("test getThoughts is successful.");
  });
});
