import React, { useState } from 'react';
import { Buffer } from 'buffer';
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from '@solana/web3.js';
import { Program } from '@project-serum/anchor';
import { AnchorProvider } from '@project-serum/anchor';
import idl from './solana_certification_project.json';

window.Buffer = Buffer;

const network = clusterApiUrl("devnet");
const programID = new anchor.web3.PublicKey(idl.metadata.address);

function App() {
  const [text, setText] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  const getProvider = () => {
    const connection = new anchor.web3.Connection(network);
    const provider = new anchor.AnchorProvider(
      connection,
      window.solana,
      anchor.AnchorProvider.defaultOptions()
    );
    return provider;
  };

  const connectWallet = async () => {
    if (window.solana) {
      const response = await window.solana.connect();
      setWalletAddress(response.publicKey.toString());
    }
  };

  const storeText = async () => {
    const provider = getProvider();
    const program = new Program(idl, programID, provider);

    // Generate a new public key for the textAccount
    const textAccount = anchor.web3.Keypair.generate();

    // Get the systemProgram account
    const systemProgram = anchor.web3.SystemProgram.programId;

    await program.rpc.storeText(text, {
      accounts: {
        textAccount: textAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram
      },
      signers: [textAccount]
    });
  };

  return (
    <div>
      <button onClick={connectWallet}>Log-in using PhantomWallet to Save to Solana</button>
      <p>Wallet Address: {walletAddress}</p>
      <input type="text" onChange={e => setText(e.target.value)} />
      <button  onClick={storeText}>Save to Solana</button>
    </div>
  );
}

export default App;
