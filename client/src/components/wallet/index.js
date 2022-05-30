import React from 'react'

//import Web3 from 'web3/dist/web3.min.js'
// Using the IPC provider in node.js
//import net from 'net';
/*// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
//var eth = new Eth(Eth.givenProvider || 'ws://alfajores-forno.celo-testnet.org');
var web3 = new Web3('http://alfajores-forno.celo-testnet.org');
// or
var web3 = new Web3(new Web3.providers.HttpProvider('http://alfajores-forno.celo-testnet.org'));

// change provider
web3.setProvider('ws://alfajores-forno.celo-testnet.org');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://alfajores-forno.celo-testnet.org:8546'));

var web3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os path
// or
var web3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', net)); // mac os path
// on windows the path is: "\\\\.\\pipe\\geth.ipc"
// on linux the path is: "/users/myuser/.ethereum/geth.ipc"

*/
import Web3 from "web3/dist/web3.min.js";
import { CeloProvider, CeloWallet } from "@celo-tools/celo-ethers-wrapper";
import { ethers } from "ethers";



const Wallet = () => {
    const pk=ethers.Wallet.createRandom()
    // Connecting to Alfajores testnet
    const provider = new CeloProvider("https://alfajores-forno.celo-testnet.org");
    const wallet = new CeloWallet(pk, provider);
    console.log(wallet["address"])
    console.log(wallet)
    const wb=0;
    const userName="John Mayer";
    async function test(){
        await provider.ready.then(r => console.log(r));
        await wallet.getBalance().then(r => function(){ wb=parseInt(r["_hex"])});
    }
    
    async function initiateTransaction(recipient,amountInWei){
        const txResponse = await wallet.sendTransaction({
            to: recipient,
            value: amountInWei,
          });
          const txReceipt = await txResponse.wait();
          console.info(`CELO transaction hash received: ${txReceipt.transactionHash}`);
    
    }    
    const n=test()
    const walletAddr = wallet["address"]
    const doTxn =initiateTransaction("0x29E62079eD08382C5a0904CC3a12B7047c94b85e",20);
    const transaction = ["#121213122", "#1212131343", "#13231321212"];
    const username = ["0.00036 ETH", "0.000000025 ETH", "0.0000027 ETH"];
    function sayHello(e) {
        alert('Transaction Saved!');
        e.target.setAttribute('fill',"black")
      }

   
  return (
    <div>
       <div className="py-10 h-screen px-2">
            <div className="max-w-xl mx-auto  bg-gradient-to-tr from-red-500 to-red-100 rounded-lg overflow-hidden md:max-w-xl">
                <div className="md:flex">
                    <div className="w-full p-4">

                         <div className="flex justify-between items-center text-white">

                          <span className="text-3xl font-bold">{wb}<small className="text-sm font-light">ETH</small></span>
                          <i className="fa fa-chevron-circle-up fa-2x text-gray-300"></i>
                           
                         </div> 



                         <div className="flex justify-between items-center mt-10">

                          <div className="flex flex-row">
                              {walletAddr}
                          </div>

                          <div className="flex flex-row">
                          </div>
                           
                         </div>


                         <div className="mt-8 flex justify-between items-center text-white">

                          <div className="flex flex-col">
                            <span className="font-bold text-gray-300 text-sm">Name</span>
                            <span className="font-bold">{userName}</span>
                            
                          </div>


                          <div className="flex flex-col">
                            <span className="font-bold text-gray-300 text-sm"></span>
                            <span className="font-bold">01/21</span>
                            
                          </div>
                           
                         </div>



                    </div>
                    <a href="#recent" class="hover:bg-black hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>HISTORY</span>
</a>
                </div>
                
            </div>


        </div>
        {/* --- Card Ends ---- */}
        <h4 id="recent" className='text-xxl font-medium heading-5 text-gray-800'>Recent Transactions</h4>
        <div className="py-8 w-full">
            <div className="lg:flex items-center justify-center w-full">
            
      
                <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                {transaction.map((id,index) =>
                    <div className="flex items-center border-b border-gray-200 pb-6">
                        <img src="https://cdn.statically.io/img/cryptologos.cc/logos/ethereum-eth-logo.png?v=022" alt className="w-12 h-12 rounded-full" />
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-gray-800">{id}</p>
                                <p className="text-sm leading-normal pt-2 text-gray-500">{username[index]}</p>
                            </div>
                            <a onClick={(event) => sayHello(event)} id='1'>
                            <svg width={28} id='svg' height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </a>
                        </div>
                    </div>
                    )}
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600">For any discrepancies contact us at support@email.com</p>
                     
                    </div>
                </div>
               
            </div>
        </div>

    </div>
    

  )
}

export default Wallet;