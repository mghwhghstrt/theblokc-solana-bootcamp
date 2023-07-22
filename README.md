# theblokc-solana-bootcamp

I built a MWE of a webapp that takes a text input from a user then saves it into a data account on the Solana blockchain (provided that the user signs in using PhantomWallet).

video of working code: https://youtu.be/qmULyUD0qyQ

deployed webapp: https://soldevbootcamp.vercel.app/

Rust code for deployed Solana program in '/programs/src/lib.rs'

Frontend code in '/app/src'

TO-DO:
- optimize code to minimize the transaction fees (dynamically allocate space for text_account data based on submitted text from frontend
- integrate other wallet sign-ins
- make the frontend more eye-friendly
- code to remove the prefix hex code that is added to the string saved to the blockchain
- add code to display Solana PubKey's other saved data that used the same Solana prgram

MY RESOURCES:
- for deploying on vercel: https://blog.logrocket.com/deploy-react-app-for-free-using-vercel/
- for making a blog dapp: https://learn.figment.io/tutorials/build-a-blog-dapp-using-anchor
- making a simple dapp to save to the blockchain: https://dev.to/edge-and-node/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291
- making a Solana program for a Twitter clone: https://lorisleiva.com/create-a-solana-dapp-from-scratch
- making a Solana program for a todo list: https://imfeld.dev/writing/starting_with_solana_part04
- another dapp to save meesages to the blockchain: https://medium.com/makedeveasy/build-solana-dapps-with-anchor-rust-react-simple-way-5d2e018b0cab
- pre-anchor Rust code for a message feed https://github.com/solana-labs/example-messagefeed#message-feed
- anchor documentation https://www.anchor-lang.com/docs/intro-to-solana
- rust guessing game tutorial https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html
- solana documentation https://docs.solana.com/cli/transfer-tokens
- metaplex documentation https://docs.metaplex.com/programs/
