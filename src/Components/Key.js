import React from 'react';
export default function Key (){
    return(
        <>
        <div>
        <h1 className="text-2xl text-center ">!! Hello from Wordle !!</h1>
        </div>
        <div>
         {"qwertyuiopasdfghjklzxcvbnm".split("").map(ltr => ( 
         <button className="bg-slate-900 hover:bg-amber-700 text-white"  
         key={ltr}
         value={ltr}>
        {/* onClick={handleClick()}
        disabled={this.state.guessed.has(ltr)}> */}
             {ltr}
         </button>
        ))}
        </div>
    </>
    );
}