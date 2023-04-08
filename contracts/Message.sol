// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Message is ERC721 {

    address public owner;
    uint256 totalChannels;

    struct Channel {
        uint256 id;     //unique ID
        string name;    //name of channel
        uint256 cost;   //cost of joining a channel [get NFT]
    }

    mapping (uint256 => Channel) channels;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        owner = msg.sender;
    }

    function createChannel(string memory _name, uint256 _cost) public {
        totalChannels++;
        
        channels[totalChannels] = Channel(totalChannels, _name, _cost);
    }
}