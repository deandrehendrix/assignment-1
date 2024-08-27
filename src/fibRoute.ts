// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const parsedNum: number = parseInt(num, 10);
  if (isNaN(parsedNum)) {
    res.status(400).send("Invalid number");
    return;
  }

  const fibN: number = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
