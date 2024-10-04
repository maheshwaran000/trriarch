import '../css/faq.css'
import FaqModel from './faqmodel';

function Faq(){
    const faqs = [
        {
          question: "What types of architectural projects do you specialize in?",
          answer: "We specialize in residential, commercial, and landscape architecture, with a focus on modern and sustainable design."
        },
        {
          question: "Can you customize a design based on my specific requirements?",
          answer: "Yes, we work closely with our clients to create customized designs that reflect their unique vision and meet their specific needs."
        },
        {
          question: "What is the typical timeline for a project from start to finish?",
          answer: "The timeline depends on the project's size and complexity, but on average, a project can take anywhere from 3 to 12 months."
        },
        {
          question: "Do you offer sustainable or eco-friendly design solutions?",
          answer: "Yes, we incorporate sustainable materials and energy-efficient designs in all of our projects to minimize environmental impact."
        },
        {
          question: "What is the cost structure for your services?",
          answer: "Our pricing varies depending on the scope of the project. We provide a detailed estimate after the initial consultation, tailored to your needs."
        },
        {
          question: "Do you handle the entire construction process or just the design?",
          answer: "We offer full-service solutions, including both design and project management, overseeing the construction process to ensure your vision is realized."
        },
        {
          question: "Can I see examples of your previous work?",
          answer: "Yes, you can browse our portfolio on this website to see examples of our completed projects across various categories."
        },
        {
          question: "How involved can I be in the design process?",
          answer: "We encourage client collaboration throughout the process, from concept development to final details, ensuring the design meets your expectations."
        },
        {
          question: "What software or tools do you use for design and visualization?",
          answer: "We use cutting-edge software like AutoCAD, Revit, and SketchUp, along with 3D modeling tools, to provide detailed visualizations of our designs."
        },
        {
          question: "How do I get started with a consultation?",
          answer: "You can get in touch with us through the contact form on our website, and we'll schedule an initial consultation to discuss your project in detail."
        }
      ];
      
    return(
        <div className='faqspace'>
          <h1>FAQ</h1>
                {faqs.map((single,index)=>{
                    return <FaqModel question={single.question} answer={single.answer}/>
                })}
        </div>
    )
}

export default Faq;