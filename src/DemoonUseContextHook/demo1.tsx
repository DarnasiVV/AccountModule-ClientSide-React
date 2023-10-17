import { useState } from "react";
import { createContext } from "react";
import ChildComponent from "./demo2";
import { Container } from "react-bootstrap";



interface DemoContext {
    demoExample: string,
    setDemoExample: React.Dispatch<React.SetStateAction<string>>;
}

export const DContext = createContext<DemoContext | undefined>(undefined);

export default function ParentComponent() {

    const [demoExample, setDemoExample] = useState<string>('Default Context Value');

    return (<>
        <Container>

            <DContext.Provider value={{ demoExample, setDemoExample }}>

                <ChildComponent />
                {demoExample}

            </DContext.Provider>

        </Container>

    </>)
}

