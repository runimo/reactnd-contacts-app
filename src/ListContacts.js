import React, { Component } from 'react'

class ListContacts extends Component {
    render () {
        return (
            <ol className='contact-list'>
                this.props.contacts.map()
            </ol>
        )
    }
}

export default ListContacts