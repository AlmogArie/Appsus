import EmailPreview from '../cmps/EmailPreview.jsx'

export default function EmailList(props) {
    return (
        <div className="email-list">
            {props.emails.map(email => <EmailPreview key={email.id} email={email}/>)}
        </div>
    )
}