import { useState } from 'react'
import './Card.styles.css'
import {ReactComponent as QuestionMark} from '../../assets/questionMark.svg'

export const Card = ({animal, boardClick, turn, disabled}) =>{



    const handleClick = (e) =>{
        boardClick(e); 
    }  

    return(
    <div className={`${turn} ${disabled} card hover:border-green-500 hover:border-2`}>
        <div className='content' onClick={handleClick}>
            <div className="front" >
                <img src={animal} alt="" />
            </div>
            <div className="back">
                 <QuestionMark className='w-full h-full pointer-events-none p-2'/>
            </div>
        </div>
    </div>
    )
}

export default Card;