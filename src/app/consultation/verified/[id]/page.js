'use client';
import Loading from "@/app/comps/loading/page";
import Navbar from "@/app/comps/navbar/navbar";
import { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import './verified.scss';
import Cookies from "js-cookie";
import Link from "next/link";
import { IoOpenOutline } from "react-icons/io5";

export default function Page({ params }) {
    const { id } = use(params);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();


    useEffect(() => {

        const localUser = JSON.parse(Cookies.get("user"));

        if (id) {
            getUser();
        } else {
            toast.error("Unauthorized Request");
            window.location.href = '/consultation';
        }
    }, []);

    async function getUser() {
        await fetch(`/api/get-user?id=${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.user) {
                    setUser(data.user);

                    toast.success("User data has been verified");
                    Cookies.set("user", JSON.stringify(data.user), { expires: 30 });
                } else {
                    toast.error("User is not verified");
                }
            })
            .catch((err) => {
                toast.error("Something went wrong", err.message);
            });

        setLoading(false);
    }

    return (
        <>
            {loading ? <Loading /> : null}
            <Navbar />

            <div className="gen-cont">
                <div className="back-img">
                    <div className="page-cont">
                        <h2><img src="/check.svg" />Meeting Has Been Successfully Registered !</h2>
                        <p>One of our assistants will contact you shortly to assist you with the next steps in your journey</p>

                        <div className="info-cards">
                            <div className="info-card">
                                <h3>Full Name</h3>
                                <p>{user?.name}</p>
                            </div>
                            <div className="info-card">
                                <h3>Study Level</h3>
                                <p>{user?.level?.title}</p>
                            </div>
                            <div className="info-card">
                                <h3>Country Chosen</h3>
                                <p>{user?.country_chosen?.name}</p>
                            </div>
                            <div className="info-card">
                                <h3>Meeting Type</h3>
                                <p>{user?.meetingType[0]}</p>
                            </div>
                            {user?.meetingType[0] === 'Online' ?
                                <div className="info-card double">
                                    <h3>Meeting Link</h3>

                                    <p className="link">{user?.meetingUrl ? (
                                        <>
                                            <Link href={user.meetingUrl} target="_blank" className="link">{user?.meetingUrl}
                                                <IoOpenOutline />
                                            </Link>
                                        </>
                                    ) : (
                                        <span>No link available</span>
                                    )}</p>

                                </div> :
                                <div className="info-card double">
                                    <h3>Meeting Location</h3>

                                    <p className="link">{user?.meetingLocation ? (
                                        <>
                                            <Link href={user.meetingLocation} target="_blank" className="link">{user?.meetingLocation}
                                                <IoOpenOutline />
                                            </Link>
                                        </>
                                    ) : (
                                        <span>Rabat , St 24 App 242 , Agdal 11000</span>
                                    )}</p>

                                </div>}
                            <div className="info-card double">
                                <h3>Meeting Date & Hour</h3>
                                <p>{user?.meetingDate + ' at ' + user?.meetingTime} {parseFloat(user?.meetingTime.slice(0, 1)) > 12 ? 'AM' : 'PM'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}