import { z } from "zod";
import { type ToolMetadata, type InferSchema } from "xmcp";
import { paid } from "@xmcp-dev/x402";

export const schema = {
  name: z.string().describe("The name of the user to greet"),
};

export const metadata: ToolMetadata = {
  name: "greet",
  description: "Greet the user",
  annotations: {
    title: "Greet the user",
    readOnlyHint: true,
    destructiveHint: false,
    idempotentHint: true,
  },
};

export default paid(function greet({ name }: InferSchema<typeof schema>) {
  return `Hello, ${name}!!`;
});
