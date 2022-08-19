import {useEffect} from "react";
import {useParents} from "./hooks/useParents";

export const Parents = () => {
    const { parents = [], loadParents, isLoading } = useParents();

    useEffect(() => {
       loadParents();
    }, [])

    useEffect(() => {
        console.log("PARENTS", parents);
    });

    return (!isLoading && (
        parents.length > 0
            ? <ul> {parents.map(parent => <li>{parent}</li>)} </ul>
            : <input onInput={x => console.log(x)}/>
    ));
 }