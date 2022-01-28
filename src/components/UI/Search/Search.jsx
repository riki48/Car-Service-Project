import { useState } from 'react';
import cl from './Search.module.css'
function Search(){
    const [inputValue, setInputValue] = useState('');
    return(
        <div className={cl.wrap}>
            <div className={cl.flex}>
                <div className={cl.item}>
                    <svg>
                        <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'></path>
                    </svg>
                </div>
                <div className={cl.item}>
                    <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} name="search" id="" placeholder='Начните вводить название работы или симптом неисправности'></input>
                </div>
            </div>
        </div>
    )
}
export default Search