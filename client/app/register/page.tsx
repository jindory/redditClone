"use client";
import React, { FormEvent, useState } from "react"
import Link from "next/link"
import InputGroup from "../components/InputGroup"
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<any>({});

    let router =  useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const res = await axios.post('/auth/register', {
                email,
                password,
                username
            })
            console.log('res', res);
            router.push("/login");
        } catch (error: any) {
            console.log('error', error);
            setErrors(error.response.data || {});
        }
    }

    return(
        <div>
            <div className="flex felx-col items-center justify-content h-screen p-6">
                <div className="w-10/12 mx-auto md:w-96">
                    <h1 className="mb-2 text-lg font-medium">회원가입</h1>
                    <form onSubmit={handleSubmit}>
                        <InputGroup 
                            placehoder="Email"
                            value={email}
                            setValue={setEmail}
                            error={errors.email}
                        />
                        <InputGroup 
                            placehoder="Username"
                            value={username}
                            setValue={setUsername}
                            error={errors.username}
                        />
                        <InputGroup 
                            placehoder="Password"
                            value={password}
                            setValue={setPassword}
                            error={errors.password}
                        />
                        <button className="w-full py-2 mb-1 text-xs font-bold uppercase bg-gray-600 border border-gray-600 rounded">
                            Sign up
                        </button>
                    </form>
                    <small>
                        이미 가입하셨나요?
                        <Link href="/login"><span className="ml-1 text-blue-500">로그인</span></Link>
                    </small>
                </div>
            </div>
        </div>
    )
}