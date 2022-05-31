import Thoughts from './Thoughts.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { create } from 'domain';

const ContractAbi = Thoughts.abi;
const ContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const Ethereum = typeof window !== 'undefined' && (window as any).ethereum;

const getThoughtsContract = () => {
    const provider = new ethers.providers.Web3Provider(Ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(
        ContractAddress,
        ContractAbi,
        signer
    );
};

type User = {
    avatar : string;
    bio : string;
    name : string;
    username : string;
    wallet : string;
}

const useThoughts = () => {
    // const Thoughts = getThoughtsContract();
    const [currentAccount, setCurrentAccount] = useState<string>('');
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const connect = async () => {
        try{
            if(!Ethereum){
                alert('please install metamask');
                return;
            }
            const accounts = await Ethereum.request({ method: 'eth_requestAccounts' });
                if(accounts.length === 0){
                    console.log('No authorized accounts');
                    return;
                }
                const account = accounts[0]; 
                console.log('Connected to account', account);
                setCurrentAccount(account);

        } catch(e){
            console.error(e);
        }     
    };

    useEffect(() => {
        if(!Ethereum){
            console.log('No ethereum wallets found, please get metamask');
            return;
        }
        connect();
    }, []);   

    useEffect(() => {
        if(currentAccount){
            getUser();
        }        
    },[currentAccount])

    const getUser = async () => {
        const Contract = getThoughtsContract();
        const user = await Contract.getUser(currentAccount);
        const {avatar, bio, name, username, wallet} = user;
        setCurrentUser({avatar, bio, name, username, wallet});
        return user;
    }

    const createUser = async (
        username: string,
        name: string,
        bio: string,
        avatar: string
    ) => {
        const contract = getThoughtsContract();
        const user = await contract.signup(username,name,bio,avatar);
        console.log(user);
    }


    return {connect, account: currentAccount, user: createUser, createUser};
};

export default useThoughts;
