import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        const { isActive, content, companyInfo } = this.props;
        return (
            <div className={"modal"}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Company Information</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        {content}
                    </section>
                    
                </div>
            </div>
        )
    }
}

export default Modal;