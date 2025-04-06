import React, { forwardRef, useRef } from 'react'

const ChildInput = forwardRef((props, ref) => {
    console.log(props, ref);
    return <input type='text' ref={ref} />
})

const Step05 = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }
    return (
        <>
            <ChildInput red={'red'} ref={inputRef} />
            <button onClick={handleFocus}>CLICK</button>
        </>
    )
}

export default Step05