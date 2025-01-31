"use client";
import { client } from "./client";
import { defineChain } from "thirdweb/chains";
import {
  ConnectButton,
  PayEmbed,
} from "thirdweb/react";

export default function Home() {


  return (
    <main className="min-h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold mb-4">Wallet Connection</h1>

      <div className="flex flex-col items-center gap-4">
        <ConnectButton
          client={client}
          chain={defineChain(466)}
       />
      <PayEmbed
        client={client}
        payOptions={{
          mode: "fund_wallet",
          metadata: {
            name: "Deposit funds",
          },
          prefillBuy: {
            chain: defineChain(466),
            amount: "0.1",
            allowEdits: {
              chain: false,
              token: true,
              amount: true,
            },
          },
        }}
      />

      </div>
    </main>
  );
}