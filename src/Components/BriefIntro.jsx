import React from "react"
import coverImg from "../Assets/coverimgC.png"




const BriefIntro = () => {
  // const [text, setText] = useState("");
  // const fullText = "Welcome to my Product Manager Portfolio!";

  // useEffect(()=>{
  //   let currentIndex = 0

  //   const typingInterval = setInterval(()=>{
  //     setText((prevText)=> prevText + fullText[currentIndex]);
  //     currentIndex++;
  //   })
  //   if(currentIndex=== fullText.length){
  //     clearInterval(typingInterval)
  //   }; 
  // },2)
  return (
    <div className='introDiv'>
      <div>
        <h1 className='myName'>I am Damilola Kolawole</h1>
        <p className='myAbout'>Welcome to my Product Manager Portfolio</p>
      </div>

      <div className='myCoverImg'>
      <img  src={coverImg} alt="myCoverImg" className='coverImg' />
      </div>
    </div>
  )
}

export default BriefIntro