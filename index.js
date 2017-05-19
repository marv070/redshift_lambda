//raw connection 
var redshiftClient = require('./redshift.js');
 
redshiftClient.connect(function(err){
  if(err) throw err;
  else{
    // redshiftClient.query("INSERT INTO public.part(p_partkey, p_name, p_mfgr, p_category, p_brand1, p_color, p_type, p_size, p_container)VALUES(66, 'junk', 'Dodge', 'elec', 'bose', 'pink', 'speaker', 0, 'jumbo');",{raw: true}, function(err, data){
    //   if(err) throw err;
    //   else{
    //     console.log(data);
    //     redshiftClient.close();
    //   }
    // });

    var uploaded_file = 'part-csv.tbl-002',
      key_id = process.env.aws_access_key_id
      console.log(key_id,"key id here");
      access_key = process.env.aws_secret_access_key
      console.log(access_key, 'access key here')
      console.log("copy part from 's3://test-360i/load/"+ uploaded_file +"' credentials 'aws_access_key_id=" + key_id + "aws_secret_access_key=" + access_key +" ' csv;")
    redshiftClient.query("copy part from 's3://test-360i/load/"+ uploaded_file +"' credentials 'aws_access_key_id=" + key_id + ";aws_secret_access_key=" + access_key +"' csv;",{raw: true}, function(err, data){
      if(err) throw err;
      else{
        console.log(data);
        redshiftClient.close();
      }
    });
    //instead of callbacks you can also use promises to get the data 
  }
});

// exports.handler = (event, context, callback) => {
//     // TODO implement
//     callback(null, 'Hello from Lambda');
// };