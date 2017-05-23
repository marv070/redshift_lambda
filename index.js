//raw connection 
var redshiftClient = require('./redshift.js');
  
function pullFromS3PushtoRedshift(event) {
    console.log(event.Records[0].s3.object.key,'event is here !!!!');
redshiftClient.connect(function(err){
  if(err) throw err;
  else{
   
    var uploaded_file = event.Records[0].s3.object.key,
      key_id = process.env.aws_access_key_id;
      console.log(key_id,"key id here");
      access_key = process.env.aws_secret_access_key;
      console.log(access_key, 'access key here');
      console.log("copy part from 's3://test-360i/"+ uploaded_file +"' credentials 'aws_access_key_id=" + key_id + "aws_secret_access_key=" + access_key +" ' csv;");
    redshiftClient.query("copy part from 's3://test-360i/"+ uploaded_file +"' credentials 'aws_access_key_id=" + key_id + ";aws_secret_access_key=" + access_key +"' csv;",{raw: true}, function(err, data){
      if(err) throw err;
      else{
        console.log(data);
        redshiftClient.close();
      }
    });
    //instead of callbacks you can also use promises to get the data 
  }
});
}

exports.handler = (event, context, callback) => {
    console.log(event,"export event here !!!!!!!");
    // TODO implement
    pullFromS3PushtoRedshift(event);
    callback(null, 'Hello from Lambda');
};