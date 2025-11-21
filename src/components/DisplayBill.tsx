import type Bill from "../classes/Bill";


interface DisplayBillProps {
  bill: Bill;
  handleClick: () => void;
}

export default function DisplayBill(props: DisplayBillProps) {
 
    

    return(
      <div onClick={props.handleClick}>
                <div>{props.bill.patientId}</div>
                <div>{props.bill.billId} is billId</div>
                <div>{props.bill.date.toDateString()} is the date the bill was created</div>
                </div>
    )
     
} 