import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import Signup from './Signup'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios
        .post("http://localhost:4000/user/login", userInfo)
        .then((res) => {
            console.log(res.data);
            if (res.data) {
                toast.success("Login Successfull!!!")
                document.getElementById("my_modal_3").close()
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                }, 3000);
            }
        })
        .catch((err) => {
            toast.error("Error meow: " + err)
        })
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-700 dark:text-white">

                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <Link
                            to='/'
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >
                            ✕
                        </Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type='email'
                                placeholder='Enter your email'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input type='password'
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-2 py-1 hover:bg-pink-700 duration-200'>Login</button>
                            <p>Not registered?{" "}
                                <Link to="/signup" className='cursor-pointer underline text-blue-500'>Sign up</Link>
                            </p>
                        </div>

                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login