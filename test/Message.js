
  const { expect } = require("chai");
const { ethers } = require("hardhat");
  
  describe("Message", function () {
    
    const NAME = "Asiwaju";
    const SYMBOL = "ASJ"

    beforeEach(async () => {
        //Setup accounts
        [deployer, user] = await ethers.getSigners()

        //Deploy the contract
        const Message = await ethers.getContractFactory("Message");
        message = await Message.deploy(NAME, SYMBOL);
    })

    describe("Deployment", function() {
        it("Set the name", async() => {
            const result = await message.name();
            expect(result).to.equal(NAME);
        });

        it("Set the symbol", async() => {
            const result = await message.symbol();
            expect(result).to.equal(SYMBOL);
        });

        it("Set the owner", async() => {
            const result = await  message.owner()
            expect(result).to.equal(deployer.address)
        });
    })
  
    
  });
  