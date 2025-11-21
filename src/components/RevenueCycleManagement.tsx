
//import type Hospital from "../classes/Hospital"
import type Patient from "../classes/Patient"
//import type Employer from "../classes/Employer"
import type Insurance from "../classes/Insurance"
import type MedicalProfessional from "../classes/MedicalProfessional"
import type Service from "../classes/Service"
import type Bill from "../classes/Bill"
import type Payment from "../classes/Payment"
import { useEffect, useMemo, useState } from "react"
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
import { LineChart } from "@mui/x-charts"
import { Button, Card, MenuItem, Select, TextField, Typography } from "@mui/material"
import AddPayment from "./AddPayment"

interface PaymentOrServiceByDate{
    date: Date;
    amount?: number;
}

const RevenueCycleManagement: React.FC = () => {
    //const [currentServiceId, setCurrentServiceId] = useState(0);
  
    const [currentPatientId, setCurrentPatientId] = useState(0);
    const [currentBillId, setCurrentBillId] = useState(0);

    const [firstNameToSearch, setFirstNameToSearch] = useState("");
    const [lastNameToSearch, setLastNameToSearch] = useState("");

    const [patientsToDisplay, setPatientsToDisplay] = useState<Patient[]>([]);

    const [showDatePicker, setShowDatePicker] = useState(false);
    
    const [paymentDate, setPaymentDate] = useState<Date | null>(null);

    
    const [serviceOrPaymentByDate, setServiceOrPaymentByDate] = useState<{date: Date; amount?: number;}[]>([]);
    // chartStartDate and chartDaysSpan removed (not read); chartXLabels/chartSeriesData used instead
    const [chartYMin, setChartYMin] = useState<number | undefined>(undefined);
    const [chartYMax, setChartYMax] = useState<number | undefined>(undefined);
    const [chartXLabels, setChartXLabels] = useState<string[]>([]);
    const [chartSeriesData, setChartSeriesData] = useState<number[]>([]);
    const handleChange = (newValue: Dayjs | null) => {
        
        setShowDatePicker(false);
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

    // helper removed: GetPatientById is unused
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

  
    const [payments, setPayments] =useState< Payment[]>([]);
    
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
     SetupServiceAndPaymentsByDate();
    },[]);
    useEffect(() => {
    
        let filteredPatients = patients.filter((patient) => 
            patient.firstName.toLowerCase().includes(firstNameToSearch.toLowerCase()) &&
            patient.lastName.toLowerCase().includes(lastNameToSearch.toLowerCase())
        );

        setPatientsToDisplay(filteredPatients);
        console.log(patientsToDisplay, "Patients To Display");
        if(currentPatientId == 0 && filteredPatients.length > 0)
            setCurrentPatientId(filteredPatients[0].patientId);
    }, [firstNameToSearch, lastNameToSearch]);
       
    useEffect(() => {

        if(services.length > 0 || payments.length > 0)
        SetupServiceAndPaymentsByDate();
    }, [services, payments, currentPatientId]);

        
    //setPatientsToDisplay(filteredPatients);
  

    const ProcessInsurancePayment = (serviceId:number, type:string, amountToPay: number)=>{


    
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

    
    const SetupServiceAndPaymentsByDate = () => {

        let paymentOrServiceByDate:PaymentOrServiceByDate[] = [];
        services.filter((service) => service.patientId == currentPatientId).map((service) => {

            console.log("Service on date " + service.date.toDateString() + " for amount " + service.serviceCost);
            paymentOrServiceByDate.push({   date: service.date, amount: service.serviceCost});
        });

        payments.filter((payment) => payment.patientId == currentPatientId).map((payment) => {

            console.log("Payment on date " + payment.date.toDateString() + " for amount " + payment.amount);
            paymentOrServiceByDate.push({ date: payment.date, amount: -payment.amount});
        });

        paymentOrServiceByDate.sort((a, b) => a.date.getTime() - b.date.getTime());

        let balanceByDate :PaymentOrServiceByDate[] = [];

        paymentOrServiceByDate.reduce((accumulator, currentValue) => {

            let newBalance = accumulator + (currentValue.amount || 0);
            console.log("New Balance: " + newBalance + " on date " + currentValue.date.toDateString());

            const balIndex = balanceByDate.findIndex((item) => item.date.toDateString() == currentValue.date.toDateString());
            
            console.log(balIndex, "BalIndex");
            if(balIndex >= 0)
            {
                balanceByDate[balIndex].amount = newBalance;

            }
            else
            balanceByDate.push( { date: currentValue.date, amount: newBalance});
            return newBalance;

        }, 0);

        console.log(balanceByDate, "Balance By Date");

        setServiceOrPaymentByDate(balanceByDate);

        // compute date span from first raw event (service or payment) to last
        // compute date span from first raw event (service or payment) to last (used locally below)
        // no persistent chartStartDate/chartDaysSpan state required here

        // compute Y axis min/max from the balanceByDate amounts
        if (balanceByDate.length > 0) {
            const amounts = balanceByDate.map((b) => b.amount || 0);
            let minAmount = Math.min(...amounts);
            let maxAmount = Math.max(...amounts);
            // ensure some vertical range if all values equal
            if (minAmount === maxAmount) {
                minAmount = minAmount - 1;
                maxAmount = maxAmount + 1;
            }
            setChartYMin(minAmount);
            setChartYMax(maxAmount);
        } else {
            setChartYMin(undefined);
            setChartYMax(undefined);
        }

        // Build X labels (dates) spanning from chartStartDate for chartDaysSpan days
        if (paymentOrServiceByDate.length > 0) {
            const msPerDay = 1000 * 60 * 60 * 24;
            const firstDate = paymentOrServiceByDate[0].date;
            const spanDays = Math.max(5, Math.ceil(((paymentOrServiceByDate[paymentOrServiceByDate.length - 1].date.getTime() - firstDate.getTime()) / msPerDay) || 0));
            const labels: string[] = [];
            const seriesVals: number[] = [];
            for (let d = 0; d <= spanDays; d++) {
                const day = new Date(firstDate.getTime() + d * msPerDay);
                labels.push(day.toLocaleDateString());
                // find last balance on or before this day
                const bal = balanceByDate
                    .filter(b => b.date.getTime() <= day.getTime())
                    .slice(-1)[0];
                seriesVals.push(bal ? (bal.amount || 0) : 0);
            }
            setChartXLabels(labels);
            setChartSeriesData(seriesVals);
        } else {
            setChartXLabels([]);
            setChartSeriesData([]);
        }

        serviceOrPaymentByDate.sort((a,b) => (a.amount || 0) - (b.amount || 0));

        console.log(serviceOrPaymentByDate, "Sorted Service Or Payment By Date");
let difference = 0;
        if(serviceOrPaymentByDate.length > 0)
        {
         difference = serviceOrPaymentByDate[serviceOrPaymentByDate.length -1].amount || 0 - (serviceOrPaymentByDate[0].amount || 0);
            console.log("Difference: " + difference);
        }
        console.log(serviceOrPaymentByDate, "Service Or Payment By Date");
                    if(serviceOrPaymentByDate.length > 0) {
                        // xLabels are no longer used; series x values use actual dates
                    }
        




    }
    const ProcessPatientPayment = (serviceId:number, type:string, amountToPay: number) => {

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
    const AcceptPayment= (billId: number, serviceId: number, payerSelectedInput: string, paymentSelectedInput: string, amount: number) => {

        console.log(amount, "Amount in Accept Payment");
        if(payerSelectedInput == "Patient")
        {
            if(paymentSelectedInput=="Full owed by payer")
            {
                
          //  let currentBill = bills.find((bill) => bill.billId);

            services.filter((service) => service.billId == billId && service.serviceId == serviceId)
            {
                ProcessPatientPayment(serviceId, "Full owed by payer", 0);
            }

            }
            if(paymentSelectedInput =="Partial owed by payer")
            {
                ProcessPatientPayment(serviceId, "Partial owed by payer", amount);
            }

        }
        if(payerSelectedInput == "Insurance")
        {
            if(paymentSelectedInput=="Full owed by payer")
            {
                
          //  let currentBill = bills.find((bill) => bill.billId);

            services.filter((service) => service.billId == billId && service.serviceId == serviceId)
            {
                ProcessInsurancePayment(serviceId, "Full owed by payer", 0);
            }

            }
            if(paymentSelectedInput =="Partial owed by payer")
            {
                ProcessInsurancePayment(serviceId, "Partial owed by payer", amount);
            }

        }



    }


    const [payerSelected, setPayerSelected] = useState<string>("Insurance");
    const [paymentSelected, setPaymentSelected] = useState<string>("Full owed by payer");


    useEffect(() => {
        setPayerSelected("Full owed by payer");
        setPaymentSelected("Insurance");
    }, []);
     let totalCost = useMemo(() =>
        services.filter((service) => service.patientId == currentPatientId).reduce((accumulator, currentValue) => accumulator +  currentValue.serviceCost, 0)
    , [services, currentPatientId])

    let totalPayments = useMemo(() => 
        payments.filter((payment)=> payment.patientId == currentPatientId).reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0),
     [payments, currentPatientId]
    )

       
    // inline patient selection used via SetPatientId; remove unused handleClick
     

       

     const SetPatientId = (event: any) => {
        setCurrentPatientId(Number(event.currentTarget.value));
    }

    return (


        <>
        <Card sx={{backgroundColor: 'lightblue', padding: '10px', marginBottom: '20px'}}>
            Welcome to Nates Revenue Cycle Management
        </Card>
        
        <Card sx={{backgroundColor: 'lightblue', padding: '10px', marginBottom: '20px'}}>
            <Typography variant="h6">Search Patients</Typography>
      <TextField variant="outlined" label='First Name' sx={{margin:'20px', backgroundColor:'white', color: 'black'}} onChange={(e) => setFirstNameToSearch(e.currentTarget.value)} />
      <TextField variant="outlined" label='Last Name' sx={{margin:'20px', backgroundColor:'white', color: 'black'}} onChange={(e) => setLastNameToSearch(e.currentTarget.value)} />

        <Typography variant="h6">Select Patient to view its Bill</Typography>
        <Select value={currentPatientId} onChange={(event) => SetPatientId((event))}>
            {patientsToDisplay.map(patient => (
                <MenuItem key={patient.patientId} value={patient.patientId}>{patient.firstName} {patient.lastName}</MenuItem>
            ))}
        </Select>
        </Card>
        
        


<Typography variant="h6">{GetFullNameOfPatient(currentPatientId)}</Typography>
 
        
           {
    bills.filter(
        (bill) => bill.patientId == currentPatientId)

 .map((bill) => (

    <DisplayBill bill={bill} totalCost={totalCost} totalPayments={totalPayments} handleClick={()=> setCurrentBillId(bill.billId)}/>
 ))
}


<Typography variant="h6">Select Date for Payment or Service</Typography> 

<Button variant="contained" onClick={() => setShowDatePicker(true)}>Select Date</Button>
{showDatePicker && <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateCalendar sx={{ backgroundColor: 'gray' }} value={paymentDate ? dayjs(paymentDate) : null} onChange={handleChange} />
</LocalizationProvider>}

{paymentDate && <Typography variant="h6">Selected Date: {paymentDate.toDateString()}</Typography>}

              
       
           <Typography variant="h6">Services and Payments for Current Bill</Typography>


    
   
{
         
 bills.filter((bill) => bill.billId == currentBillId).map((bill) => (
         services.filter((service) => service.billId == bill.billId).map((service) => (
          
            service.patientId == currentPatientId &&
                  <>

                  <DisplayService service={service} />
     

          {payments.filter((payment) => payment.serviceId === service.serviceId).map((payment) => (


<>

{payment.originatorType== 2 && <DisplayPayment payment={payment} payerName={GetFullNameOfPatient(patients.filter((patient) => patient.patientId == payment.originatorId)[0].patientId)} />}
    {payment.originatorType== 1 && <DisplayPayment payment={payment} payerName={(insurances.filter((insurance) => insurance.insuranceId == payment.originatorId)[0].insuranceName)} />}
</>
            ))}



<AddPayment billId={bill.billId} serviceId={service.serviceId} AcceptPayment={AcceptPayment} payerSelected = {payerSelected}   paymentSelected={paymentSelected}  />
            </>
         
        ))
    )
        
        
   )
   

     
    
     
 }


<AddService billId={currentBillId} services={[Service1, Service2]} medicalProfessionals={medicalProfessionals} onAddService={onAddService}/>

    

<Card sx={{backgroundColor: 'lightgreen', padding: '10px', marginBottom: '20px'}}>
<LineChart
    series={[
        { data: chartSeriesData, label: 'Amount Owed', yAxisId: 'leftAxisId' },
    ]}
    xAxis={[{ scaleType: 'point', data: chartXLabels }]}
    yAxis={[
        { id: 'leftAxisId', width: 80, min: chartYMin, max: chartYMax },
    ]}
/> 
</Card>


    </>
    )
}
    
       



export default RevenueCycleManagement;