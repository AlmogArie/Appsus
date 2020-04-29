const { Link } = ReactRouterDOM
import emailService from "../emailServices/emailService.js"
import EmailTabs from '../cmps/EmailTabs.jsx'

export default class EmailDetails extends React.Component {
    state = {
        email: null
    }


    componentDidMount() {
        const id = this.props.match.params.theEmailId
        this.loadEmail()
        this.onRead(id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.theEmailId !== this.props.match.params.theEmailId) {
            this.loadEmail()
        }
    }

    loadEmail = () => {
        const id = this.props.match.params.theEmailId
        emailService.getNextPrevEmail(id)
            .then(res => {
                this.prevNext = res
                emailService.getById(id)
                    .then(email => this.setState({ email }))
            })
    }




    removeEmail = () => {
        emailService.remove(this.state.email.id)
            .then(() => {
                this.props.history.push('/memail')
            })
            .catch(err => {
                alert('somthing went wrong')
                console.log('ERR', err);
            })
    }


    onRead = () => {
        const id = this.props.match.params.theEmailId
        emailService.setIsRead(id)
    }

    onStarred = () => {
        const id = this.props.match.params.theEmailId
        emailService.setIsStarred(id)
        this.loadEmail()
    }


    render() {

        const { email } = this.state
        return (email &&
            <section className="email-details">
                {email && < div >
                    <h2>From: {email.from}</h2>
                    <h2>Subject: {email.subject}</h2>
                    <p>{email.body}</p>
                    <img onClick={this.onStarred} className="star-img" src={`Apps/misterEmail/assets/img/star${email.isStarred ? 'Gold' : 'black'}.png`} />
                    <div className="btns flex space-around">
                    <button className="btn-delete" onClick={this.removeEmail}>Delete</button>
                    <button><Link to='/memail' className="email-decoration-none">Back</Link></button>
                    {this.prevNext && <div>
                        <button ><Link to={`/memail/${this.prevNext.prevId}`} className="email-decoration-none" >Previuos Email</Link></button>
                        <button ><Link to={`/memail/${this.prevNext.nextId}`} className="email-decoration-none" >Next Email</Link></button>
                    </div>
                    }
                    </div>
                </div >
                }
            </section>

        )
    }
}