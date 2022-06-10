import Thoughts from './Thoughts.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { create } from 'domain';

const ContractAbi = Thoughts.abi;
//key of deployed contract should be changed accordingly.
// const ContractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'; //local network key
const ContractAddress = '0xFa936d654fe8C1a89d607a94606E9E7b8114be17';//rinkeby network key
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
type Thought = {
    content: string;
    timestamp: number;
    author: string;
}
const useThoughts = () => {
    
    const [currentAccount, setCurrentAccount] = useState<string>('');
    const [thoughts, setThoughts] = useState<Thought[]>([]);
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
    }, [])   

    useEffect(() => {
        if(currentAccount){
            getUser();
            getThoughts();
        }        
    },[currentAccount])

    const getUser = async () => {
        const Contract = getThoughtsContract();
        const user = await Contract.getUser(currentAccount);
        const {avatar, bio, name, username, wallet} = user;
        setCurrentUser({ username, name, bio, avatar, wallet});
        return user;
    }
    const createUser = async (
        username: string,
        name: string,
        bio: string,
        avatar: string
    ) => {
    const contract = getThoughtsContract();
        try{
            const user = await contract.signup(username,name,bio,avatar);
            //console.log(user);
        }catch(e){
            console.error(e);
        }
            getUser();
    }
    
    const postThought = async (thought: string) => {
        try{
            const contract = getThoughtsContract();
            await contract.postThought(thought);
        }catch(e){
            console.error(e);
        }
        
        await getThoughts();
    };

    const getThoughts = async () => {
        const contract = getThoughtsContract();
        const thoughts = await contract.getThoughts();
        console.log(thoughts);
        setThoughts(thoughts);

    }

    return {connect, account: currentAccount, user: currentUser, createUser, postThought, thoughts};
};

export default useThoughts;