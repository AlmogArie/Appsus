const { Link } = ReactRouterDOM


import emailService from '../emailServices/emailService.js'
import EmailList from '../cmps/EmailList.jsx'
import { EmailTabs } from '../cmps/EmailTabs.jsx'



export class Email extends React.Component {
    state = {
        emails: null,
        searchBy: null,
        filterBy:null,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        emailService.query(this.state.filterBy)
            .then(emails => {
                this.setState({ emails })
            })
    }

    onSelectEmail = (selectedEmail) => {
        this.setState({ selectedEmail })
    }

    onSetSearch = (searchBy) => {
        this.setState({ searchBy }, () => this.loadEmails())
    }

    onFilterBy = (value)=>{
        this.setState({filterBy:value}, ()=>this.loadEmails());
    }



    render() {
        const { emails } = this.state
        return (
            <section className="email-main flex direction-column">
                <div className="tab-list flex space-around">
                {<EmailTabs className="email-tabs" onFilterBy={this.onFilterBy} />}
                {emails && <EmailList emails={emails} />}
                </div>
            </section>
        )
    }

} 