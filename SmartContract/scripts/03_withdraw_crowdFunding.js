const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    console.log("---------------------------------------")
    console.log("Withdrawing From crowdFunding contract...")
    const deployer = await getNamedAccounts()
    console.log(deployer.deployer)
    const crowdFundingContract = await ethers.getContract(
        "crowdFunding",
        deployer.deployer
    )
    console.log(`Got contract at ${crowdFundingContract.address}`)
    try {
        const txResponse = await crowdFundingContract.withdraw()
        await txResponse.wait()
        console.log("Withdrawl successfull...")
    } catch {
        console.log(error)
    }
}

main().catch((error) => {
    console.log(error)
    process.exitCode = 1
})