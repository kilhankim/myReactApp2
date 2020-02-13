

var authCheck = {

  login : function(email, password, callback){
	const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
	const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
	const AWS = require('aws-sdk');
	const request = require('request');
	global.fetch = require('node-fetch');

	const poolData = {
	  UserPoolId : 'ap-northeast-2_ywvJEnETc',
	  ClientId :'58f12rqlkhdao08gnbih7f6kdo'
	};
	const pool_region = 'ap-northeast-2';

	const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);


	var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
	    Username : email,
	    Password : password
	});

	var userData = {
	    Username : email,
	    Pool : userPool
	};

	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);


        console.log(email + ' ' + password)
        console.log(cognitoUser)

        var returnData = {}


	cognitoUser.authenticateUser(authenticationDetails, {
	    onSuccess: function (result) {
                
                console.log('result : ' + JSON.stringify(result));

                returnData = { 'result' : 'success' , 'token' : result.getIdToken().getJwtToken()}; 

                callback(returnData);

	    }, //onSuccess
	    onFailure: function(err) {
                returnData = { 'result' : 'fail' , 'error' : err}
           
                console.log('err : ' + JSON.stringify(err));
                console.log('length : ' + Object.keys(err).length);
                if(Object.keys(err).length>0)
                {
                   console.log('returnData2 : ' + JSON.stringify(returnData));
                   console.log('err is not null')
                   callback(returnData);
                }
	    },

	});


   } //login : function

}




module.exports = authCheck;
