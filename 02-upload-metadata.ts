import { createMetaplexInstance } from './metaplex'

const metaplex = createMetaplexInstance()

const metadata = {
    name: "whitecat of dietdiava matimtiman",
    description: "my first sol nft",
    image: "https://arweave.net/PD8HxQTcDElV97Kt2eU4vx0c1uF1rtmB0ziSB3xYfcU",
    attributes: [
        {
            trait_type: "Event",
            value: "Solana Developers Bootcamp"
        },
        {
            trait_type: "Rarity",
            value: "mythic rare"
        }
    ]
}


async function main(){
    const { uri } = await metaplex.nfts().uploadMetadata(metadata)
    console.log('metadata uri', uri);
    // output is https://arweave.net/KeJngx2vWtL2OlQ8GhVu2_vOpUpN0LG5L_1L89rmD2E
}

main()
