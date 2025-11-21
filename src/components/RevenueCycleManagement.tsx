
//import type Hospital from "../classes/Hospital"
import type Patient from "../classes/Patient"
//import type Employer from "../classes/Employer"
import type Insurance from "../classes/Insurance"
import type MedicalProfessional from "../classes/MedicalProfessional"
import type Service from "../classes/Service"
import type Bill from "../classes/Bill"
import type Payment from "../classes/Payment"
import { useCallback, useEffect, useMemo, useState } from "react"
import DisplayPatient from "./DisplayPatient"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
//import { LineChart } from "@mui/x-charts"
import dayjs from "dayjs"
import type { Dayjs } from 'dayjs'
import DisplayBill from "./DisplayBill"
import AddService from "./AddService"
import DisplayService from "./DisplayService"
import DisplayPayment from "./DisplayPayment"

 const RevenueCycleManagement : React.FC= () => {

    const [currentPatientId, setCurrentPatientId] = useState(0);
    const [currentBillId, setCurrentBillId] = useState(0);
    //const [currentServiceId, setCurrentServiceId] = useState(0);
    const [amountToPay, setAmountToPay] = useState(0);

    const [firstNameToSearch, setFirstNameToSearch] = useState("");
    const [lastNameToSearch, setLastNameToSearch] = useState("");

    const [patientsToDisplay, setPatientsToDisplay] = useState<Patient[]>([]);

    const [showDatePicker, setShowDatePicker] = useState(false);
    
    const [paymentDate, setPaymentDate] = useState<Date | null>(null);

    const handleChange = (newValue: Dayjs | null) => {
        alert(newValue?.toString());
        setPaymentDate(newValue ? newValue.toDate() : null);
    }
    let Patient2: Patient = {
        patientId: 2,
        firstName: 'Corey',
        lastName: 'Tate',
        city: 'Southaven',
        state: 'MS',
        zip: '38105',
        streetAddress: '7540 SouthPark Ave'
    }

    let Patient : Patient = {

        patientId : 1,
        firstName : 'Nathaniel',
        lastName : 'Stokes',
        city: 'Horn Lake',
        state: 'MS',
        zip: '38103',
        streetAddress : '7141 Dunbarton Drive'
         
    }

    //const [currentInsuranceId, setCurrentInsuranceId] = useState(0);
   
   /* let Hospital : Hospital ={
        hospitalId : 1,
        streetAddress : '130 Park Street',
        city: 'Memphis',
        state: 'TN',
        zip: "38130"    


    }*/

    
    const GetFullNameOfPatient= (patientId :number) =>{

       let patient =  patients.find(patient => patient.patientId == patientId);
       return patient?.firstName + " " + patient?.lastName;
    }

    const GetPatientById = (patientId : number) => {

        return patients.find(patient => patient.patientId == patientId);
    }
   /* let Employer : Employer = {
        employerId : 1,
        streetAddress : '103 Boca Raton',
        city : 'Miami',
        state: 'FL',
        zip: '12121'
    }*/


       





        
    let Insurance2 : Insurance = {

        insuranceName  :"Aflac",
        insuranceId : 2,
        patientId: 2,
        xRayBiLine: 50,


mriBiLine: 50,
diagnosis: 100,
surgery: 50,
medicine: 50,
deductible: 2500,
treatment: 75

    }
    let Insurance : Insurance = {

        insuranceName : "Geico",
         insuranceId : 1,
         patientId: 1,
         xRayBiLine: 80,

mriBiLine: 75,
diagnosis: 100,
surgery: 75,
medicine: 90,
deductible: 500,
treatment: 90


    }

    //let insurances = [Insurance, Insurance2];

    let MedicalProfessional: MedicalProfessional = {

        
    medicalProfessionalId: 1,
    patientId : 1,
firstName: 'Achin',
lastName: 'Sharma'

    }

    let MedicalProfessional2 : MedicalProfessional =
    {
         medicalProfessionalId: 2,
    patientId : 1,
firstName: 'India',
lastName: 'Arie'
    }


    let Bill: Bill = {

         billId : 1,
         hospitalId : 1,
         patientId : 1,
         aggregatedCost : 0, 
         date: new Date(Date.now())
    }

    let Bill2: Bill = {

        billId : 2,
        hospitalId: 1,
        patientId: 2,
        aggregatedCost : 0,
        date: new Date(Date.now())
    }

    let Service1 : Service = {

         serviceId : 1,
         patientId: 1,
         medicalProfessionalId : 1,
         serviceType: 'diagnosis',
         serviceName: "Consult",
         serviceCost: 800,
         billId: 1,
         date: new Date(Date.now())
    }

    let Service2 : Service = {
   serviceId : 2,
         patientId: 1,
         medicalProfessionalId : 2,
         serviceType: "treatment",
         serviceName: "Music Therapy",
         serviceCost: 3000,
         billId: 1,
         date: new Date(Date.now())

    }
     let Service3 : Service = {

         serviceId : 3,
         patientId: 2,
         medicalProfessionalId : 1,
         serviceType: 'diagnosis',
         serviceName: "Consult",
         serviceCost: 800,
         billId: 2,
         date: new Date(Date.now())
    }

    let Service4 : Service = {
   serviceId : 4,
         patientId: 2,
         medicalProfessionalId : 2,
         serviceType: "treatment",
         serviceName: "Music Therapy",
         serviceCost: 3000,
         billId: 2,
         date: new Date(Date.now())

    }


    const [services, setServices] = useState<Service[]>([]);
    const [bills, setBills] = useState<Bill[]>([]);
    const [patients, setPatients] = useState<Patient[]>([]);
    const [insurances, setInsurances] = useState<Insurance[]>([]);
    const [medicalProfessionals, setMedicalProfessionals] = useState<MedicalProfessional[]>([]);
    useEffect(() => {
 setServices([Service1, Service2, Service3, Service4]);
 
     setBills([Bill, Bill2]);
     setPatients([Patient, Patient2]);
   
     setInsurances([Insurance, Insurance2]);
     setMedicalProfessionals([MedicalProfessional, MedicalProfessional2]);
    },[]);
    useEffect(() => {
    
        let filteredPatients = patients.filter((patient) => 
            patient.firstName.toLowerCase().includes(firstNameToSearch.toLowerCase()) &&
            patient.lastName.toLowerCase().includes(lastNameToSearch.toLowerCase())
        );

        setPatientsToDisplay(filteredPatients);
    }, [firstNameToSearch, lastNameToSearch]);
       

        
    //setPatientsToDisplay(filteredPatients);
    
    const [payments, setPayments] =useState< Payment[]>([]);
    

    const ProcessInsurancePayment = (serviceId:number, type:string)=>{


    
      let currentService =  services.find((service) => service.serviceId == serviceId);
      let currentInsurance = insurances.find((insurance) => insurance.patientId == currentPatientId);

      let currentPayment :Payment={ patientId: currentService?.patientId || 0, amount:0,  paymentId:0, originatorType:1, originatorId:currentInsurance?.insuranceId || 0,date: paymentDate || new Date(Date.now()), serviceId:serviceId};

      
     console.log(currentService);
     console.log(currentInsurance);
     
      if(currentInsurance)
      {
      if(type == "Full owed by payer")
     {
        switch (currentService?.serviceType){

        case 'diagnosis':
            currentPayment.amount = currentService.serviceCost * currentInsurance?.diagnosis/100.0;
            break;
        case 'treatment':
            currentPayment.amount = currentService.serviceCost * currentInsurance.treatment/100.0;
            break;
        

        }
     }
     else
        currentPayment.amount = amountToPay;
    }
  
setPayments(c => [...c, currentPayment]);


        


    }

    
    const onAddService= (serviceName: string, medicalProfessionalName: string)  => {

        let medicalProfessional = medicalProfessionals.find((mp) => (mp.firstName + " " + mp.lastName) == medicalProfessionalName);
        let service = services.find((s) => s.serviceName == serviceName);

            
        setServices(c => [...c, { serviceId: service?.serviceId || 0, medicalProfessionalId: medicalProfessional?.medicalProfessionalId || 0, patientId: currentPatientId, serviceName: serviceName, serviceCost: service?.serviceCost || 0, billId: currentBillId, date: paymentDate || new Date(Date.now()), serviceType: service?.serviceType || ""}]);


    }
    const ProcessPatientPayment = (serviceId:number, type:string) => {

  let currentService =  services.find((service) => service.serviceId == serviceId);
      let currentInsurance = insurances.find((insurance) => insurance.patientId == currentPatientId);

      let currentPayment :Payment={ patientId : currentService?.patientId || 0,amount:0,  paymentId:0, originatorType:2, originatorId:currentPatientId || 0, date: paymentDate || new Date(Date.now()), serviceId:serviceId};

      
     console.log(currentService);
     console.log(currentInsurance);
     
      if(currentInsurance)
      {
      if(type == "Full owed by payer")
     {
        switch (currentService?.serviceType){

        case 'diagnosis':
            currentPayment.amount = currentService.serviceCost * (100 - currentInsurance?.diagnosis)/100.0;
            break;
        case 'treatment':
            currentPayment.amount = currentService.serviceCost * (100 - currentInsurance.treatment)/100.0;
            break;
        

        }
     }
     else
        currentPayment.amount = amountToPay;
    }
  
setPayments(c => [...c, currentPayment]);


        


    }
    const AcceptPayment= (billId: number, serviceId: number) => {

        if(payerSelected == "Patient")
        {
            if(paymentSelected=="Full owed by payer")
            {
                
          //  let currentBill = bills.find((bill) => bill.billId);

            services.filter((service) => service.billId == billId && service.serviceId == serviceId)
            {
                ProcessPatientPayment(serviceId, "Full owed by payer");
            }

            }
            if(paymentSelected =="Partial owed by payer")
            {
                ProcessPatientPayment(serviceId, "Partial owed by payer");
            }

        }
        if(payerSelected == "Insurance")
        {
            if(paymentSelected=="Full owed by payer")
            {
                
          //  let currentBill = bills.find((bill) => bill.billId);

            services.filter((service) => service.billId == billId && service.serviceId == serviceId)
            {
                ProcessInsurancePayment(serviceId, "Full owed by payer");
            }

            }
            if(paymentSelected =="Partial owed by payer")
            {
                ProcessInsurancePayment(serviceId, "Partial owed by payer");
            }

        }



    }


    const [payerSelected, setPayerSelected] = useState<string>("Insurance");
    const [paymentSelected, setPaymentSelected] = useState<string>("Full owed by payer");

     let totalCost = useMemo(() =>
        services.filter((service) => service.patientId == currentPatientId).reduce((accumulator, currentValue) => accumulator +  currentValue.serviceCost, 0)
    , [services, currentPatientId])

    let totalPayments = useMemo(() => 
        payments.filter((payment)=> payment.patientId == currentPatientId).reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0),
     [payments, currentPatientId]
    )

       
     let handleClick = useCallback((patientId : number) => {setCurrentPatientId(patientId)}, [currentPatientId]);
     

          const changeSelectPayer = (event: React.FormEvent<HTMLSelectElement>) => {

        setPayerSelected(event.currentTarget.value);

     }
    
     const changeSelectPayment = (event: React.FormEvent<HTMLSelectElement>) => {

        setPaymentSelected(event.currentTarget.value);

     }


    return (


        <>
        <div>
            Welcome to Nates Revenue Cycle Management
        </div>
        
      <input onChange={(e) => setFirstNameToSearch(e.currentTarget.value)} />
      <input onChange={(e) => setLastNameToSearch(e.currentTarget.value)} />
        <div>
        Look Up Bills By Patient Name

        </div>


       {  patientsToDisplay.map((patient) => (


           <DisplayPatient patientId={patient.patientId} handleClick={() =>handleClick(patient.patientId)} getPatientById={() =>GetPatientById(patient.patientId)}/>
        ))
    }
 
        
        <div>Services for {GetFullNameOfPatient(currentPatientId)}</div>
        
        
        {totalCost > 0 && (<><div>{totalCost} {" bill total"}</div><div>
            {totalCost - totalPayments} owed</div></>)}


    
         {
    bills.filter(
        (bill) => bill.patientId == currentPatientId)

 .map((bill) => (

    <DisplayBill bill={bill} handleClick={()=> setCurrentBillId(bill.billId)}/>
 ))
}
{
         
 bills.filter((bill) => bill.billId == currentBillId).map((bill) => (
         services.filter((service) => service.billId == bill.billId).map((service) => (
          
            service.patientId == currentPatientId &&
                  <>

                  <DisplayService service={service} />
     

          {payments.filter((payment) => payment.serviceId === service.serviceId).map((payment) => (


<>
{payment.serviceId}{" "}{service.serviceId}

{payment.originatorType== 2 && <DisplayPayment payment={payment} payerName={GetFullNameOfPatient(patients.filter((patient) => patient.patientId == payment.originatorId)[0].patientId)} />}
    {payment.originatorType== 1 && <DisplayPayment payment={payment} payerName={(insurances.filter((insurance) => insurance.insuranceId == payment.originatorId)[0].insuranceName)} />}
</>
            ))}

<button onClick={() => setShowDatePicker(!showDatePicker)}>Select Payment Date</button>

<button onClick={() =>AcceptPayment(bill.billId, service.serviceId)}>Accept Payment</button>
          <select onChange={(event) => changeSelectPayer(event)}>
            <option>Insurance</option>
            <option>Patient</option>
            <option>Other</option>
          </select>
          
            <select onChange={(event)=>changeSelectPayment(event)}>
                <option>
                    Full owed by payer
                </option>
                <option>Partial owed by payer</option>
                <option>Other</option>
            </select>
            {paymentSelected != "Full owed by payer" && <input type="number" onChange={(e) => setAmountToPay(Number.parseFloat(e.currentTarget.value))}></input>}
            </>
         
        ))
    )
        
        
   )
   

     
    
     
 }
{showDatePicker && <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateCalendar sx={{ backgroundColor: 'gray' }} value={paymentDate ? dayjs(paymentDate) : null} onChange={handleChange} />
</LocalizationProvider>}

<AddService billId={currentBillId} services={[Service1, Service2]} medicalProfessionals={medicalProfessionals} onAddService={onAddService}/>

    

{/*
<LineChart
  series={[
    { data: pData, label: 'pv', yAxisId: 'leftAxisId' },
    { data: uData, label: 'uv', yAxisId: 'rightAxisId' },
  ]}
  xAxis={[{ scaleType: 'point', data: xLabels }]}
  yAxis={[
    { id: 'leftAxisId', width: 50 },
    { id: 'rightAxisId', position: 'right' },
  ]}
/>
*/}

    </>
    )
}
    
       



export default RevenueCycleManagement;