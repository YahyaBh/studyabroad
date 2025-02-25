// src/app/consultation/verified/[id]/page.js
export default function VerifiedConsultation({ params }) {
    const { id } = params;

    return (
        <div>
            <h1>Verified Consultation</h1>
            <p>User ID: {id}</p>
        </div>
    );
}