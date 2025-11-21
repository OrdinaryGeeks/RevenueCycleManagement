import type Service from "../classes/Service";


interface DisplayServiceProps {
    service: Service;
    handleClick?: () => void;
}


export default function DisplayService(props: DisplayServiceProps) {

    return(
<>
                  <div>{props.service.serviceName}</div>
          <div>{props.service.serviceCost}</div> 

</>
    )
}