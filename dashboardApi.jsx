import axios from "axios";
import { checkAccessToken } from "../common/Token";
import api from "./axiosInstance";
import { server } from "./server";

export const getStatistics = async () => {
  try {
    const response = await api.get(`${server}/v1/global/get-statistics`);
    const response1 = checkAccessToken(response);
    return response1?.data;
  } catch (error) {
    return error?.message;
  }
};

export const getCompanyStatistics = async () => {
  try {
    const response = await api.get(`${server}/v1/BusinessOwner/company-statics`);
    const response1 = checkAccessToken(response);
    return response1?.data;
  } catch (error) {
    return error?.message;
  }
};

export const getAllCountries = async () => {
  var config = {
    method: 'get',
    url: 'https://api.countrystatecity.in/v1/countries',
    headers: {
      'X-CSCAPI-KEY': 'API_KEY'
    }
  };
  
  axios(config)
  .then(function (response) {
    //need to search or return the list of data
    // reponse example
    // [
    //   {
    //     "id": 101,
    //     "name": "India",
    //     "iso2": "IN"
    //   },
    //   ...
    // ]
  })
  .catch(function (error) {
    //console.log(error);
    // {
    //   "error'": "Unauthorized. You shouldn't be here."
    // }
  });
}

export const getCountryDetails = (countryCode) => {
  var config = {
    method: 'get',
    url: `https://api.countrystatecity.in/v1/countries/${countryCode}`,
    headers: {
      'X-CSCAPI-KEY': 'API_KEY'
    }
  };
  
  axios(config)
  .then(function (response) {
    // {
    //   "id": 101,
    //   "name": "India",
    //   "iso3": "IND",
    //   "iso2": "IN",
    //   "phonecode": "91",
    //   "capital": "New Delhi",
    //   "currency": "INR",
    //   "native": "भारत",
    //   "emoji": "🇮🇳",
    //   "emojiU": "U+1F1EE U+1F1F3"
    // }
  })
  .catch(function (error) {
    //console.log(error);
  });
}

export const getAllStateByCountry = (countryCode) => {

  var config = {
    method: 'get',
    url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
    headers: {
      'X-CSCAPI-KEY': 'API_KEY'
    }
  };
  
  axios(config)
  .then(function (response) {
    // [
    //   {
    //     "id": 4008,
    //     "name": "Maharashtra",
    //     "iso2": "MH"
    //   },
    //   ...
    // ]
  })
  .catch(function (error) {
    //console.log(error);
  });
}

export const getStateDetails = (countryCode, stateCode) => {
  var config = {
    method: 'get',
    url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}`,
    headers: {
      'X-CSCAPI-KEY': 'API_KEY'
    }
  };
  
  axios(config)
  .then(function (response) {
    // {
    //   "id": "4008,",
    //   "name": "Maharashtra,",
    //   "country_id": "101,",
    //   "country_code": "IN,",
    //   "iso2": "MH"
    // }
  })
  .catch(function (error) {
    //console.log(error);
  });
}

export const getCitiesByStateAndCountry = (countryCode, stateCode) => {
  var config = {
    method: 'get',
    url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
    headers: {
      'X-CSCAPI-KEY': 'API_KEY'
    }
  };
  
  axios(config)
  .then(function (response) {
    // [
    //   {
    //     "id": 133024,
    //     "name": "Mumbai"
    //   },
    //   ...
    // ]
  })
  .catch(function (error) {
    //console.log(error);
  });
}

export const getCitiesByCountry = async (countryCode) => {

var config = {
  method: 'get',
  url: `https://api.countrystatecity.in/v1/countries/${countryCode}/cities`,
  headers: {
    'X-CSCAPI-KEY': 'NEZwVExrWFVoVlRjNWw0dHpnTVRST01MNUZHbE9tcWpPRHVlUlhTZg=='
  }
};

await axios(config)
.then(function (response) {
  // [
  //   {
  //     "id": 133024,
  //     "name": "Mumbai",
  //   },
  //   ...
  // ]
  const varb = JSON.stringify(response.data);
  return varb;
})
.catch(function (error) {
  //console.log(error);
});
}

export const searchCityZipCode = async (code,country) => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://api.geonames.org/postalCodeLookupJSON?postalcode=${code}&country=${country}&username=sumerudigitalsm`,
    headers: { }
  };
  
  await axios.request(config)
  .then((response) => {
    console.log('geoname',JSON.stringify(response.data));
    return response.data
  })
  .catch((error) => {
    console.log(error);
    throw error
  });
};