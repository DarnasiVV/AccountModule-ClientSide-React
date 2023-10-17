import { useContext, useState } from "react"
import { DContext } from "./demo1"


const ChildComponent = () => {

    const s = useContext(DContext);
    if (s === undefined) {

        return <div>Context is undefined</div>;
    }
    const {demoExample, setDemoExample } = s;
    return (<>
        <div>
            <input
                type="string"
                onChange={(e) => (setDemoExample(e.target.value))}
            >
            </input>
        </div>
    </>)
}
export default ChildComponent;