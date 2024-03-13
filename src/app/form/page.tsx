"use client"
import {
    Form as ShadForm,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form as RHFForm, useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod'
import CreateFormItem from "./FormItem"

const CreateSchema = z.object({
    nome: z.string({invalid_type_error: 'Informe um nome', required_error: 'Campo obrigatório'}).min(2, 'Nome incompleto'),
    idade: z.number({invalid_type_error: 'A idade deve ser um número', required_error: 'Campo obrigatório'}).min(0, 'Você não nasceu???').max(123, 'Temos um recordista!!!'),
    email: z.string().email('E-mail inválido').min(6, 'E-mail muito curto').optional()
})


export default function Form() {
    const createForm = useForm<z.infer<typeof CreateSchema>>({
        resolver: zodResolver(CreateSchema)
    })

    function onSubmit(values: z.infer<typeof CreateSchema>) {
        
    }
    
    
    return (
        <div className="h-screen bg-black text-white">
            <h1 className="text-center">Fazer Login</h1>
            <ShadForm {...createForm}>
                <form onSubmit={createForm.handleSubmit(onSubmit)} className="space-y-8 mx-auto max-w-96">
                <CreateFormItem
                    name='nome'
                    ph='Digite seu primeiro nome...'
                    controller={createForm.control}
                    label="Nome"
                />
                <CreateFormItem
                    name='idade'
                    ph='Digite sua idade...'
                    controller={createForm.control}
                    label="Idade"
                />
                <CreateFormItem
                    name='email'
                    ph='Digite seu e-mail...'
                    controller={createForm.control}
                    label="E-mail"
                />
                    {/* <FormField
                    control={createForm.control}
                    name="nome"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Idade</FormLabel>
                        <FormControl>
                            <Input placeholder="Idade" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )} />
                    <FormField
                    control={createForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                            <Input placeholder="E-mail" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )} /> */}
                    <Button type="submit">Enviar</Button>
                </form>
            </ShadForm>
        </div>
    )
}