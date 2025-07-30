import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successful!!")
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        } catch (error) {
            toast.error("Error: " + error.message)
        }
    }
    return (
        <a className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 cursor-pointer duration-200"
            onClick={handleLogout}>Logout</a>
    )
}

export default Logout