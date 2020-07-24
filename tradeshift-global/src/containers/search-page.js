import React, { Fragment } from 'react';
import Api from '../components/fetch';
import Modal from '../components/modal';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [],
      countries: [],
      selectedCountry: '',
      showModal: false
    }

    this.searchTextChange = this.searchTextChange.bind(this);
    this.loadCountries = this.loadCountries.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.searchForCompanies = this.searchForCompanies.bind(this);
    this.showCompanyInfo = this.showCompanyInfo.bind(this);
  }

  componentDidMount() {
    this.loadCountries();
  }

  showCompanyInfo = () => {

  }

  loadCountries = () => {
    Api({ url: 'getcountries' })
      .then(countries => {
        this.setState({ countries: countries });
      })
  }

  setCountry = (e) => {
    if (e.target.value === 'Please Select') {
      this.setState({ selectedCountry: '' });
      return;
    }
    this.setState({ selectedCountry: e.target.value });
    if (this.state.searchText) { this.searchForCompanies(this.state.searchText, e.target.value); }
  }

  searchForCompanies(searchText, countryCode) {
    Api({
      url: 'searchcountry', data: {
        searchText: searchText,
        countryCode: countryCode
      }
    })
      .then(results => {
        this.setState({ searchResults: results });
      })
  }

  searchTextChange = (e) => {
    this.setState({ searchText: e.target.value });
    this.searchForCompanies(e.target.value, this.state.selectedCountry);
  }

  render() {
    const companies = this.state.searchResults ?? [];
    const countries = this.state.countries ?? [];
    const resultDiv = {
      heigth: 4,
      maxheight: 3,
      overflowx: 'hidden',
      overflowy: 'auto'
    };
    return (<Fragment>
      <Modal />
      <div className="columns">
        <div className="column is-one-fifth">
          <div className="field">
            <div className="control">
              <div className="select is-primary">
                <select onChange={this.setCountry}>
                  <option>Please Select</option>
                  {
                    countries && countries.length > 0 && countries.map((c, i) => {
                      return <option key={i.toString()} value={c.code}>{c.name}</option>
                    })
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column" >
          <div className="field">
            <div className="control">
              <input className="input is-primary" onChange={this.searchTextChange} type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-one-fifth"></div>
        <div className="column">
          {
            this.state.searchText && (
              <p>Search Results for {this.state.searchText}</p>
            )
          }
        </div>
        <div className="column is-one-fifth"></div>
      </div>
      <div className="columns">
        <div className="column is-one-fifth"></div>
        <div className="column">
          <table className="table is-hoverable is-fullwidth">
            <tbody>
              {
                companies && companies.length > 0 && companies.map((c, i) => {
                  return (
                    <Fragment key={i.toString()}>
                      <tr style={{cursor:'pointer'}} onClick={this.showCompanyInfo}>
                        <td>
                          <div className="has-text-weight-bold is-size-7">{c.name}</div>
                          <div className="has-text-weight-normal is-size-7">{c.address}</div>
                        </td>
                      </tr>
                    </Fragment>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="column is-one-fifth"></div>
      </div>
    </Fragment >);
  }
}

export default SearchPage;