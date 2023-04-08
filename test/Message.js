
  const { expect } = require("chai");
const { ethers } = require("hardhat");
  
  describe("Message", function () {

    let deployer, user;
    let message;
    
    const NAME = "Asiwaju";
    const SYMBOL = "ASJ";

    beforeEach(async () => {
        //Setup accounts
        [deployer, user] = await ethers.getSigners()

        //Deploy the contract
        const Message = await ethers.getContractFactory("Message");
        message = await Message.deploy(NAME, SYMBOL);
    })

    describe("Deployment", function() {
        it("Sets the name", async() => {
            //fetch name
            const result = await message.name();
            //checks name
            expect(result).to.equal(NAME);
        });

        it("Sets the symbol", async() => {
            //fetch symbol
            const result = await message.symbol();
            //checks symbol
            expect(result).to.equal(SYMBOL);
        });

        it("Sets the owner", async() => {
            //fetch owner
            const result = await  message.owner()
            //check owner
            expect(result).to.equal(deployer.address)
        });
    })
  
    
  });
  