
import { useEffect } from "react";
import type Patient from "../classes/Patient";

type DisplayPatientProps = {
    patientId : number,
    getPatientById: (patientId : number) => Patient | undefined;
    handleClick: (patientid: number) => void;
};

const DisplayPatient: React.FC<DisplayPatientProps> = ({ getPatientById, handleClick, patientId }) => {


    useEffect(()=>{






    }, [])
        const GetFullNameOfPatient= (patientToDisplay:Patient | null) =>{

            if(patientToDisplay)
       return patientToDisplay?.firstName + " " + patientToDisplay?.lastName;
    else
        return "";
    }
    return (

        <div onClick={() => handleClick(getPatientById(patientId)!.patientId)}>

            {GetFullNameOfPatient(getPatientById(patientId) ?? null)}


        </div>

    );

}

export default DisplayPatient;