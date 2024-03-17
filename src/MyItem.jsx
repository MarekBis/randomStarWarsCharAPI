import { useState } from "react";


const MyItem = (props) => {
    const [count, fun] = useState(0);

    const increase = () => {
        fun(count+1);
    }
    const clickMe = () => {
        console.log("I was clicked");
        console.log(props.myName);
    }

    return (
        <div><h1 onClick={() =>{clickMe();increase()}}>Hello World {props.myName}</h1>
            <span>
                {count} clicks MyItem
            </span>
        </div>
    )
}

export default MyItem