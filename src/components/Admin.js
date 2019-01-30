import React from 'react'

class Admin extends React.Component {
    render() {
        return (
            <footer>
            <button onClick={this.props.loadExample}>Remplir</button>
            </footer>
        )
    }
}

export default Admin 