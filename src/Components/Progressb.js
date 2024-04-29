

import React,{useState, useEffect} from 'react'
import './Progressb.css'

const Progressb = () => {
    const [progress, setProgress] = useState(0);
    const [load, setLoad] = useState('Loading...')

    useEffect(()=>{
        if(progress<100){
            setTimeout(()=>{
                setProgress(prev => prev+1);
            },100)
        }
        if(progress>=100){
            setLoad('Complete..!')
        }
    },[progress])


  return (
    <div className='progressBar'>
        <h1>
        Progress Bar
      </h1>
      <div className="main">
        <div className="bar" style={{
            width: `${progress}%`
        }} >
          <span style={{paddingTop: '3px'}}>{progress}%</span>
        </div>
      </div>
      <p>{load}</p>
    </div>
  )
}

export default Progressb