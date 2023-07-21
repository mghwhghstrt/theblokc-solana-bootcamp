import * as Web3 from '@solana/web3.js'

const publicKey = new Web3.PublicKey('4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc');

async function main() {
    //console.log('devnet url', Web3.clusterApiUrl('devnet'))
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))    

    const balance = await connection.getBalance(publicKey)
    console.log('balance',balance)

    const accountInfo = connection.getAccountInfo(publicKey)
    console.log('accountInfo',accountInfo)
}

main()