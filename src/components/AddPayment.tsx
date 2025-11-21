import { Card, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useState } from "react";


interface AddPaymentProps{


    AcceptPayment: (billId: number, paymentId: number, payerSelected: string, paymentSelected: string, paymentAmount : number) => void;
   
    billId : number;
    serviceId: number;
    paymentSelected: string;
    payerSelected: string;


}


export default function AddPayment(props:AddPaymentProps) {


const [paymentSelected, setPaymentSelected] = useState<string>("Full owed by payer");
const [payerSelected, setPayerSelected] = useState<string>("Insurance");
const [amount, setAmountToPay] = useState<number>(0);

    const changeSelectPayer = (event: SelectChangeEvent<string>) => {
     const value = event.target.value as string;
     console.log('payer select change', value, event);
     setPayerSelected(value);

      }
    
      const changeSelectPayment = (event: SelectChangeEvent<string>) => {
          const value = event.target.value as string;
          console.log('payment select change', value, event);
          setPaymentSelected(value);

      }




    return (

<Card sx={{backgroundColor: 'yellow', padding: '10px', marginBottom: '10px'}}>
        <button onClick={() =>props.AcceptPayment(props.billId, props.serviceId, payerSelected, paymentSelected, amount)}>Accept Payment</button>
                  <Select value={payerSelected} onChange={changeSelectPayer}>
                    <MenuItem key="Insurance" value="Insurance">Insurance</MenuItem>
                    <MenuItem key="Patient" value="Patient">Patient</MenuItem>
                   
                  </Select>
                  
                    <Select value={paymentSelected} onChange={(event)=>changeSelectPayment(event)}>
                        <MenuItem key="Full owed by payer" value="Full owed by payer">
                            Full owed by payer
                        </MenuItem>
                        <MenuItem key="Partial owed by payer" value="Partial owed by payer">Partial owed by payer</MenuItem>
                       
                    </Select>
                    {paymentSelected != "Full owed by payer" && <input type="number" onChange={(e) => setAmountToPay(Number.parseFloat(e.currentTarget.value))}></input>}

                    </Card>

    )
}