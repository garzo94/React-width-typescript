import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () =>{
        setUser({
            name:'myname',
            email:'name@gmail.com'
        })
    }
    // const handleLogout = () =>{
    //     setUser(null)
    // }
  return (
    <div>
        <button onClick={handleLogin}>in</button>
        {/* <button onClick={handleLogout}>out</button> */}
        <div>User name is{ user?.name}</div>
        <div>User email is</div>
    </div>
  )
}
