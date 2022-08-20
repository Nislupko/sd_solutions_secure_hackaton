import Web3 from 'web3/dist/web3.min.js';
import {useEffect, useState} from "react";
import {CONTACT_ABI, CONTACT_ADDRESS} from "../../contracts/const";
import {useParents} from './assignedParents/hooks/useParents';

export const ChildPage = () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const { parents = [], loadParents, isLoading, setParent } = useParents();
    const [parentId, setParentId] = useState();
    const [account, setAccount] = useState();
    const [contractList, setContractList] = useState();

    useEffect(() => {
        const load = async () => {
            await loadParents();
            const [childAccount] = await web3.eth.requestAccounts();
            setAccount(childAccount);
            const contract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
            setContractList(contract.methods);
            // const isRegistered = await contract.methods.isRegistered().call();
            // console.log("[IS REGISTERED 1]", isRegistered);
            // const device = await contract.methods.addDevice().send({from: account});
            // console.log("NEW DEVICE", device);
            // const isRegistered2 = await contract.methods.isRegistered().call();
            // console.log("[IS REGISTERED 2]", isRegistered2);
            // const spectator = await contract.methods.getSpectator().call();
            // console.log('[SPEC]', spectator)
            // const counter = await contractList.methods.addDevice().call();
            // console.log('HERE', counter)
            // for await (const i of counter) {
            //     const contract = await contractList.methods.contracts(i).call();
            //     setContracts((contacts) => [...contacts, contract]);
            // }
        }
       load();
    }, [])

    const onSave = () => !!parentId && setParent(parentId);

    return (
      <div style={{padding: '1rem'}}>
        <h2>Child page</h2>
          <div className={'content'}>
            {!isLoading && (parents.length > 0
              ? <ul> {parents.map(parent => <li key={parent}>{parent}</li>)} </ul>
              : <div>
                 <input
                   style={{width: "calc(100% - 2.5rem)", marginBottom: '1rem'}}
                   onInput={event => setParentId(event.target.value)}
                   placeholder={"Add parent ids here"}
                 />
                </div>)
            }
        <button onClick={onSave}>Set parent</button>
      </div>
    </div>
  );
};
