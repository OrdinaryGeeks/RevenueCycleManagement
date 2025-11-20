


export default interface Payment{


paymentId : number;
originatorType: number; //0 - insurance, 1- patient, 2 - other
originatorId : number; 
amount: number;
date: Date;
serviceId: number;
patientId : number;


}