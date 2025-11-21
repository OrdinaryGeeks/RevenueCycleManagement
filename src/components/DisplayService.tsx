import { Card, Typography } from "@mui/material";
import type Service from "../classes/Service";


interface DisplayServiceProps {
    service: Service;
    handleClick?: () => void;
}


export default function DisplayService(props: DisplayServiceProps) {

    return(
<Card sx={{backgroundColor: 'red', padding: '10px', marginBottom: '10px'}} onClick={props.handleClick}>

                  <Typography variant="h6">{props.service.serviceName}</Typography>
          <Typography variant="h6">{props.service.serviceCost}</Typography> 

</Card>
    )
}