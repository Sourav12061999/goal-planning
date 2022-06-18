import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/connect";
import users from "../../../Schemas/user.schema";
connect();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      const data = await users.findById(req.query.getUser);      
      if(data._id){
        res.status(200).json({name:data.name,email:data.email});
      }else{
          res.status(404).json({msg:"This user Does not exist"})
      }
    }else{
        res.status(303).json({msg:`The ${req.method} method is not available on this route`});
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
export default handler;
