import { useState } from "react"

export default function Sliders({slider}){

    const [currentSlider, setCurrentSlider] = useState(3)
    console.log(currentSlider)

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


    return(
        <section className="slider">
            <div className="slider-container" style={{backgroundImage:`url(${slider[currentSlider].image})`}}>
                <div className="left" onClick={backSliderHandle}>sol</div>
                <div className="right" onClick={NextSliderHandle}>sağ</div>
                <div>{slider.map(()=>{
                    return(
                        <div className="slider-dots">.</div>
                    )
                })}</div>
            </div>
        </section>
    )
}