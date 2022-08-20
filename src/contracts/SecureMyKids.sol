// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract SecureMyKids {

    struct Geo {
        uint256 date;
        string longitude;
        string latitude;
    }

    struct Track {
        uint256 deviceId;
        Geo[] geos;
    }

    struct Device {
        uint256 deviceId;
        address device;
        address spectator;
    }

    Device[] public devices;

    mapping (uint256 => address) deviceIdToDevice;
    mapping (address => uint256) deviceToDeviceId;

    mapping (address => uint256) spectatorToDeviceId;
    mapping (uint256 => address) deviceIdToSpectator;

    mapping (uint256 => Geo[]) deviceIdToGeos;

    // functions for a device

    function addDevice() public {
        require(deviceToDeviceId[msg.sender] == 0 && deviceIdToDevice[0] != msg.sender);
        uint256 _deviceId = devices.length;
        devices.push(Device({deviceId: _deviceId, device: msg.sender, spectator: address(0)}));

        deviceIdToDevice[_deviceId] = msg.sender;
        deviceToDeviceId[msg.sender] = _deviceId;
    }

    function setSpectator(address _spectator) public {
        require(devices[deviceToDeviceId[msg.sender]].device == msg.sender && devices[deviceToDeviceId[msg.sender]].spectator == address(0));
        devices[deviceToDeviceId[msg.sender]].spectator = _spectator;
        deviceIdToSpectator[deviceToDeviceId[msg.sender]] = _spectator;
        spectatorToDeviceId[_spectator] = deviceToDeviceId[msg.sender];
    }

    function storeGeo(uint256 _date, string memory _longitude, string memory _latitude) public {
        deviceIdToGeos[deviceToDeviceId[msg.sender]].push(Geo({date: _date, longitude: _longitude, latitude: _latitude}));
    }

    // functions for a spectator

    function unsetSpectator() public {
        require(devices[spectatorToDeviceId[msg.sender]].spectator == msg.sender);
        devices[spectatorToDeviceId[msg.sender]].spectator = address(0);
    }

    function getTrack() public view returns(Geo[] memory) {
        require(devices[spectatorToDeviceId[msg.sender]].spectator == msg.sender);
        return deviceIdToGeos[spectatorToDeviceId[msg.sender]];  
    }

}