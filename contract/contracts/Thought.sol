//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Thoughts{
    // constrains of user
    struct User{
        address wallet;
        string name;
        string username;
        string bio;
        string avatar;
    }
    // constrains of message
    struct Thought{
        address author;
        string authorName;
        string content;
        uint timestamp;

    }
    // message arry
    Thought[] public thoughts;
    // address mapped to user's username
    mapping(address => string) public usernames;
    // username mapped to users (to store unique username)
    mapping(string => User) public users;
    // thoughts mapped to users (to store unique thoughts)


    //signup function 
    function signup(string memory _username, string memory _name,string memory _bio,string memory _avatar) public {
        // check if username is already taken
        require(bytes(usernames[msg.sender]).length == 0, "check");
        require(users[_username].wallet == address(0), "Username is taken, please try another one");
        // create new user
        users[_username] = User({
            wallet: msg.sender,
            name: _name,
            username: _username,
            bio: _bio,
            avatar: _avatar 
        });
        usernames[msg.sender]= _username;

    }
    // gets logged in user's info
    function getUser(address _wallet) public view returns (User memory){
        return users[usernames[_wallet]];
    }

    // publishing message function
    function postThought(string memory _content) public {
        require(bytes(usernames[msg.sender]).length > 0, "you must Signin first, to post thought");
        require(bytes(_content).length > 0, "thought cannot be empty");
        require(bytes(_content).length <= 200, "thought is too long."); 
        // create new message
        Thought memory thought = Thought({
            author: msg.sender,
            authorName: usernames[msg.sender],
            content: _content,
            timestamp: block.timestamp
        });
        thoughts.push(thought);
    }
    // get all messages 
    function getThoughts() public view returns (Thought[] memory){
        return thoughts;
    }
}