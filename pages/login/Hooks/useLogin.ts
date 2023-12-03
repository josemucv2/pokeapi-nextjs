import { useState, ChangeEvent } from "react";
import { NextRouter, useRouter } from "next/router";
import { formDataType, useLoginReturnType } from '../types/login.types'
import { toast } from "react-toastify";

export const useLogin = (): useLoginReturnType =>{
    
    const [loading,setLoading] = useState<boolean>(false)
    const { push }: NextRouter = useRouter()

    const [formData, setFormData] = useState<formDataType>({
        email: "",
        password: "",
    });
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.target;
        
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const login = (): void =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
            toast.success('Bienvenido')
            push('/dashboard')
        }, 3000)
    }


    return {
        handleInputChange,
        login,
        formData,
        loading,
    }
}