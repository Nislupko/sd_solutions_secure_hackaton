import {useEffect, useState} from "react";
import {useParents} from './assignedParents/hooks/useParents';

export const ChildPage = () => {
    const { parents = [], loadParents, isLoading, setParent } = useParents();
    const [parentId, setParentId] = useState();
    useEffect(() => {
       loadParents();
    }, [])

    const onSave = () => !!parentId && setParent(parentId);

    return (<div style={{padding: '1rem'}}>
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
 }