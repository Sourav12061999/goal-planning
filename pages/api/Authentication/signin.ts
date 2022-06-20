import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/connect";
import users from "../../../Schemas/user.schema";
connect();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
        let incomingData=JSON.parse(req.body);
      let data = await users.find({email:incomingData.email}).lean().exec();
      if(data.length===0){
        res.status(404).json({msg:"This email Doesn't Exist"})
      }else if(data[0].password != incomingData.password){
        res.status(404).json({msg:"Please Enter a Valid Email or Password"});
      }else{
        res.status(200).json({name:data[0].name,email:data[0].email,id:data[0]._id});
      }
    }else{
        res.status(303).json({msg:`The ${req.method} method is not available on this route`});
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
export default handler;
