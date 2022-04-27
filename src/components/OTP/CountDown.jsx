import React from "react";
import { useState, useEffect } from "react";
import CountDownAnimation from "./CountDownAnimation";
//hook
const CountDown = (props) => {
    
    const [count, setCount] = useState(10);
    
    useEffect(() => {
        if (count === 0) {
            props.setIsDisableBtn(true);
            return;
        };
        const timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    },[count]);
    return (
        <div>{count}</div>
    )
}
//class
// class CountDown extends React.Component{
//     constructor(props) {
//         console.log("Run constructor")
//         super(props);
//         this.state = {
//             count : 10,
//         }
//     }
//     componentDidMount() {
//         console.log("Run did mount")
//         this.timer = setInterval(() => {
//             let count = this.state.count;
//             this.setState({
//                 count:count-1
//             })
//         },1000)
//     }
//     componentDidUpdate(prevProps, prevState) {
//         console.log("Run update", this.state, prevState)
//         if (this.state.count !== prevState.count && this.state.count === 0) {
//             if (this.timer) {
//                 clearInterval(this.timer);
//             }
//         }
//     }
    
//     render() {
//         console.log("Run render")
//             {
//             return (
//                 <div>{ this.state.count}</div>
//             )
//         }
//         }
// }
export default CountDown;