import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal = (e) => {
    console.log(e);
    this.props.closeModal && this.props.closeModal(e);
  }

  render() {
    const { showModal, content, companyInfo } = this.props;
    {
      if (!showModal) return null;

      return (
        <Fragment>
          <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Company Information</p>
                <button class="delete" onClick={this.closeModal} aria-label="close"></button>
              </header>
              <section class="modal-card-body">
                
                <div>
                  <p>Company Status: ACTIVE Please Select COMPANY REGISTRATION NUMBER
                  J40-383-2009
                  Search Results for "ACME"...
                  VAT NUMBER
                  US184189151
                  ACME Inc.
                  REGISTERED ADDRESS
                  142 HOLLY LANE HOPEWELL, VA 23860, USA
                  452 Holly Lane Hopewell, IL 23860
                  ACME NitroVentures COUNTRY
                  4 CROSS LANE SCHERERVILLE, IN 46375, USA
                  United States of America
                  ACME Fundation Limited SRL ADDITIONAL STATUS DETAILS
                  15 ROAD UNTURNED, CA 99000, USA
                  Registration Certification Changed
                  Headquarters Expired
                  ACME Global Venture
                  53 PARK LAKE ROAD LOUISIANA, TN 15768, USA
                  COMPANY DESCRIPTION ACME Insurance Ltd.
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                  </p>
                </div>
              </section>

            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default Modal;