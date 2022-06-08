const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    console.log("-------------------------------------------------")
    console.log("Funding Script starting...")
    const deployer = await getNamedAccounts() // getNamedAccounts here goes back to hardhat.config.js and get us the account from the namedAccounts section of hardhat.config.js. It first checks the chain Id and then returns with the corresponding account from the array of accounts for that chain.
    console.log(deployer.deployer)
    const crowdFundingContract = await ethers.getContract(
            "crowdFunding",
            deployer.deployer
        ) //getContract takes in contract name(string) and deployer/signer(PRIVATE_KEY in string and get us the contract, but for this to work contract must be deployed using hardhat-deploy. So that it recognise the contract with its name)
    console.log(`Got contract at: ${crowdFundingContract.address}`)
    try {
        const txResponse = await crowdFundingContract.fund({
            value: ethers.utils.parseEther("0.5"), //This value will be deducted from the account who is deployer above
        })
        await txResponse.wait()
        console.log("Funded Successfully...")
    } catch {
        console.log(error)
    }
}

main().catch((error) => {
    console.log(error)
    process.exitCode = 1
})