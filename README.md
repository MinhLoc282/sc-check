The code is written in motoko and developed in The DFINITY command-line execution [environment](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent), please follow the documentation [here](https://internetcomputer.org/docs/current/developer-docs/setup/install/#installing-the-ic-sdk-1) to setup IC SDK environment and related command-line tools.  

### Release Instructions for Sonic Swap V1  
```bash
  git clone https://github.com/sonicdex/sonic-v1/
  cd sonic-v1
  export NETWORK="local" # replace with ic if you want to deploy to IC mainnet network
  dfx canister --network $NETWORK create swap
  # first argument passed is set used for initializing owner
  # second argument is passed to internal cap library (used when creating cap root canister)
  dfx deploy --network $NETWORK swap --argument="(principal \"$(dfx identity get-principal)\", principal \"$(dfx canister --network $NETWORK id swap)\")"
```
### For create token DIP20  
  Make sure you already run these:
```bash
  dfx start --background
  dfx canister create --all
  dfx build
``` 
Check getCallerPrincipal() in token UI canister to ensure your principal owner
 
Install code for token canister
```bash
  dfx canister install token0 --argument="(\"logoImg\", \"DFinance Coin\", \"DFC\", 8, 10000000000000000, principal \"2vxsx-fae\", 10000)"

  dfx canister install token1 --argument="(\"logoImg\", \"A Coin\", \"AAA\", 8, 10000000000000000, principal \"2vxsx-fae\", 10000)"
``` 

Identity canister
```bash
  dfx deps pull
  dfx deps init --argument '(null)' internet-identity
  dfx deps deploy
``` 

### Verify SNS Upgrade proposal  

All SNS Upgrade proposal will have git `commit-id` and binary build `hash`. Below steps will helps you verify the SNS upgrade proposal.

```bash
git clone https://github.com/sonicdex/sonic-v1/  
git fetch --all
git checkout <commit-id>
cd sonic-v1
dfx build --check swap
# verify the printed hash matches with the SNS upgrade proposal
shasum -a 256 ./.dfx/local/canisters/swap/swap.wasm  | cut -d ' ' -f 1
```
