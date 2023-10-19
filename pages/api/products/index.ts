/* eslint-disable @typescript-eslint/no-explicit-any */
import Product from "~/lib/data/product";

export default function handler(req: any, res: any) {
  res.send(Product);
}
