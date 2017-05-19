//raw connection 
var redshiftClient = require('./redshift.js');
 
redshiftClient.connect(function(err){
  if(err) throw err;
  else{
    redshiftClient.query("INSERT INTO public.part(p_partkey, p_name, p_mfgr, p_category, p_brand1, p_color, p_type, p_size, p_container)VALUES(66, 'junk', 'Dodge', 'elec', 'bose', 'pink', 'speaker', 0, 'jumbo');",{raw: true}, function(err, data){
      if(err) throw err;
      else{
        console.log(data);
        redshiftClient.close();
      }
    });
    //instead of callbacks you can also use promises to get the data 
  }
});