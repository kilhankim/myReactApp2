var memRegist = {

  regist : function(email, name, password, callback){
            console.log('memRegist email : ' + email);
            console.log('memRegist name: ' + name);
            console.log('memRegist password : ' + password);
            const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
            const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
            const AWS = require('aws-sdk');
            const request = require('request');
            global.fetch = require('node-fetch');


            var returnData = {}

            const poolData = {    
              UserPoolId : 'ap-northeast-2_ywvJEnETc',
              ClientId :'58f12rqlkhdao08gnbih7f6kdo' 
            }; 
            const pool_region = 'ap-northeast-2';

            const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);




	    var attributeList = [];
	    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"name",Value:"test"}));
	    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"gender",Value:"male"}));
	    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"birthdate",Value:"1991-06-21"}));
	    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"address",Value:"CMB"}));
	    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:email})            );

            userPool.signUp(email, password, attributeList, null, function(err, result){
              if (err) {
                console.log(err);
                returnData = { 'result ' : 'fail', 'data' : err.message}
                callback(returnData)
              }
              else
              {
                returnData = { 'result ' : 'success', 'data' : result.user}
                callback(returnData);
              }

            });

         }

}

module.exports = memRegist;
