const { run } = require("hardhat")

const verify = async(contractAddress, args) => {
    console.log("----------------------------------------")
    console.log("Starting verification of the contract.")
    try {
        await run("verify:verify", {
            address: contractAddress,
            // constructorArguments: args,
        })
        console.log("Verification of the contract complete.")
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract Already verified...")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }