'use client'
import React, { useEffect } from "react"
import './page.scss'
import toast from 'react-hot-toast';
import Loading from "@/app/comps/loading/page";
import { useSearchParams } from "next/navigation";

const page = () => {


    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {

        const url = `${process.env.NEXT_PUBLIC_URL}api/verify-email`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then((data) => {
                if (data.error) {
                    toast.success('Email Is Verified');                    
                    window.location.href = `${process.env.NEXT_PUBLIC_URL}/consultation/verified/${data.userID}`;
                } else {
                    toast.error(data.message || 'Something Went Wrong');

                    setTimeout(() => {
                        window.location.href = '/consultation';
                    }, 5000);
                }
            })
            .catch((error) => {
                toast.error(error?.message || 'Something Went Wrong');
            });
    }, []);


    return (
        <>
            <Loading />
        </>
    )
}

export default page
