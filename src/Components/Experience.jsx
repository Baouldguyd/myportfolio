
import richargeImg from "../Assets/richarge.png"
import ewcImg from "../Assets/ewc.png"
import lagDataImg from "../Assets/lagdatasch.png"
import productImg from "../Assets/productDev.png"
import projectimg from "../Assets/project.jpg"




const Experience = () => {


  return (
    <div className='experience'>
        <h1 className='myExp'>Experience and Achievements</h1>
        <div className='experienceDiv'>
        
        <div className='experience-box'>
            <img src={richargeImg} alt="Richarge" className='exp-img' />
            <div className='expTextDiv'>
                <h3>Entrepreneural Ventures</h3>
                <div>
                <h2>N700,000</h2>
                <p>Revenue</p>
                    
                <button className='learn-more'>See Details</button>    
                <p>Co-founder at Richarge: Successfully bootstrapped and grew a startup, processing over 700Naira in revenue in 1 year. Secured an interview with Techstars within three months of launch, a testament to our product's potential and rapid progress.</p>
                </div>
                
                {/* <p className='expTextRicharge'></p> */}
            </div>
        </div>

        <div className='experience-box'>
            <img src={ewcImg} alt="savvyFellow" className='exp-img proj-img' />
            <h3>EWC</h3>
            <div>
            <h2>$25,000</h2>
                <p>Perks</p>
                    
             <button className='learn-more'>See Details</button>    
                
            </div>
            <p className='expTextSavvy'> Awarded $25,000 in perks as part of the Entrepreneurship World Cup virtual learning accelerator.</p>
        </div>

        <div className='experience-box'>
            <img src={lagDataImg} alt="leadership" className='exp-img lag-img proj-img' />
            <h3>Leadership</h3>
            <div>
                <h3>General Manager</h3>
                                    
                <button className='learn-more'>See Details</button>    
                
                </div>
            <p className='expTextLead'> Demonstrated effective leadership as the Manager at Lagos Data School, overseeing operations and implementing strategies for student development.</p>
        </div>

        <div className='experience-box'>
            <img src={projectimg} alt="project mgt" className='exp-img proj-img'/>
            <h3>Project Manager</h3>
            <button className='learn-more'>See Details</button>
             <p>Managed complex projects from inception to successful execution, collaborating with cross-functional teams and ensuring adherence to timelines and budgets.
            Created and maintained detailed project plans and roadmaps, supporting seamless execution and alignment among stakeholders.</p> 
        </div>

        <div className='experience-box'>
            <img src={productImg} alt="product dev" className='exp-img' />
            <h3>User-Centric Product Development</h3>
            <button className='learn-more'>See Details</button>
            <p> Gathered user feedback to enhance convenience and satisfaction for wallet deposits, instructing the engineering team to develop a dedicated bank account solution.
             Conducted market analysis through platforms like Statista.com to determine market size, guiding strategic decisions for Richarge Users</p>
        </div>

    </div>
    </div>
    
  )
}

export default Experience