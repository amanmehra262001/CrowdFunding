const { deployments, network } = require("hardhat")
const { verify } = require("../utils/verify")
require("dotenv").config()

module.exports = async function() {
    console.log("Starting the main function....")
    const { deploy, log } = deployments
    const deployer = process.env.PRIVATE_KEY
    const crowdFunding = await deploy("crowdFunding", {
        from: deployer,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`Contract Deployed at: ${crowdFunding.address}`)

    await verify(crowdFunding.address)

    // console.log("Trying to fund the contract")
    // await crowdFunding.fund({ value: ethers.utils.parseEther("0.1") })
    // console.log("Funded to contract sucessfully.")
}

module.exports.tags = ["all", "crowdFunding"]