
const hre = require("hardhat");

async function main() {

  const Thoughts = await hre.ethers.getContractFactory("Thoughts");
  const thoughts = await Thoughts.deploy();

  await thoughts.deployed();

  console.log("Thoughts deployed to:", thoughts.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
