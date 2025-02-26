
const EmailVerificationTemplate = ({ verificationLink }) => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <img
                    src="https://studyabroadagency.com/logo.png"
                    alt="StudyAbroad Agency Logo"
                    style={styles.logo}
                />
            </div>

            <div style={styles.content}>
                <h1 style={styles.heading}>Verify Your Email Address</h1>
                <p style={styles.text}>
                    Thank you for signing up with StudyAbroad Agency! To complete your registration, please verify your email address by clicking the button below:
                </p>
                <a href={verificationLink} style={styles.button}>
                    Verify Email
                </a>
                <p style={styles.text}>
                    If you did not sign up for an account with StudyAbroad Agency, please ignore this email.
                </p>
            </div>

            <div style={styles.footer}>
                <p style={styles.footerText}>&copy; 2023 StudyAbroad Agency. All rights reserved.</p>
                <p style={styles.footerText}>123 Education Street, Knowledge City, World 12345</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        padding: '20px 0',
    },
    logo: {
        maxWidth: '150px',
    },
    content: {
        padding: '20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '24px',
        color: '#333333',
        marginBottom: '20px',
    },
    text: {
        fontSize: '16px',
        color: '#555555',
        lineHeight: '1.6',
    },
    button: {
        display: 'inline-block',
        margin: '20px 0',
        padding: '12px 24px',
        fontSize: '16px',
        color: '#ffffff',
        backgroundColor: '#007bff',
        borderRadius: '4px',
        textDecoration: 'none',
    },
    footer: {
        textAlign: 'center',
        padding: '20px',
        fontSize: '14px',
        color: '#888888',
    },
    footerText: {
        margin: '0',
    },
};

export default EmailVerificationTemplate;