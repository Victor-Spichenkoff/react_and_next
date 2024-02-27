'use client'

import { UseControllerProps, useController } from "react-hook-form";
import { Inputs, RegisterFormType } from "./reactFormHook";


// export function Input(props: UseControllerProps<Inputs>) {
    //com ZOD
export function Input(props: UseControllerProps<RegisterFormType>) {
    const {field, fieldState} = useController(props)
    
    return (
        <div>
            <input
                {...field}
                placeholder={props.name}
                className={`
                    border p-3 mt-3 
                    ${fieldState.invalid ? 'border-red' : 'border-white'}
               `}
            />
            {fieldState.error && <p>
                { fieldState.error.message }
            </p>}
            {/* sem zod */}
            {/* {fieldState.error?.type == 'required && <p>
             Campo Obrigatório
            </p>} */}
        </div>
    )
}