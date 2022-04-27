import "./Products.scss"
import image from "../../assets/images/anh1.jpg"
import image1 from "../../assets/images/anh2.jpg"
import image2 from "../../assets/images/anh3.jpg"
import image3 from "../../assets/images/anh4.jpg"
import { useState } from "react"
import Lightbox from 'react-image-lightbox';
const Products = () => {
    const [currentUpImg, setCurrentUpImg] = useState(image)
    const images = [
            image,
            image1,
            image2,
            image3,
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const handleClickPreviewImg = () => {
        setIsOpen(true);
        let index = images.findIndex(item => item === currentUpImg);
        setPhotoIndex(index);
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-up">
                        <img src={currentUpImg} onClick={()=>handleClickPreviewImg() }/>
                    </div>
                    <div className="img-down">
                        <div className="img-small">
                            <img src={image} className={currentUpImg === image ? "active" : ""} onClick={()=>setCurrentUpImg(image)}/>
                        </div>
                        <div className="img-small">
                            <img src={image1} className={currentUpImg === image1 ? "active" : ""} onClick={()=>setCurrentUpImg(image1)}/>
                        </div>
                        <div className="img-small">
                            <img src={image2} className={currentUpImg === image2 ? "active" : ""} onClick={()=>setCurrentUpImg(image2)}/>
                        </div>
                        <div className="img-small">
                            <img src={image3} className={currentUpImg === image3 ? "active" : ""} onClick={()=>setCurrentUpImg(image3)}/>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="title">
                        Giày chạy bộ nam New Balance M860E11
                    </div>
                    <div className="price">
                        3.695.000 ₫
                    </div>
                    <div className="size">
                        Size: 30
                    </div>
                    <div className="action">
                        <label>Số lượng</label>
                        <input type="number" className="quantity" min={1} value={1}/>
                        <button className="buy">Đặt mua</button>
                    </div>
                </div>
            </div>
            {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                    animationDuration={500}
          />
        )}
        </div>
    )
}
export default Products;