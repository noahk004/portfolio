import type { NextApiRequest, NextApiResponse } from "next";
import getImage from "../s3/s3-get";

type ResponseData = {
  message: string;
};

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const url = await getImage("zina.png");

  const data = {
    url,
  };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
