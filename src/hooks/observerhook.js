import { useEffect, useState } from "react";

function Observer(element,thresholdvalue){
    const [intersecting,setintersecting]=useState(false);

    useEffect(()=>{
        const callback=(entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setintersecting(true);
                }else{
                    setintersecting(false);
                }
            })
        }

        const options={
            threshold:thresholdvalue
        }

        const observer= new IntersectionObserver(callback,options)
        if(element.current){
            observer.observe(element.current)
        }
        return ()=>{
            if(element.current){
                observer.unobserve(element.current);
            }
        }
        
    },[element])

    return intersecting;
}

export default Observer;