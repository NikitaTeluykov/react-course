import {useParams} from "react-router-dom";

const CarDetail = props => {

    console.log(useParams())
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{useParams().name}</h1>
        </div>
    )
}

export default CarDetail