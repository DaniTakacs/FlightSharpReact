import React from 'react'
import useInput from '../hooks/useInput'

function Form() {

    const [fromPlace, bindFromPlace, resetFromPlace] = useInput('')
    const [toPlace, bindToPlace, resetToPlace] = useInput('')
    
    const submitHandler = e => {
        e.preventDefault()
        const validFromLength = fromPlace.length === 3;
        const validToLength = toPlace.length === 3;
        const fromCharsOnly = !hasNumber(fromPlace);
        const toCharsOnly = !hasNumber(toPlace);

        if(validFromLength && validToLength && fromCharsOnly && toCharsOnly){
            alert(`Travelling from ${fromPlace} to ${toPlace}.`)
        }
        else {
            alert('Start end Destination must be 3 chars long and can not contain numbers')
        }

        resetFromPlace()
        resetToPlace()
    }
    
    const hasNumber = (myString) => {
        return /\d/.test(myString);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label></label>
                    <input
                      placeholder="Going From"
                      {...bindFromPlace}
                      type="text"
                      />
                </div>
                <div>
                <label></label>
                    <input
                      placeholder="Destination"
                      {...bindToPlace}
                      type="text"
                      />
                </div>
                <button>Search flights</button>
            </form>
        </div>
    )
}

export default Form
