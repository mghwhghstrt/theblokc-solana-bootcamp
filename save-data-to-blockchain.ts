//file:save-data-to-blockchain.ts
import 'dotenv/config'
import bs58 from 'bs58'

import * as web3 from '@solana/web3.js'

import { Transaction, TransactionInstruction, Keypair, Connection, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";

const memoProgramId = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");

let connection: Connection = new web3.Connection(web3.clusterApiUrl('devnet'));
let keypair: Keypair;

const connectWallet = async () => {
    keypair = web3.Keypair.fromSecretKey(bs58.decode(process.env.SOL_PRIVATE_KEY || ''));
}

const saveData = async (data: any) => {
    let transferTransaction = new Transaction();

    transferTransaction.add(new TransactionInstruction({
        programId: memoProgramId,
        keys: [{
            pubkey: keypair.publicKey,
            isSigner: true,
            isWritable: false,
        }],
        data: Buffer.from(JSON.stringify(data))
    }))

    const transactionHash =  await web3.sendAndConfirmTransaction(
        connection, 
        transferTransaction, 
        [keypair]
    );

    return transactionHash;
}

const readTransaction = async (signature: string) => {
    try {
        const transaction = await connection.getTransaction(signature);
        if (transaction && transaction.transaction.message.instructions[0]) {
            return transaction.transaction.message.instructions[0].data;
        } else {
            console.error('Transaction not found or does not have any instructions');
        }
    } catch (error) {
        console.error('Error reading transaction:', error);
    }
}

const saveReadData = async () => {
    const signature = await saveData({
        amount: 1,
        isWon: true,
        ROI: 2,
    });

    console.log(signature);

    // Delay of 5 seconds before reading the transaction
    setTimeout(async () => {
        const b58Address = await readTransaction(signature);
        if (b58Address) {
            const dataAsUint8Arr = bs58.decode(b58Address);
            const jsonString = Buffer.from(dataAsUint8Arr).toString('utf8');
            const data = JSON.parse(jsonString);

            console.log(data);
        }
    }, 5000);
}

const initConnection = async () => {
    await connectWallet();
}

const initTestReadSaveData = async () => {
    await initConnection();
    await saveReadData();
}

initTestReadSaveData();