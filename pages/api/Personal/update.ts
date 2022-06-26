import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/connect";
import personal from "../../../Schemas/personal.schema";
connect();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if(req.method==="PUT"){
            await personal.findByIdAndUpdate(req.body._id,req.body);
            res.status(200).json({
               isError:false,
            })
        }else{
            res.status(404).json({
                isError:true,
                error:`The ${req.method} method doesn't exist on this route`
            })
        }
        
    } catch (error) {
        res.status(404).json({
            isError:true,
            error,
        })
    }
};

export default handler;
