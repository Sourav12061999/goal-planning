import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/connect";
import users from "../../../Schemas/user.schema";
connect();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const data = await users.create(req.body);
      res.status(200).json({name:data.name,email:data.email,password:data.password,id:data._id});
    }else{
        res.status(303).json({msg:`The ${req.method} method is not available on this route`});
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
export default handler;
