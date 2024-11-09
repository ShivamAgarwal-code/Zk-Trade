
const hre = require("hardhat");

async function main() {
  const UsdcToken = await hre.ethers.getContractFactory("USDC");
  const usdcToken = await UsdcToken.deploy();

  await usdcToken.waitForDeployment(); 

  console.log(
    `USDC deployed to ${usdcToken.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
