import React from 'react'
import { forwardRef,useRef,useImperativeHandle } from 'react'
const SomeComonent = forwardRef((props,ref) => {
    const localInputRef = useRef();

    useImperativeHandle(ref,()=>{
        return{
            validate: () => {
                if(localInputRef.current.value.length > 3){
                    localInputRef.current.value = "";        
                }
            }
        }
    });
  return (
    <div>
        <p>Insira no maximo 3 caractere</p>
        <input type="text" ref={localInputRef}/>
    </div>
  )
});

export default SomeComonent