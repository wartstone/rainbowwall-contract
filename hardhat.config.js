require("@nomiclabs/hardhat-waffle");
const key = require("./KEY");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  defaultNetwork: 'rinkeby',
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${key.ALCHEMY_API_KEY}`,
      accounts: [`${key.PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${key.ALCHEMY_API_KEY2}`,
      accounts: [`${key.PRIVATE_KEY}`]
    }
  }
};
