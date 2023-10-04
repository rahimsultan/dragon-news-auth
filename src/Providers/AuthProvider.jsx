import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const authContext = createContext(null);

// component
const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

const createAccount = (email, password)=>{
    setLoading(true)
  return  createUserWithEmailAndPassword(auth, email, password)
}

// login user 
const logIn = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


// set user in website until logout
useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])


// sign out user 
const logOut= ()=>{
 return signOut(auth)
}




    const authentications = {createAccount, logIn, user, logOut, loading}
  return (
    <authContext.Provider value={authentications}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider