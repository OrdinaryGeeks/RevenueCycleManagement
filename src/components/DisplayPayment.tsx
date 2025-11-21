import type Payment from "../classes/Payment";

interface DisplayPaymentProps {
    
        payment: Payment;
        payerName: string;
    
}

export default function DisplayPayment(props: DisplayPaymentProps) {


    return (
        <div>
          <div>{((<>{props.payment.amount}  amount Paid on {props.payment.date.toDateString()} by {props.payerName}</>))}</div>
        </div>
    );
}