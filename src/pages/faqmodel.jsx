import { useState } from 'react';
import '../css/faq.css'
function FaqModel({question,answer}){
    const [isopen,setopen]=useState(false);

    function OpenAnswer(){
        setopen(!isopen);
    }
    return(
        <div className='faq'>
            <div className='question'>
                <span onClick={OpenAnswer} id='quest'>{question}</span>
                <span id='ans' onClick={OpenAnswer}>Ans</span>
            </div>
            {isopen && <div className='answer'>
             <span>{answer}</span>
            </div>}
        </div>
    )
}

export default FaqModel;