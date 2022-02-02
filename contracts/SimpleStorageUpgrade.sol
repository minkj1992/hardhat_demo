//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SimpleStorageUpgrade {
    uint storedData;

    event Change(string message, uint newValue);

    function set(uint _x) public {
        console.log("The value is %d", _x);

        require(_x < 5000, "Should be less than 5000");
        storedData = _x;
        emit Change("set", _x);
    }

    function get() public view returns (uint) {
        return storedData;
    }
}