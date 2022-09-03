import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function User() {
    const userContext = useContext(UserContext)
    const handleLogin = ()=>{

            userContext.setUser({
                name:'Alex',
                email: 'alex@gmail.com'
            })

    }
    const handleLogout = ()=>{

            userContext.setUser(null)

    }
  return (
<div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Login</button>
    <div>Username is {userContext.user?.email}</div>
</div>
  )
}
