import type { NextApiRequest, NextApiResponse } from "next";
import connect from "../../../utils/connect";
import personal from "../../../Schemas/personal.schema";
connect();
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      let data = await personal.find({ userid: req.query.get });
      if(data.length) res.status(200).json(data);
      else res.status(200).json(null);
    } else {
      res.status(404).json({
        isError: true,
        error: `The ${req.method} method doesn't exist on this route`,
      });
    }
  } catch (error) {
    res.status(404).json({
      isError: true,
      error,
    });
  }
};

export default handler;
