import { x402Provider } from "@xmcp-dev/x402";

export default x402Provider({
  wallet: process.env.X402_WALLET!,
  defaults: {
    price: 0.01,
    network: "base-sepolia",
  },
});
