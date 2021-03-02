import React, { useState } from 'react';
// @ts-ignore
import { dispatchCustomEvent, GlobalNotification } from 'slate-react-system';
import { PrivateKey } from '@textile/hub';
import { BigNumber, providers, utils } from 'ethers';
import { hashSync } from 'bcryptjs';
import { Button, Input } from '@material-ui/core';
import "./Login.css";
import fox from "./images/metamask.png"

type WindowInstanceWithEthereum = Window & typeof globalThis & { ethereum?: providers.ExternalProvider };
class StrongType<Definition, Type> {
    // @ts-ignore
    private _type: Definition;
    constructor(public value?: Type) { }
}
export class EthereumAddress extends StrongType<'ethereum_address', string> { }

function Login() {

    const [userSecret, setUserSecret] = useState('');
    const handleChange = (e: any) => setUserSecret(e.target.value);

    const generateMessageForEntropy = (ethereum_address: EthereumAddress, application_name: string, secret: string): string => {
        return (
            '******************************************************************************** \n' +
            'READ THIS MESSAGE CAREFULLY. \n' +
            'DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND WRITE \n' +
            'ACCESS TO THIS APPLICATION. \n' +
            'DO NOT SIGN THIS MESSAGE IF THE FOLLOWING IS NOT TRUE OR YOU DO NOT CONSENT \n' +
            'TO THE CURRENT APPLICATION HAVING ACCESS TO THE FOLLOWING APPLICATION. \n' +
            '******************************************************************************** \n' +
            'The Ethereum address used by this application is: \n' +
            '\n' +
            ethereum_address.value +
            '\n' +
            '\n' +
            '\n' +
            'By signing this message, you authorize the current application to use the \n' +
            'following app associated with the above address: \n' +
            '\n' +
            application_name +
            '\n' +
            '\n' +
            '\n' +
            'The hash of your non-recoverable, private, non-persisted password or secret \n' +
            'phrase is: \n' +
            '\n' +
            secret +
            '\n' +
            '\n' +
            '\n' +
            '******************************************************************************** \n' +
            'ONLY SIGN THIS MESSAGE IF YOU CONSENT TO THE CURRENT PAGE ACCESSING THE KEYS \n' +
            'ASSOCIATED WITH THE ABOVE ADDRESS AND APPLICATION. \n' +
            'AGAIN, DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND \n' +
            'WRITE ACCESS TO THIS APPLICATION. \n' +
            '******************************************************************************** \n'
        );
    }

    const getSigner = async () => {
        if (!(window as WindowInstanceWithEthereum).ethereum) {
            throw new Error(
                'Ethereum is not connected. Please download Metamask from https://metamask.io/download.html'
            );
        }

        console.debug('Initializing web3 provider...');
        // @ts-ignore
        const provider = new providers.Web3Provider((window as WindowInstanceWithEthereum).ethereum);
        const signer = provider.getSigner();
        return signer
    }

    const getAddressAndSigner = async (): Promise<{ address: EthereumAddress, signer: any }> => {
        const signer = await getSigner()
        // @ts-ignore
        const accounts = await (window as WindowInstanceWithEthereum).ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length === 0) {
            throw new Error('No account is provided. Please provide an account to this application.');
        }

        const address = new EthereumAddress(accounts[0]);

        return { address, signer }
    }
    const generatePrivateKey = async (): Promise<PrivateKey> => {
        const metamask = await getAddressAndSigner()
        // avoid sending the raw secret by hashing it first
        const secret = hashSync(userSecret, 10)
        const message = generateMessageForEntropy(metamask.address, 'textile-demo', secret)
        const signedText = await metamask.signer.signMessage(message);
        const hash = utils.keccak256(signedText);
        if (hash === null) {
            throw new Error('No account is provided. Please provide an account to this application.');
        }
        // The following line converts the hash in hex to an array of 32 integers.
        // @ts-ignore
        const array = hash
            // @ts-ignore
            .replace('0x', '')
            // @ts-ignore
            .match(/.{2}/g)
            .map((hexNoPrefix) => BigNumber.from('0x' + hexNoPrefix).toNumber())

        if (array.length !== 32) {
            throw new Error('Hash of signature is not the correct size! Something went wrong!');
        }
        const identity = PrivateKey.fromRawEd25519Seed(Uint8Array.from(array))
        console.log(identity.toString())

        createNotification(identity)

        // Your app can now use this identity for generating a user Mailbox, Threads, Buckets, etc
        console.log(identity);

        return identity
    }

    const createNotification = (identity: PrivateKey) => {
        dispatchCustomEvent({
            name: "create-notification", detail: {
                id: 1,
                description: `PubKey: ${identity.public.toString()}. Your app can now generate and reuse this users PrivateKey for creating user Mailboxes, Threads, and Buckets.`,
                timeout: 5000,
            }
        });
    }
    return (
        <div className="login">

            <div className="container">
                <img src={fox} alt="" />
                <GlobalNotification style={{ bottom: 0, right: 0 }} />
                <div className="login__form">

                    <p>Combine a private secret with Metamask signing to generate ed25519 private key</p>
                    <input
                        name="secret"
                        value={userSecret}
                        placeholder="Secret"
                        type="password"
                        onChange={handleChange}
                    />
                    <Button onClick={generatePrivateKey} >Login with Metamask</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;
