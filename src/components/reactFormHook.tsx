import { SubmitHandler, useForm } from "react-hook-form"
import { z } from 'zod'
import { Input } from "./Input"
import { zodResolver } from "@hookform/resolvers/zod"

export interface Inputs {
    name: string
    age: number
}

export type RegisterFormType = z.infer< typeof RegisterFormSchema >

const RegisterFormSchema = z.object({
    nome: z.string().min(2, 'Deve conter 2 caracteres'),
    age: z.number({ invalid_type_error: 'Campo deve conter um número' }).min(18, 'Idade minima é 18').max(123)
})



export default function ReactHookForm() {
    // RHF
    // const { control, handleSubmit, register } = useForm<Inputs>()
    
    const handleSubmitButton: SubmitHandler<Inputs> = (data) => {
       alert(data)
    } 





    //ZOD

    const { control, handleSubmit, register, formState: { errors } } = useForm<RegisterFormType>({
        resolver: zodResolver(RegisterFormSchema)
    })
    

    // Testar
    // RegisterFormSchema.parse({
    //     name: 'asas',
    //     age: 1
    // })

    //inferencia de tipo
    type RegisterFormObj = z.infer< typeof RegisterFormSchema >

    const testeObj: RegisterFormObj = {
        nome: 'Victor',
        age: 17
    }


    function registerSubmit() {
        alert('Foi')
    }

    return (<div className="border border-blue-400 my-16 p-5 text-white">
        <h2 >Formulários (React Hook Form)</h2>
        {/* Com  React Hook Form */}
        {/* <form onSubmit={handleSubmit(handleSubmitButton)} className="text-black">
            <input  {...register('name')}
                placeholder="Nome"
                className="text-black border border-white p-1 block mb-5"
            />
            <Input 
                control = {control}
                name="age"
                rules={{
                    required: true,
                    min: 0,
                    max: 123
                }}
            />

            <input type="submit" value="enviar" className="border border-blue-500 p-2"/>
        </form> */}


        <form onSubmit={handleSubmit(registerSubmit)}
            className="text-black"
        >

            <Input
                control = {control}
                name="nome"
            ></Input>
            {/* <div>
            <input {...register('nome')} 
                className="border border-white m-3 p-1 text-black"
                />
                { errors.nome && <p>{ errors.nome.message }</p> }
            </div> */}

            {/* Para usar Input com numeros lembra de usar valueAsnumber: true */}
            <div>
            <input {...register('age', { valueAsNumber: true })} 
                className="border border-white m-3 p-1 text-black"
                />
                {errors.age && <p>{ errors.age.message as string }</p>}
            </div>
            


            <div>
                <input type="submit" value="Registrar"  className="border border-white m-3 p-1 text-white"/>
            </div>

        </form>
         
    </div>)
}