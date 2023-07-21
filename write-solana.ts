import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';

// The main function of the program
async function main() {
    try {
        // Create a new transaction
        const transaction = new Web3.Transaction();

        // Create an instruction to send SOL (the native token of Solana)
        const sendSolInstruction = SystemProgram.transfer({
            // Public key of the sender's account
            fromPubkey : new Web3.PublicKey('4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc'),
            // Public key of the receiver's account
            toPubkey:  new Web3.PublicKey('nSKRaZdZYmnSBRY3vkMULjx5ZQzGqgJaHPFn44E2VNH'),
            // Amount to send, in lamports (1 SOL = 1 billion lamports)
            lamports: 0.01 * LAMPORTS_PER_SOL
        })

        // Add the instruction to the transaction
        transaction.add(sendSolInstruction)

        // Decode the sender's private key from base58
        const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
        // Create a keypair from the private key
        const keyPairFromSecret = Web3.Keypair.fromSecretKey(base58DecodedPK)

        // Connect to the Solana devnet
        const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))    

        // Send the transaction and wait for confirmation
        const txHash = await sendAndConfirmTransaction(connection, transaction, [keyPairFromSecret]);
        // Log the transaction hash
        console.log('Transaction successful. Hash:', txHash)
    } catch (error) {
        // Log any errors
        console.error('Error sending transaction:', error);
    }
}

// Run the main function
main()