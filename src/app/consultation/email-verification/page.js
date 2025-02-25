'use client'
import React, { useEffect } from "react"
import './page.scss'
import toast from 'react-hot-toast';
import Loading from "@/app/comps/loading/page";

const page = ({ searchParams }) => {

    const token = React.use(searchParams);

    useEffect(() => {

        const url = `${process.env.NEXT_PUBLIC_URL}/api/verify-email`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: token
            })
        })
            .then(res => {
                if (res.status === 200) {
                    toast.success('Email Is Verified');

                    window.location.href = '/consultation/verified'
                } else if (res.status === 400) {
                    toast.error('Token Is Expired');

                    setTimeout(() => {
                        window.location.href = '/consultation'
                    }, 5000);
                }
            })
            .catch(error => {
                toast.error('Something went wrong')
            })
    }, []);


    const notify = () => toast('Here is your toast.');
    return (
        <>
            <Loading />
        </>
    )
}

export default page
