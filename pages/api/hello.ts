// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};

// export default const  handler = (
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) => {
//   res.status(200).json({ name: 'John Doe' })
// }

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    
  } catch (error) {
    res.status(404).json(error);
  }
};
