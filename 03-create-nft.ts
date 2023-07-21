import { createMetaplexInstance } from './metaplex'

async function main(){

    const metaplex = createMetaplexInstance()
    const metadataUri = 'https://arweave.net/KeJngx2vWtL2OlQ8GhVu2_vOpUpN0LG5L_1L89rmD2E'
    const { nft } = await metaplex.nfts().create({
        uri: metadataUri,
        name: 'SolDevBootcamp',
        sellerFeeBasisPoints: 0
    })
    console.log('nft',nft)


}

main()


// nft {
//     model: 'nft',
//     updateAuthorityAddress: PublicKey [PublicKey(4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc)] {
//       _bn: <BN: 36d50485c847ed802d6d2d69aef39bbfebae589174583844b21af28779279221>
//     },
//     json: {
//       name: 'whitecat of dietdiava matimtiman',
//       description: 'my first sol nft',
//       image: 'https://arweave.net/PD8HxQTcDElV97Kt2eU4vx0c1uF1rtmB0ziSB3xYfcU',
//       attributes: [ [Object], [Object] ]
//     },
//     jsonLoaded: true,
//     name: 'SolDevBootcamp',
//     symbol: '',
//     uri: 'https://arweave.net/KeJngx2vWtL2OlQ8GhVu2_vOpUpN0LG5L_1L89rmD2E',
//     isMutable: true,
//     primarySaleHappened: false,
//     sellerFeeBasisPoints: 0,
//     editionNonce: 255,
//     creators: [
//       {
//         address: [PublicKey [PublicKey(4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc)]],
//         verified: true,
//         share: 100
//       }
//     ],
//     tokenStandard: 0,
//     collection: null,
//     collectionDetails: null,
//     uses: null,
//     programmableConfig: null,
//     address: PublicKey [PublicKey(5khDhHaBMZ2Tvb55cB6wj4ZSVGTc1FofsUutr1EJs7KM)] {
//       _bn: <BN: 46a032b7f227265d0e9dfafa302aa79260edf2a6c04bbf87b5bfba03d3bb9f80>
//     },
//     metadataAddress: Pda [PublicKey(YFcA9EzUz5X5oU9F1xa3deYDEAv8kV3QedSqn9Vdawc)] {
//       _bn: <BN: 801853411b1c3b145bc198aa2d6c2658cbdda80ec343a9e2093ea8f7fad44a3>,
//       bump: 255
//     },
//     mint: {
//       model: 'mint',
//       address: PublicKey [PublicKey(5khDhHaBMZ2Tvb55cB6wj4ZSVGTc1FofsUutr1EJs7KM)] {
//         _bn: <BN: 46a032b7f227265d0e9dfafa302aa79260edf2a6c04bbf87b5bfba03d3bb9f80>
//       },
//       mintAuthorityAddress: PublicKey [PublicKey(HKSZGK8Y2o6t6exkiujXMJUQKJSiJiMCC9tUYbQVJpjJ)] {
//         _bn: <BN: f274578a96619c4d6c3836d072c91180b292fd187a219fd78f2cee2678aa99f9>
//       },
//       freezeAuthorityAddress: PublicKey [PublicKey(HKSZGK8Y2o6t6exkiujXMJUQKJSiJiMCC9tUYbQVJpjJ)] {
//         _bn: <BN: f274578a96619c4d6c3836d072c91180b292fd187a219fd78f2cee2678aa99f9>
//       },
//       decimals: 0,
//       supply: { basisPoints: <BN: 1>, currency: [Object] },
//       isWrappedSol: false,
//       currency: { symbol: 'Token', decimals: 0, namespace: 'spl-token' }
//     },
//     token: {
//       model: 'token',
//       address: Pda [PublicKey(GCddjngMaue8gT1HEXE6K4BV1yK82xuxVGFmRL6N9N7f)] {
//         _bn: <BN: e1da1d443f36a7228931d0cfbce823a788ec06d4d7920e9ecea38629d4b77be6>,
//         bump: 253
//       },
//       isAssociatedToken: true,
//       mintAddress: PublicKey [PublicKey(5khDhHaBMZ2Tvb55cB6wj4ZSVGTc1FofsUutr1EJs7KM)] {
//         _bn: <BN: 46a032b7f227265d0e9dfafa302aa79260edf2a6c04bbf87b5bfba03d3bb9f80>
//       },
//       ownerAddress: PublicKey [PublicKey(4h3QkqaXBgW98UU9pEK2g7aEpknjJSkj12ANJ3yHizWc)] {
//         _bn: <BN: 36d50485c847ed802d6d2d69aef39bbfebae589174583844b21af28779279221>
//       },
//       amount: { basisPoints: <BN: 1>, currency: [Object] },
//       closeAuthorityAddress: null,
//       delegateAddress: null,
//       delegateAmount: { basisPoints: <BN: 0>, currency: [Object] },
//       state: 1
//     },
//     edition: {
//       model: 'nftEdition',
//       isOriginal: true,
//       address: Pda [PublicKey(HKSZGK8Y2o6t6exkiujXMJUQKJSiJiMCC9tUYbQVJpjJ)] {
//         _bn: <BN: f274578a96619c4d6c3836d072c91180b292fd187a219fd78f2cee2678aa99f9>,
//         bump: 255
//       },
//       supply: <BN: 0>,
//       maxSupply: <BN: 0>
//     }
//   }