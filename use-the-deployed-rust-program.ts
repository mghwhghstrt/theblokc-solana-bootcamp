//file:use-the-deployed-rust-program.ts
import 'dotenv/config' //needed to read the private key from a .env file in the directory
import base58 from 'bs58' // needed to convert the private key into base-58

import * as Web3 from '@solana/web3.js'
import * as anchor from '@project-serum/anchor'

import { Transaction, TransactionInstruction, SystemProgram, Keypair, Connection, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";

// Connect to the Solana devnet
const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))

// Decode the signer's private key from base58
const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');

// Create a keypair from the private key
const fromAccount = Web3.Keypair.fromSecretKey(base58DecodedPK)

async function main() {
    
    // The public key of the program
    const programId = new PublicKey('2jQZt8QvcEkJDFkkjqSfUFLdFmA5sPn9hfqTpJZsmjws');

    // Create a new account
    const newAccount = Keypair.generate();
    const newAccountPubkey = newAccount.publicKey;
    
    // Create a transaction to create the new account
    const createAccountTransaction = SystemProgram.createAccount({
        fromPubkey: fromAccount.publicKey,
        newAccountPubkey: newAccountPubkey,
        lamports: await connection.getMinimumBalanceForRentExemption(513), // adjust depending on your account data size
        space: 513, // adjust this to allocate more space for account data
        programId: programId,
    });

    // Create the initialization instruction
    const initInstruction = new TransactionInstruction({
        keys: [{ pubkey: newAccountPubkey, isSigner: true, isWritable: true }],
        programId: programId,
        data: Buffer.alloc(513, 0), // 0 is the code for Initialize
    });

    // Create the transaction for creating the account and initializing it
    let transaction = new Transaction()
        .add(createAccountTransaction)
        .add(initInstruction);

    // Sign the transaction
    transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
    transaction.sign(fromAccount, newAccount); // sign with both accounts

    // Send the transaction
    let txid = await sendAndConfirmTransaction(connection, transaction, [fromAccount, newAccount]);

    console.log('Account creation and initialization transaction sent:', txid);

    // Create the instruction to update the message
    const message = 'Wilkommen zu Alle';
    const messageBuffer = Buffer.alloc(513);
    messageBuffer[0] = 1; // 1 is the code for UpdateMessage
    messageBuffer.write(message, 1, 'utf-8');

    const updateMessageInstruction = new TransactionInstruction({
        keys: [{ pubkey: newAccountPubkey, isSigner: true, isWritable: true }],
        programId: programId,
        data: messageBuffer,
    });

    // Create the transaction for updating the message
    transaction = new Transaction()
        .add(updateMessageInstruction);

    // Sign the transaction
    transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
    transaction.sign(fromAccount, newAccount); // sign with both accounts

    // Send the transaction
    txid = await sendAndConfirmTransaction(connection, transaction, [fromAccount, newAccount]);

    console.log('Message update transaction sent:', txid);
}

main().catch(console.error);