import Web3 from 'web3/dist/web3.min.js';
import {useEffect, useState, useRef} from "react";
import {CONTACT_ABI, CONTACT_ADDRESS} from "../../contracts/const";
import {useParents} from './assignedParents/hooks/useParents';

export const ChildPage = () => {
    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const { isLoading, setParent } = useParents();
    const [parentId, setParentId] = useState();
    const getParentId = () => parentId;

    const [account, setAccount] = useState();
    const [parents, setParents] = useState([]);
    const [contractList, setContractList] = useState();

    const storeGeo = useRef(null);
    const assignParent = useRef(null);

    const processRegister = async (accounts) => {
        const [childAccount] = accounts;
        setAccount(childAccount);
        const contract = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);
        setContractList(contract.methods);
        console.log('[ACCOUNT]', childAccount)
        const isRegistered = await contract.methods.isRegistered().call({from: childAccount});
        console.log("[IS REGISTERED]", isRegistered);
        if (!isRegistered) {
            const device = await contract.methods.addDevice().send({from: childAccount});
            console.log("[NEW DEVICE]", device);
        }
        const spectators = await contract.methods.getSpectator().call({from: childAccount});
        setParents([spectators]);

        storeGeo.current = async () => {
            const long = String(44.762258 + Math.random() / 300); // ~ SD Solutions office coords
            const lat = String(41.7149921 + Math.random() / 300);
            await contract.methods.storeGeo(+new Date(), long, lat).send({from: childAccount});
            console.log('[GEO SENT]', [long, lat])
        }

        assignParent.current = async () => {
            await contract.methods.setSpectator(parentId).send({from: childAccount});
        }
    }

    useEffect(() => {
        const load = async () => {
            web3.eth.requestAccounts()
                .then(processRegister)
                .catch(err => console.log(err));
        }
       load();
    }, [])

    const onSave = () => !!parentId && assignParent.current();

    return (
      <div style={{padding: '1rem'}}>
        <h2>Child page</h2>
          <div className={'content'}>
              {!isLoading && <p>Assigned parent: {parents[0]}</p>}

              <input
                style={{width: "calc(100% - 2.5rem)", marginBottom: '1rem'}}
                onInput={event => setParentId(event.target.value)}
                placeholder={"Add parent ids here"}
                />
            <button onClick={onSave}>Set parent</button>
            <br/>
            <button style={{marginTop: '1rem'}} onClick={storeGeo.current}>Send sample geo</button>
      </div>
    </div>
  );
};
