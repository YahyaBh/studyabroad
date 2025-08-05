'use client'
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import Loading from "@/app/comps/loading/page";
import Cookies from "js-cookie";

const Page = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const t = params.get('token');
        setToken(t);
    }, []);

    useEffect(() => {
        if (!token) return;

        if (!token) {
            toast.error("No verification token found");
            window.location.href = `/consultation`;
            return;
        }

        const url = `/api/verify-email`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        })
            .then(res => res.json())
            .then(data => {
                if (data.userId) {
                    toast.success('Email is verified!');
                    Cookies.set("user", JSON.stringify(data.user), { expires: 30 });
                    window.location.href = `/consultation/verified/${data.userId}`;
                } else {
                    toast.error(data.message || 'Verification failed');
                    window.location.href = `/consultation`;
                }
            })
            .catch((err) => {
                console.error('Verification error:', err);
                toast.error('Something went wrong');
                window.location.href = `/consultation`;
            });
    }, [token]);

    if (!token) return <Loading />;

    return null;
};

export default Page;
