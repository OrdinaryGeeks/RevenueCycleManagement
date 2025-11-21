import { Card, Typography } from "@mui/material";
import type Bill from "../classes/Bill";


interface DisplayBillProps {
  bill: Bill;
  handleClick: () => void;
  totalCost: number;
    totalPayments: number;
}

export default function DisplayBill(props: DisplayBillProps) {
 
    

    return(
        <Card sx={{backgroundColor: 'lightblue', padding: '10px', marginBottom: '20px'}}>
        <Typography variant="h5">Bill Overview (Click to see Payments and Services for Bill)</Typography>
      <div onClick={props.handleClick}>
                
                <Typography variant="h6">Bill Id : {props.bill.billId}</Typography>
                <Typography variant="h6">Date: {props.bill.date.toDateString()} </Typography>

                 {props.totalCost > 0 && (<><Typography variant="h6">{props.totalCost} {" bill total"}</Typography><Typography variant="h6">{props.totalCost - props.totalPayments} owed</Typography></>)}
                </div>
                </Card>
    )
     
} 