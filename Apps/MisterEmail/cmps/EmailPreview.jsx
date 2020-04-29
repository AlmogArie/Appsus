const { Link } = ReactRouterDOM


export default function EmailPreview(props) {
    const { email } = props
    return (
        <Link to={`/memail/${email.id}`} className="email-decoration-none">
            <article className={(email.isRead) ? "email-preview decoration-none is-read" : "email-preview decoration-none"}>
                <h2 >From: {email.from}</h2>
                <p className="subject email-decoration-none">Title: {email.subject}</p>
                <p className="txt-body email-decoration-none">{email.body}</p>
                <p className="email-decoration-none">Recived: {email.sentAt}</p>
                <img  src={`Apps/misterEmail/assets/img/star${email.isStarred ? 'Gold' : 'black'}.png`} />
            </article>
        </Link>
    )
}
