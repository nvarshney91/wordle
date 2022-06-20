import React, { useEffect, useState } from 'react';
import useWordle from '../Hooks/useWordle';
export default function Wordle({solution}){
    const {currentGuess, handleKeyup} = useWordle(solution)
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyup)
        return ()=> window.removeEventListener('keyup', handleKeyup)
    },[handleKeyup]
    )
    return(
        <div>
            currentGuess - {currentGuess}
        </div>
    )
}