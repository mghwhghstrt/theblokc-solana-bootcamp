import { createMetaplexInstance } from './metaplex' // this imports a function(??) or method(??) from metaplex.ts
import { toMetaplexFile } from '@metaplex-foundation/js'
import fs from 'fs' //this imports a function(??) or method(??) allowing us to deal with the filsystem of the laptop

const buffer = fs.readFileSync(__dirname + "/assets/logo.jpg");
const file = toMetaplexFile(buffer,"image.jpg");

const metaplex = createMetaplexInstance()

async function main(){
    const imageUrl = await metaplex.storage().upload(file)
    console.log ('image Url', imageUrl);
    // image Url https://arweave.net/PD8HxQTcDElV97Kt2eU4vx0c1uF1rtmB0ziSB3xYfcU
    // this was the output after running "npx ts-node 01-upload-asset.ts"

    // so a jpeg was uploaded and the transaction was paid by the private key specified in metaplex.ts
}

main()
//run using ts-node