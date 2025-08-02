import { NextResponse } from 'next/server'
import { client } from '../../lib/sanityClient' // adjust path as needed

export async function POST(req) {
    const body = await req.json()

    try {
        const result = await client.create(body)
        return NextResponse.json({ success: true, result })
    } catch (error) {
        console.error('Sanity create error:', error)
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}
