// Import the necessary libraries
import 'dotenv/config' // Loads environment variables from a .env file
import * as Web3 from '@solana/web3.js' // Solana JavaScript API
import base58 from 'bs58' // Library to decode base58-encoded private key
import * as token from '@solana/spl-token' // Solana Program Library (SPL) Token JavaScript API
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';

// The main function of the program
async function main() {
    
    // Establish a connection to the Solana devnet
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))    
    
    // Decode the base58-encoded private key from the SOL_PRIVATE_KEY environment variable
    // should be private key of minting authority
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    
    // Create a keypair from the decoded private key
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)

    // Create a public key for the mint from a given string (output of 01-create-mint.ts)
    // also known as the token address
    const mint = new Web3.PublicKey('FBFVWyKBdo3VvHpFoC9RbfjRYU2Ya3F5oDFrasXqzrfR')

    // Create a public key for the token account from a given string (output of 02-create-token-account.ts)
    // think of this as the address of a hodler
    const tokenAccount = new Web3.PublicKey('2BZnPfMiR3gswtf1W8S5aJj8gjs2bmWMScdLc1h5AnjH')

    // Create a public key for the minting authority from a given string
    // public key of the minting authority
    const mintingAuthority= new Web3.PublicKey('4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc')

    // Mint 1 new token to the specified token account
    const tokenMint= await token.mintTo(
        connection,
        signer,
        mint,
        tokenAccount,
        mintingAuthority,
        42*LAMPORTS_PER_SOL
    )     
    
    // Log the result of the minting operation
    console.log('Tokens minted', tokenMint)
}

// Run the main function
main()