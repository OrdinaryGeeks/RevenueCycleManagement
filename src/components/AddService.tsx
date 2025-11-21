import { Button, Select, MenuItem } from "@mui/material";
import type Service from "../classes/Service";
import type MedicalProfessional from "../classes/MedicalProfessional";

import { useState } from "react";

interface AddServiceProps{

    billId: number;
    services: Service[];
    medicalProfessionals: MedicalProfessional[];
    onAddService: (serviceName: string, medicalProfessionalName: string) => void;
}

export default function AddService (props: AddServiceProps) {



    const [selectedMedicalProfessional, setSelectedMedicalProfessional] = useState<string>("");
    const [selectedService, setSelectedService] = useState<string>("");

    const AddServiceToBill = () => {

        props.onAddService(selectedService, selectedMedicalProfessional)
    }


        const setMedicalProfessional = (event: any) => {
            setSelectedMedicalProfessional(event.target.value);
        }
        const setService = (event: any) => {
            
            setSelectedService(event.target.value);
        }

    return(

        <div>

            <Select value={selectedService} onChange={setService}>
                {props.services.map((service) => (
                    <MenuItem key={service.serviceId} value={service.serviceName}>{service.serviceName}</MenuItem>
                ))}
            </Select>
            <Select value={selectedMedicalProfessional} onChange={(event) => setMedicalProfessional(event)}>
                {props.medicalProfessionals.map((mp) => (
                    <MenuItem key={mp.medicalProfessionalId} value={mp.firstName + " " + mp.lastName}>{mp.firstName + " " + mp.lastName}</MenuItem>
                ))}

            </Select>
            <Button variant="contained" color="primary" onClick={AddServiceToBill}>Add Service By Professional</Button>
        </div>

    )

}
