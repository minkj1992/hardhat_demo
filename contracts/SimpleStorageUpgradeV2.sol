//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract SimpleStorageUpgradeV2 {
    uint storedData;
    uint storedKey;

    event Change(string message, uint newValue);

    function setData(uint _x) public {
        require(_x < 10000, "Should be less than 10000");
        storedData = _x;
        emit Change("set data", _x);
    }

    function getData() public view returns (uint) {
        return storedData;
    }

    function setKey(uint _k) public {
        storedKey = _k;
        emit Change("set key", _k);
    }

    function getKey() public view returns (uint) {
        return storedKey;
    }
}