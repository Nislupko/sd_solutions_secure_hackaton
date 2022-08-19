import {useEffect} from "react";
import {useParents} from "./assignedParents/hooks/useParents";

export const ChildPage = () => {
    const { parents = [], loadParents, isLoading } = useParents();

    useEffect(() => {
       loadParents();
    }, [])


    return (<div>
            <h2>Child page</h2>
            <div className={'content'}>
                {!isLoading && (parents.length > 0
                    ? <ul> {parents.map(parent => <li key={parent}>{parent}</li>)} </ul>
                    : <div>
                        <input
                            style={{width: "calc(100% - 2.5rem)", margin: '1rem'}}
                            onInput={x => console.log(x)}
                            placeholder={"Add parent ids here"}
                        />
                    </div>)
                }
            </div>
    </div>
   );
 }