import { useState } from "react";
const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");
    const handleClickBtn = () => {
        // let obj = {name,price,size,color}
        let obj = {
            name: name,
            price: price,
            size: size,
            color:color
        }
        console.log(name, price, size, color)
        let productList = localStorage.getItem("productList");
        if (productList) {
            let arr = JSON.parse(productList);
            arr.push(obj);
            localStorage.setItem("productList", JSON.stringify(arr));
        } else {
            localStorage.setItem("productList", JSON.stringify([obj]));
        }
        setName("");
        setPrice(0);
        setSize(0);
        setColor("");
    }
    const [isShowDetail, setIsShowDetail] = useState(false);
    const handleHideShow = (status) => {
        setIsShowDetail(status)
    }
    return (
        <div>
            {
                isShowDetail === true &&
                <fieldset>
                <legend>Add new product</legend>
                <div className="input-product">
                    <label >Name: </label>
                        <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>

                </div>
                <div className="input-product">
                    <label >Price: </label>
                        <input type="text" value={price} onChange={(event)=>{setPrice(event.target.value)}}/>
                    
                </div>
                <div className="input-product">
                    <label >Size: </label>
                        <input type="text" value={size} onChange={ (event)=>{setSize(event.target.value)}}/>
                    
                </div>
                <div className="input-product">
                    <label >Color: </label>
                        <input type="text" value={color} onChange={ (event)=>{setColor(event.target.value)}}/>
                    
                    </div>
                    <div>
                        <button onClick={()=>handleClickBtn()}>+Add new</button>
                    </div>
                    </fieldset>
            }
            {
                isShowDetail === true ? <div onClick={() => handleHideShow(false)}>Hide this form</div>
                    :<div onClick={()=>handleHideShow(true)}>Show the form</div>
            }
            {/* {
                isShowDetail === true && <div onClick={()=>handleHideShow(false)}>Hide this form</div>
            }
            {
                isShowDetail === false && <div onClick={()=>handleHideShow(true)}>Show the form</div>
            } */}
            {/* <div>
                List Products:
                <div>
                    {
                        localStorage.getItem("productList")
                    }
                </div>
            </div> */}
        </div>
    )
    
}
export default AddNewProduct;