import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.status(200).json({ session });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
};
