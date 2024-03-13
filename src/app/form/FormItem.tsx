import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface FormItemInterface {
    controller: any
    name: string
    ph: string
    label: string
}

export default function CreateFormItem({controller, name, ph, label}: FormItemInterface) {
    return (
        <FormField
        control={controller}
        name={name}
        render={({ field }) => (
            <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl className=' text-black'>
                <Input placeholder={ph} {...field} />
            </FormControl>
            <FormMessage />
            </FormItem>
        )} />
    )
}