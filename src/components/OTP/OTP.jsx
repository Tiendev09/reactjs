import GenerateOTP from "./GenerateOTP";
import InputOTP from "./InputOTP";
import { useState } from "react";
import './OTP.scss';
import CountDownAnimation from "./CountDownAnimation";
const OTP = () => {
    const [orgOtpParent, setOrgOtpParent] = useState("");
    const [useOtpParent, setUserOtpParent] = useState("");
    const handleSubmitOtp = () => {
        if (!orgOtpParent) {
            alert("Vui lòng tạo OTP...");
            return;
        }
        if (!useOtpParent) {
            alert("Vui lòng nhập OTP...");
            return;
        }
        if (+orgOtpParent === +useOtpParent) {
            alert("Đúng");
        } else {
            alert("Sai");
        }
    }
    const [isDisableBtn, setIsDisableBtn] = useState(false);
    return (
        <div className="otp-parent-container">
            {/* <CountDownAnimation/> */}
            <GenerateOTP setOrgOtpParent={setOrgOtpParent}/>
            <InputOTP setUserOtpParent={setUserOtpParent}
                handleSubmitOtp={handleSubmitOtp}
                isDisableBtn={isDisableBtn}
                setIsDisableBtn={setIsDisableBtn}
            />
        </div>
    )
}
export default OTP;