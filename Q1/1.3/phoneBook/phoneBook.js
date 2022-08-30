var myHash = {};

function addUser(userName, phoneNumber){
    if(typeof userName !== 'string' || typeof phoneNumber !== 'string' || userName.length < 1 || phoneNumber.length < 10){
        throw new Error("Invalid phoneBook parameters");
    }    
    myHash[userName] = phoneNumber;
};

function deleteUser(userName){
    delete myHash[userName];
};

function getUserPhoneNumber(userName){
    return myHash[userName];
}

function getUserNamesFromNumber(userPhoneNumber){
    return Object.keys(myHash).filter(key => myHash[key] === userPhoneNumber);
}

module.exports.add = addUser;
module.exports.findByName = getUserPhoneNumber;
module.exports.findUsersByPhone = getUserNamesFromNumber;
module.exports.delete = deleteUser;