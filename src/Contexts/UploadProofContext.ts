
import { createContext, useContext } from "react";

export interface PContext {
    accountHolderproofType : string,
    SetAccountHolderProofType: React.Dispatch<React.SetStateAction<string>>;
    accountHolderproofValue : string,
    SetAccountHolderProofValue: React.Dispatch<React.SetStateAction<string>>;
}
   
 export const ProofContext = createContext<PContext | object>({});

 
//  export const useProofContext = () => {
//      const con = useContext(ProofContext);

//      if(con === undefined){
//         throw new Error("Hello undefined occur")
//      }
//      return con;
//  }