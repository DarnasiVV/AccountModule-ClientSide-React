import { createContext } from "react";

interface PContext {
    accountHolderproofType : string,
    SetAccountHolderProofType: React.Dispatch<React.SetStateAction<string>>;
    accountHolderproofValue : string,
    SetAccountHolderProofValue: React.Dispatch<React.SetStateAction<string>>;
}
   
 export const ProofContext = createContext<PContext | undefined>(undefined);