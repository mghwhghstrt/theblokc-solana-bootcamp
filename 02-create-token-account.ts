import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'
import * as token from '@solana/spl-token'

// The main function of the program
async function main() {
    
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))    
  
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    
    const signer = Web3.Keypair.fromSecretKey(base58DecodedPK)
    
    const tokenAccount = await token.createAccount(
        connection,
        signer,
        new Web3.PublicKey('FBFVWyKBdo3VvHpFoC9RbfjRYU2Ya3F5oDFrasXqzrfR'), //output of 01
        new Web3.PublicKey('4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc') //account that will pay for the mint
    );
    
    console.log('tokenAccount', tokenAccount.toBase58())

}

// Run the main function
main()