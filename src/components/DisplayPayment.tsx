import { Card, Typography } from "@mui/material";
import type Payment from "../classes/Payment";

interface DisplayPaymentProps {
    
        payment: Payment;
        payerName: string;
    
}

export default function DisplayPayment(props: DisplayPaymentProps) {


    return (
        <Card sx={{backgroundColor: 'lightgreen', padding: '10px', marginBottom: '10px'}}>
          <Typography variant="h6">{((<>{props.payment.amount}  amount Paid on {props.payment.date.toDateString()} by {props.payerName}</>))}</Typography>
        </Card>
    );
}