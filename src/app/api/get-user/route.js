//get the user informations from Sanity

import { client } from "@/app/lib/sanityClient";

export async function POST(request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id");

    const query = `*[_type == "user" && _id == "${userId}"]{
    _id,
    name,
    email,
    phone,
    verified,
    payment_method,
    meetingType,
    meetingUrl,
    meetingDate,
    meetingTime,
    level ->{
        title,
        _id
    },
    country_chosen -> {
        name,
        _id
    },
    field ,
    grade,
    }`;

    const user = await client.fetch(query);

    return new Response(JSON.stringify({ user: user[0] }), {
        status: 200,
    })
}