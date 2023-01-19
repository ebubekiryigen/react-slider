import { faArrowLeft, faArrowLeftRotate, faChevronCircleLeft, faChevronCircleRight, faCoffee, faDotCircle, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"


export default function Sliders({slider}){

    const [currentSlider, setCurrentSlider] = useState(3)

    const backSliderHandle = () =>{
        const protect = currentSlider === 0;
        const isBack  = protect ? slider.length -1 : currentSlider -1
        setCurrentSlider(isBack)
        
        
    }
    const NextSliderHandle = () => {
        const protect = currentSlider === slider.length - 1
        const isNext  = protect ? 0 : currentSlider + 1 
        setCurrentSlider(isNext)
    }

    const dotsSliderHandle = (index) =>{
        setCurrentSlider(index)
    }

    return(
        <section className="slider">
            <div className="slider-container" style={{backgroundImage:`url(${slider[currentSlider].image})`}}>
                <div className="left" onClick={backSliderHandle}><FontAwesomeIcon icon={faChevronCircleLeft} /></div>
                <div className="right" onClick={NextSliderHandle}><FontAwesomeIcon icon={faChevronCircleRight} /></div>
            </div>
            <div className="dots-container">{slider.map((item,index)=>{
                    return(
                        <div className="slider-dot" key={item.id} ><span onClick={()=>dotsSliderHandle(index)}><FontAwesomeIcon icon={faDotCircle} /></span></div>
                    )
                })}</div>
        </section>
    )
}