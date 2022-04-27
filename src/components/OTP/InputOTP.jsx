import OtpInput from 'react-otp-input';
import { useRef, useState } from 'react';
import CountDown from './CountDown';
import CountDownAnimation from './CountDownAnimation';
const InputOTP = (props) => {
    const childRef = useRef();
    const [otp, setOTP] = useState("");
    const handleChange = (otp) => {
        setOTP(otp)
        console.log(otp);
        props.setUserOtpParent(otp);
    }
    const handleConfirmOtp = () => {
        props.handleSubmitOtp();
    }
    const handleCleanBtn = () => {
        childRef.current.resetTimer();
        console.log(childRef)
    }
    return (
        <div className='input-otp-container'>
            <div className='title'>ENTER VERIFICATION CODE</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-customize"}
            />
            <div className='timer'>
                <CountDownAnimation
                    setIsDisableBtn={props.setIsDisableBtn}
                    ref={childRef}
                />
            </div>
            <div className='action'>
                <button className='clear'
                    onClick={() => handleCleanBtn()}
                    disabled={!props.isDisableBtn}
                >Clear</button>
                <button className='confirm'
                    disabled={props.isDisableBtn}
                    onClick={() => handleConfirmOtp()}>Confirm</button>
            </div>
        </div>
    )
}
export default InputOTP;