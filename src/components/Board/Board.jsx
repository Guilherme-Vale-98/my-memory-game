import { useEffect, useRef, useState } from 'react'
import Card from '../Card/Card'
import {
    rooster,
    dog,
    pig,
    rabbit,
    ox,
    dragon,
    horse,
    monkey,
    rat,
    sheep,
    snake,
    tiger
  } from '../../assets/index'
import './Board.styles.css'

const Board = () =>{
    const initialCards=[
        {image:rooster, matched: false, turn: ''}, 
        {image:dog, matched: false, turn: ''},
        {image:pig, matched: false, turn: ''},
        {image:rabbit, matched: false, turn: ''},
        {image:ox, matched: false, turn: ''},
        {image:dragon, matched: false, turn: ''},
        {image:horse, matched: false, turn: ''},
        {image:monkey, matched: false, turn: ''},
        {image:rat, matched: false, turn: ''},
        {image:sheep, matched: false, turn: ''},
        {image:snake, matched: false, turn: ''},
        {image:tiger, matched: false, turn: ''},
    ]
    const [animals, setAnimals]=useState([...initialCards, ...initialCards])
    const [firstCard, setFirstCard] = useState(null)
    const [secondCard, setSecondCard] = useState(null)
    const timeout = useRef(null)
 

    const shuffleCards = () => {
        const shuffledAnimals = animals
        .map((value,index)=> ({id:index, ...value, turn: '', matched: false}))
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        setAnimals(shuffledAnimals)
      }
    
    useEffect(shuffleCards,[])

    const gameEndedCheck = ()=>{
        const check = animals.reduce((acc, currentValue)=> acc && currentValue.matched)
        return check     
    }
    const turnAllCards = () =>{
        const resetAnimals = animals.map((value,index)=>{
             return {...value, turn: ''}
        })
        setAnimals(resetAnimals)
     }

    const resetPair = () =>{
       const resetAnimals = animals.map((value,index)=>{
        if(value.turn=== 'turn' && value.matched=== false){
            return {...value, turn: ''}
        }else{
            return value
        }
       })
       setAnimals(resetAnimals)
    }

    const evaluateCards = () => {
        if(firstCard && firstCard?.image === secondCard?.image && firstCard?.id !== secondCard?.id){
            const newAnimals = animals.map(animal => {
                if(animal.image === firstCard.image){
                    return {...animal, matched: true}
                } else {
                    return animal
                }
            })
            setAnimals(newAnimals)
            return
        }
        if(firstCard && secondCard && firstCard?.image !== secondCard?.image && firstCard?.id !== secondCard?.id){
            timeout.current = setTimeout(() => {
                resetPair();
              }, 500);
        }
        const check = gameEndedCheck()
        if(check){
        
            timeout.current = setTimeout(() => {
                turnAllCards();
              }, 1200);

            timeout.current = setTimeout(() => {
                shuffleCards();
              }, 1500);
        }
    }

    const turnCard = (animal) =>{
        if(animal.turn === ''){
            animal.turn = 'turn'
            return
        }
        animal.turn= ''
    }

    const handleBoardClick = (e,animal) => { 
        turnCard(animal);
        firstCard ? setSecondCard(animal): setFirstCard(animal);     
    };

    useEffect(() => {
        evaluateCards();   
        if(firstCard && secondCard){
            setFirstCard(null);
            setSecondCard(null);       
        }     
    }, [firstCard,secondCard]);
 


    return(
        <div className="gameboard rounded-xl grid grid-cols-6 gap-3 p-5 mt-9 h-auto">
            {animals.map((animal, index) => <Card key={index} animal={animal.image} turn={animal.turn} disabled={animal.matched? 'disabled': ''} boardClick={(e) => handleBoardClick(e,animal)}/>)}       
        </div>
        
    )
}

export default Board;
