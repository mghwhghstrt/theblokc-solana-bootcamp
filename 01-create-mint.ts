import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js';
import * as token from '@solana/spl-token' //to create tokens (google keywords: "solana program library" )

// The main function of the program
async function main() {

    // Connect to the Solana devnet
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))    

    // Decode the signer's private key from base58
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    // Create a keypair from the private key
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    
    const tokenMint = await token.createMint(
        connection,
        signer,
        new Web3.PublicKey('4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc'), //minting authority
        new Web3.PublicKey('4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc'), //freezing authority
       9
    );
    
    console.log('tokenMint', tokenMint.toBase58()) //this output will be needed in the second step

}

// Run the main function
main()