import EmailFilter from "../../MisterEmail/cmps/EmailFilter.jsx"
const { Link } = ReactRouterDOM


export class EmailTabs extends React.Component {


    render() {
        return (
            <section className="tabs flex direction-column">
                <Link to="/memail/compose" className="email-decoration-none"><span className="tab">Compose</span></Link>
              <span className="tab"> <EmailFilter onFilterBy={this.props.onFilterBy} /></span> 

            </section>
        )
    }
}