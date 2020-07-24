'use stric';

import data from './data/searchResults.json'
import countries from './data/countries.json'
console.log(data);

const REQUEST_HOLD_TIME = 1000;

async function searchForCountry(searchText, countryCode) {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            let countryNames = [];
            if(countryCode) {
                countryNames = countries.filter(c => c.code == countryCode);
            }
            console.log('found country', countryNames);
            
            const results = data.filter(d => {
                if (countryCode) {
                    if (countryNames && countryNames.length == 1) {
                        return d.name.toLowerCase().includes(searchText.toLowerCase()) &&
                            countryNames[0].name.toLowerCase().includes(d.country.toLowerCase())
                    } else {
                        return false;
                    }
                }
                else
                    return d.name.toLowerCase().startsWith(searchText.toLowerCase());
            })
            console.log('--------Results------------');
            console.log(results);
            resolve(results);
        }, REQUEST_HOLD_TIME)
    });
}

async function getCountries() {
    return new Promise((resolve, _reject) => {
        setTimeout(() => {
            console.log('Countries ------------');
            console.log(countries);
            resolve(countries);
        }, REQUEST_HOLD_TIME)
    })
}

export const defaultHeaders = {
    "Content-Type": "application/json",
    "Authorization": ""
};

export default async function Api({
    url,
    method = 'GET',
    data,
    headers = defaultHeaders,
}) {
    console.log(`-------request url------${url}`);
    console.log('------request data-------');
    console.log(data);
    if (url === 'searchcountry') {
        console.log('invokeing call')
        return searchForCountry(data.searchText, data.countryCode);
    } else if (url === 'getcountries') {
        return getCountries();
    } else {
        return []
    }
}

