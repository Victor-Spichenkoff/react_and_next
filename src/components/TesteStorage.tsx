import { useStore } from "@/storages/TesteStorage";
import { Button } from "./ui/button";

export default function TesteStorage() {
    const { addUser, users } = useStore()
    console.log(users)
    
    function addUserOnButton() {
        const age = Math.floor(Math.random() * 100)
        addUser({ name: 'Vyktthor', age })
        console.log(users)
    }


    return(
        <div className='w-9/10 mx-auto text-center'>
            <Button onClick={addUserOnButton}>Adicionar novo Usuario</Button>
            <h1 className="text-xl ">Atuais</h1>
            {users.map(user => {
                return (
                    <div>
                        {!user && 'Sem Usuarios'}
                        {user && (<>
                            <p>Nome: <strong>{user.name}</strong></p>
                            <p>Idade: <strong>{user.age}</strong></p>
                        </>)}
                    </div>
                )
            })}
        </div>
    )
}