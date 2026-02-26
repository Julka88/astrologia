import { data } from './data'
import './App.css'
import { useState } from 'react'

function App() {
  const [feels, setFeels] = useState(0)
  
 const { id, image, nameFeeling,title,service,price, description} = data [feels];

 const previosFeels = () => {
     setFeels((feels => {
       feels --;
        if( feels < 0 ){
         return data.length -1 
       }
       return feels;
     }))
 
   }
   const nextFeels = () => {
     setFeels((feels => {
       feels ++ ;
       if( feels >data.length -1 ){
         feels = 0
       }
       return feels;
     }))
 
   }
   const [showMore, setShowMore]= useState (false);


   const setShowComponent = () =>{
       
   }

  return (
    <>
      <div>
        <div className='container'>
      <h1> Природный свет { feels.length} </h1>
       </div>
            <div className='container'>
                <h2>{id}- {nameFeeling}</h2>
            </div>
         <div className='container'>
          <h2>{title}</h2>
         </div>
          <div className='container'>
              <img src={` /${image}`} alt="feeling" width='450px' />
         </div>
        
        <div className='container'>
          <h2>{service}</h2>
        </div>
         
          <div className='container'>
          <p> {showMore ? description : description.substring(0, 88) + '....'}
            <button className='btn-show' onClick={()=> setShowMore(!showMore)}> {showMore ? 'Скрыть ' : ' Показать подробнее '} </button> </p>
                  </div>
         <div className='container'>
          <button onClick={()=> setShowComponent(true) }> Стоимость </button>
        </div>
        <div className='container btn'>
          <button onClick={previosFeels}> Назад</button>
           <button onClick={nextFeels}>Вперед</button>
        </div> 
     
    </div>
  
     
    </>
  )
}

export default App
