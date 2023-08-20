import { useMemo, useState } from "react"
import { AuthorizationContext } from "../../contexts/authorizationContext"



export const AuthorizationContextProvider = ({children}) => {
    const [authorization, setAuthorization] = useState(null)
    
    const authorizationValue = useMemo(() => {
        return {
            authorization, setAuthorization
        }
    }, [authorization])

    return (
        <AuthorizationContext.Provider value={authorizationValue}>
            {children}
        </AuthorizationContext.Provider>
    )
}