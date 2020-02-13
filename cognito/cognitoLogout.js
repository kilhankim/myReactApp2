

var logoutCheck = {
  logout : function(email, callback){
        const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
        const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
        const AWS = require('aws-sdk');
        const request = require('request');
        global.fetch = require('node-fetch');

        const poolData = {
          UserPoolId : 'ap-northeast-2_ywvJEnETc',
          ClientId :'58f12rqlkhdao08gnbih7f6kdo'
        };

        const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        const pool_region = 'ap-northeast-2';

        var userData = {
            Username : email,
            Pool : userPool
        };

	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

        callback(cognitoUser.signOut() )

  }


}




module.exports = logoutCheck;
