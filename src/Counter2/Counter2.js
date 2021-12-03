import {ClickedContext} from "../App";

export default props => {
    return (
        <div style={{
            border: '1px solid #ccc',
            width: 200,
            margin: '20px auto'
        }}>
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}