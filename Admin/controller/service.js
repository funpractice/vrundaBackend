const client=require("../../Connection/connection");

exports.AddService=function(req,res){
   
    (async()=>{
        let servicedata=req.body; 
        const result=await client.query('insert into Services(service_name,service_image) values($1,$2)',[servicedata.service_name,servicedata.service_image],(error)=>{
            if(error)
            {
                res.status(401).json(error)
            }
            res.status(200).json({
                status:"Success",
                msg:"Insert Service Succesfully",
            });
        });
        
    })();

}

exports.UpdateService=function(req,res){
   
    (async()=>{
        let servicedata=req.body; 
        let service_id=req.params.id;
        const result=await client.query('update Services set service_name=$1 ,service_image=$2 where service_id=$3',[servicedata.service_name,servicedata.service_image,service_id],(error)=>{
            if(error)
            {
                res.status(401).json(error)
            }
            res.status(200).json({
                status:"Success",
                msg:"Updated Service Succesfully",
                data:servicedata
            });
        });
        
    })();

}


exports.DeletedService=function(req,res){
   
    (async()=>{
        let service_id=req.params.id;
        const result=await client.query('delete from services where service_id=$1',[service_id],(error)=>{
            if(error)
            {
                res.status(401).json(error)
            }
            res.status(200).json({
                status:"Success",
                msg:"Deleted Service Succesfully",
            });
        });
        
    })();

}


