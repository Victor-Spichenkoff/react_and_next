import { Provider } from 'react-redux'
import { store } from './store'

export default function ({children}: 
    Readonly<{children: React.ReactNode}>) {
    
    
    return (
        <div className="mx-auto bg-blue-600 max-w-2xl p-5 text-center">
            <h1>Teste Redux</h1>
            <div>
                <Provider store={store}>
                    { children }
                </Provider>
            </div>
        </div>
    )
}