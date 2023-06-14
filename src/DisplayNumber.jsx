import "./App.css"
export default function DisplayNumber(props) {
    if(props.number < 10) {
        return <p>The number is too small.</p>
    }
    else {
        return (
            <h1 className={props.number % 2 === 0 ? "blue" : "red"}>
                {props.number}
            </h1>
        )
    }

}   