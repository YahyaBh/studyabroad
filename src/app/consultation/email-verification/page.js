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
                if (res.status === 200) {
                    toast.success('Email Is Verified');
                    window.location.href = `${process.env.NEXT_PUBLIC_URL}/consultation/verified/${data.user._id}`;
                }
            })
            .catch((err) => {
                // window.location.href = `${process.env.NEXT_PUBLIC_URL}/consultation`;
                console.log(err);
                toast.error('Email Is Not Verified');
            })

    }, []);


    return (
        <>
            <Loading />
        </>
    )
}

export default page
