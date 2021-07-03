import React, { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications'
import Link from 'next/link';
import { useRouter } from "next/router";
import { useDispatch, useSelector} from "react-redux";
import { changeValue, formValues, initForm, formErrors, isValid, setErrors} from "../../store/slice/formSlice";
import emailValidator from "../../FrontEndUtils/FormValidators/emailValidator";
import { authSelector, logout as logoutAction } from "../../store/slice/authSlice";


import HomeLayout from "../../layouts/HomeLayout";
import axios from "axios";

function Profile() {

    const [edit, setEdit] = useState(false)

    const router = useRouter()

    const dispatch = useDispatch()
    const values = useSelector(formValues)
    const formErr = useSelector(formErrors)
    const valid = useSelector(isValid)

    const { profile } = useSelector(authSelector)

    const { isLogin } = useSelector(authSelector)

    useEffect(() => {
        if(!isLogin){
            router.push('/signin')
        }
    }, [isLogin])


    useEffect(() => {

        dispatch(initForm({
            values: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    validators: [
                        new emailValidator()
                    ]
                },
                birthday: {
                    required: true
                },
                profession: {
                    required: true
                },
                password: {
                    required: true
                }
            }
        }))




    }, [])











    return (
        <HomeLayout>
            {/*  Page content */}
            <main className="flex-grow">

                <section className="bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

                            {/* Page header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <h1 className="h1">User Profile</h1>
                            </div>

                            {/* Form */}
                            <div className="max-w-sm mx-auto">
                                <form onSubmit={e => e.preventDefault()}>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        {
                                            edit ? (
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                                                    <input id="name" name={'name'} type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" onChange={e => dispatch(changeValue(e))} />
                                                    {
                                                        formErr?.name ? <span className={'text-xs text-red-500 pl-2'}>{formErr.name}</span> : ''
                                                    }


                                                </div>
                                            ) :
                                                (
                                                    <div className="w-full px-3">
                                                        <label className="text-center block text-gray-800 text-sm font-medium mb-1" htmlFor="name">{ profile.name }</label>

                                                    </div>
                                                )
                                        }

                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        {
                                            edit ? (
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                                                    <input id="email" name={'email'} className="form-input w-full text-gray-800" placeholder="Enter your email address" onChange={e => dispatch(changeValue(e))} />
                                                    {
                                                        formErr?.email ? <span className={'text-xs text-red-500 pl-2'}>{formErr.email}</span> : ''
                                                    }
                                                </div>
                                            ): (
                                                <div className="w-full px-3">
                                                    <label className="block text-center text-gray-800 text-sm font-medium mb-1" htmlFor="email">{ profile.email }</label>

                                                </div>
                                            )
                                        }

                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        {
                                            edit ? (
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="profession">Profession <span className="text-red-600">*</span></label>
                                                    <input id={'profession'} onChange={e => dispatch(changeValue(e))} name="profession" type="text" className="form-input w-full text-gray-800" placeholder="Enter your profession"/>
                                                    {
                                                        formErr?.profession ? <span className={'text-xs text-red-500 pl-2'}>{formErr.profession}</span> : ''
                                                    }
                                                </div>
                                            ) : (
                                                <div className="w-full px-3">
                                                    <label className="block text-center text-gray-800 text-sm font-medium mb-1" htmlFor="profession">{ profile.profession }</label>

                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-4">
                                        {
                                            edit ? (
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="birthday">Birthday <span className="text-red-600">*</span></label>
                                                    <input id={'birthday'} onChange={e => dispatch(changeValue(e))} name="birthday" type="date" className="form-input w-full text-gray-800" placeholder="Birthday"/>
                                                    {
                                                        formErr?.birthday ? <span className={'text-xs text-red-500 pl-2'}>{formErr.birthday}</span> : ''
                                                    }
                                                </div>
                                            ) : (
                                                <div className="w-full px-3">
                                                    <label className="block text-center text-gray-800 text-sm font-medium mb-1" htmlFor="birthday">{ new Date(profile.birthday).toDateString() }</label>

                                                </div>
                                            )
                                        }

                                    </div>
                                    {
                                        edit ? (
                                            <div className="flex flex-wrap -mx-3 mb-4">
                                                <div className="w-full px-3">
                                                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                                                    <input id={'password'} onChange={e => dispatch(changeValue(e))} name="password" type="password" className="form-input w-full text-gray-800" placeholder="Enter your password"/>
                                                    {
                                                        formErr?.password ? <span className={'text-xs text-red-500 pl-2'}>{formErr.password}</span> : ''
                                                    }
                                                </div>
                                            </div>
                                        ) : ''
                                    }

                                    <div className="flex flex-wrap -mx-3 mt-6">
                                        <div className="w-full px-3">
                                            {
                                                edit ? (
                                                    <>
                                                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Update</button>
                                                    <button onClick={() => setEdit(false)} className="btn text-black bg-red-600 hover:bg-red-700 w-full">Cancel</button>
                                                    </>
                                                ) : (
                                                <button onClick={() => setEdit(true)} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Edit</button>
                                                )
                                            }

                                        </div>
                                    </div>
                                </form>


                                <div className="text-gray-600 text-center mt-6">
                                   <a onClick={() => dispatch(logoutAction())} className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign out</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

        </HomeLayout>
    );
}

export default Profile;
