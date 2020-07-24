import React, { Fragment } from 'react';
import Api from '../components/fetch'

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResults: [],
      countries: [],
      selectedCountry: '',
    }

    this.searchTextChange = this.searchTextChange.bind(this);
    this.loadCountries = this.loadCountries.bind(this);
    this.setCountry = this.setCountry.bind(this);
    this.searchForCompanies = this.searchForCompanies.bind(this);
    
  }

  componentDidMount() {
    this.loadCountries();
  }

 

  loadCountries = () => {
    Api({url: 'getcountries'})
    .then(countries => {
      this.setState({countries : countries});
    })
  }

  setCountry = (e) => {
    if(e.target.value === 'Select Country') {
      this.setState({selectedCountry: ''});
      return;
    }
    this.setState({selectedCountry: e.target.value});
    if(this.state.searchText) { this.searchForCompanies(this.state.searchText, e.target.value); }
  }

  searchForCompanies(searchText, countryCode) {
    Api({ url: 'searchcountry', data: { searchText: searchText, 
      countryCode: countryCode } })
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
    return (<Fragment>
      <div className="select">
        <select onChange={this.setCountry}>
          <option>Select country</option>
          {
            countries && countries.length>0 && countries.map((c,i) => {
              return <option key={i.toString()} value={c.code}>{c.name}</option>
            })
          }
        </select>
      </div>
      <div className="field">
        <div className="control">
          <input className="input is-primary" onChange={this.searchTextChange} type="text" placeholder="Search" />

        </div>

      </div>
      <div>
        {
          this.state.searchText && (
            <p>Search Results for {this.state.searchText}</p>
          )
        }
      </div>
      <div>
        {
          companies && companies.length > 0 && companies.map((c, i) => {
            return (
              <Fragment key={i.toString()}>
                <div>
                <div>{c.name}</div>
                <div>{c.address}</div>
                </div>
                
              </Fragment>
            )
          })

        }
      </div>
    </Fragment>);
  }
}

export default SearchPage;