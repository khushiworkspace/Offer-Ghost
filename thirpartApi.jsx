
import axios from "axios";


export const companyname = async (name) => {

  const options = {
    method: 'GET',
    url: `https://autocomplete.clearbit.com/v1/companies/suggest?query=:${name}`,
    // headers: {
    //   'Authorization': 'Bearer sk_ab56f73738a70c42eaf25732c1077ab9',
    // }
    
  }
    try {
      
      const response = await axios.request(options)
   
      return response
 
    } catch (error) {
      //console.log('error',error);
      return error;
    }
  };

  export const CompanyEmployessRange = async (inputValue) => {
    ////console.log("inputValue",inputValue)
    const options = {
      method: 'GET',
      url: `https://discovery.clearbit.com/v1/companies/search?query=name:'${inputValue}'&limit=5&sort=alexa_asc&page_size=5&page=1`,
      headers: {
        'Authorization': 'Bearer sk_d36dfa030a8eb00ea452c902484511ee',
        //pk_b09b22c8dba41c4d9828625e3dc429b6
        //sk_ac5a23d4625fbdc5c29136b3d5ff41a8
      }
      
    }
      try {
        
        const response = await axios.request(options)
       // //console.log("response1234",response)
        return response
   
      } catch (error) {
        //console.log('error',error);
        return error;
      }
    };
  

export const companyData = async (name) => {

  const options = {
    method: 'GET',
    url: 'https://linkedin-api8.p.rapidapi.com/get-company-details',
    params: {username: `${name}`},
    headers: {
      'X-RapidAPI-Key': '4895bc09damsha686117fbb5cab8p12b5dejsn57a9f34fa4d0',
      'X-RapidAPI-Host': 'linkedin-api8.p.rapidapi.com'
    }
  };

  try {
      
      const response = await axios.request(options)
      //console.log(response.data);
      return response
 
    } catch (error) {
      //console.log('error',error);
      return error;
    }
  };

  //linkedin api
  // {
  //   "success": true,
  //   "message": "",
  //   "data": {
  //     "id": "1441",
  //     "name": "Google",
  //     "universalName": "google",
  //     "tagline": "",
  //     "description": "A problem isn't truly solved until it's solved for all. Googlers build products that help create opportunities for everyone, whether down the street or across the globe. Bring your insight, imagination and a healthy disregard for the impossible. Bring everything that makes you unique. Together, we can build for everyone.\n\nCheck out our career opportunities at goo.gle/3DLEokh",
  //     "type": "Public Company",
  //     "phone": "",
  //     "Images": {
  //       "logo": "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_400_400/0/1631311446380?e=1710374400&v=beta&t=9gnQkXa0yBqgNAsg5ZXAOFNjzReWaHzt2hFRMm5DInc",
  //       "cover": "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1631311446380?e=1710374400&v=beta&t=_0gnABnVbe_EqmnW25OJ9a8a3eJJBiPUX4scKbZ3nJg"
  //     },
  //     "staffCount": 288074,
  //     "headquarter": {
  //       "geographicArea": "CA",
  //       "country": "US",
  //       "city": "Mountain View",
  //       "postalCode": "94043",
  //       "line1": "1600 Amphitheatre Parkway"
  //     },
  //     "locations": [
  //       {
  //         "geographicArea": "CA",
  //         "country": "US",
  //         "city": "Mountain View",
  //         "postalCode": "94043",
  //         "headquarter": true,
  //         "line1": "1600 Amphitheatre Parkway"
  //       },
  //       {
  //         "geographicArea": "NY",
  //         "country": "US",
  //         "city": "New York",
  //         "postalCode": "10011",
  //         "line1": "111 8th Ave"
  //       },
  //       {
  //         "geographicArea": "North Holland",
  //         "country": "NL",
  //         "city": "Amsterdam",
  //         "postalCode": "1082 MD",
  //         "line1": "Claude Debussylaan 34"
  //       },
  //       {
  //         "geographicArea": "SP",
  //         "country": "BR",
  //         "city": "Sao Paulo",
  //         "postalCode": "04538-133",
  //         "line1": "Avenida Brigadeiro Faria Lima, 3477"
  //       },
  //       {
  //         "geographicArea": "ON",
  //         "country": "CA",
  //         "city": "Kitchener",
  //         "postalCode": "N2H 5G5",
  //         "line1": "51 Breithaupt St"
  //       },
  //       {
  //         "geographicArea": "County Dublin",
  //         "country": "IE",
  //         "city": "Dublin",
  //         "line1": "Barrow Street"
  //       },
  //       {
  //         "geographicArea": "Karnataka",
  //         "country": "IN",
  //         "city": "Bengaluru",
  //         "postalCode": "560016",
  //         "line1": "Old Madras Road"
  //       },
  //       {
  //         "geographicArea": "CO",
  //         "country": "US",
  //         "city": "Boulder",
  //         "postalCode": "80302",
  //         "line1": "2590 Pearl St"
  //       },
  //       {
  //         "geographicArea": "WA",
  //         "country": "US",
  //         "city": "Seattle",
  //         "postalCode": "98103",
  //         "line1": "601 N 34th St"
  //       },
  //       {
  //         "geographicArea": "NSW",
  //         "country": "AU",
  //         "city": "Sydney",
  //         "postalCode": "2009",
  //         "line1": "48 Pirrama Rd"
  //       },
  //       {
  //         "geographicArea": "CA",
  //         "country": "US",
  //         "city": "Irvine",
  //         "postalCode": "92612",
  //         "line1": "19510 Jamboree Rd"
  //       },
  //       {
  //         "geographicArea": "IL",
  //         "country": "US",
  //         "city": "Chicago",
  //         "postalCode": "60607",
  //         "line1": "320 N Morgan St"
  //       },
  //       {
  //         "geographicArea": "Maharashtra",
  //         "country": "IN",
  //         "city": "Mumbai",
  //         "postalCode": "400051",
  //         "line1": "3 Bandra Kurla Complex Road"
  //       },
  //       {
  //         "geographicArea": "National Capital Region",
  //         "country": "PH",
  //         "city": "Taguig City",
  //         "line1": "5th Ave"
  //       },
  //       {
  //         "geographicArea": "Singapore",
  //         "country": "SG",
  //         "city": "Singapore",
  //         "postalCode": "118484",
  //         "line1": "3 Pasir Panjang Rd"
  //       },
  //       {
  //         "geographicArea": "TS",
  //         "country": "IN",
  //         "city": "Hyderabad",
  //         "postalCode": "500084",
  //         "line1": "13"
  //       },
  //       {
  //         "geographicArea": "VIC",
  //         "country": "AU",
  //         "city": "Melbourne",
  //         "postalCode": "3000",
  //         "line1": "90 Collins St"
  //       },
  //       {
  //         "geographicArea": "CA",
  //         "country": "US",
  //         "city": "San Bruno",
  //         "postalCode": "94066",
  //         "line1": "901 Cherry Ave"
  //       },
  //       {
  //         "geographicArea": "Community of Madrid",
  //         "country": "ES",
  //         "city": "Madrid",
  //         "postalCode": "28046",
  //         "line1": "Plaza Pablo Ruiz Picasso"
  //       },
  //       {
  //         "geographicArea": "DC",
  //         "country": "US",
  //         "city": "Washington",
  //         "postalCode": "20001",
  //         "line1": "25 Massachusetts Ave NW"
  //       },
  //       {
  //         "geographicArea": "HR",
  //         "country": "IN",
  //         "city": "Gurugram",
  //         "postalCode": "122001",
  //         "line1": "15"
  //       },
  //       {
  //         "geographicArea": "Bogota, D.C.",
  //         "country": "CO",
  //         "city": "Bogota",
  //         "postalCode": "110221",
  //         "line1": "Carrera 11A 94-45"
  //       },
  //       {
  //         "geographicArea": "Hong Kong",
  //         "country": "HK",
  //         "city": "Wan Chai",
  //         "line1": "2 Matheson St"
  //       },
  //       {
  //         "geographicArea": "VA",
  //         "country": "US",
  //         "city": "Reston",
  //         "postalCode": "20190",
  //         "line1": "1875 Explorer St"
  //       },
  //       {
  //         "geographicArea": "ON",
  //         "country": "CA",
  //         "city": "Toronto",
  //         "postalCode": "M5H 2G4",
  //         "line1": "111 Richmond St W"
  //       },
  //       {
  //         "geographicArea": "CA",
  //         "country": "US",
  //         "city": "San Francisco",
  //         "postalCode": "94105",
  //         "line1": "345 Spear St"
  //       },
  //       {
  //         "geographicArea": "MA",
  //         "country": "US",
  //         "city": "Cambridge",
  //         "postalCode": "02142",
  //         "line1": "355 Main St"
  //       },
  //       {
  //         "geographicArea": "Lomb.",
  //         "country": "IT",
  //         "city": "Milan",
  //         "postalCode": "20124",
  //         "line1": "Via Federico Confalonieri, 4"
  //       },
  //       {
  //         "geographicArea": "England",
  //         "country": "GB",
  //         "city": "London",
  //         "postalCode": "WC2H 8AG",
  //         "line1": "St Giles High Street"
  //       },
  //       {
  //         "geographicArea": "TX",
  //         "country": "US",
  //         "city": "Austin",
  //         "postalCode": "78759",
  //         "line1": "9606 N Mopac Expy"
  //       },
  //       {
  //         "geographicArea": "CA",
  //         "country": "US",
  //         "city": "Los Angeles",
  //         "postalCode": "90291",
  //         "line1": "340 Main St"
  //       },
  //       {
  //         "geographicArea": "Community of Madrid",
  //         "country": "ES",
  //         "city": "Madrid",
  //         "postalCode": "28020",
  //         "line1": "Plaza Pablo Ruiz Picasso"
  //       },
  //       {
  //         "geographicArea": "MI",
  //         "country": "US",
  //         "city": "Ann Arbor",
  //         "postalCode": "48105",
  //         "line1": "2300 Traverwood Dr"
  //       },
  //       {
  //         "geographicArea": "Santiago Metropolitan",
  //         "country": "CL",
  //         "city": "Las Condes",
  //         "postalCode": "7550000",
  //         "line1": "Avenida Costanera Sur"
  //       },
  //       {
  //         "geographicArea": "GA",
  //         "country": "US",
  //         "city": "Atlanta",
  //         "postalCode": "30309",
  //         "line1": "10 10th St NE"
  //       },
  //       {
  //         "geographicArea": "MA",
  //         "country": "PL",
  //         "city": "Warsaw",
  //         "postalCode": "00-125",
  //         "line1": "ulica Emilii Plater 53"
  //       },
  //       {
  //         "geographicArea": "Karnataka",
  //         "country": "IN",
  //         "city": "Bengaluru",
  //         "postalCode": "560016",
  //         "line1": "3 Swamy Vivekananda Road"
  //       },
  //       {
  //         "geographicArea": "WA",
  //         "country": "US",
  //         "city": "Kirkland",
  //         "postalCode": "98033",
  //         "line1": "777 6th St S"
  //       },
  //       {
  //         "geographicArea": "BY",
  //         "country": "DE",
  //         "city": "Munich",
  //         "postalCode": "80636",
  //         "line1": "Erika-Mann-Strasse 33"
  //       },
  //       {
  //         "geographicArea": "CDMX",
  //         "country": "MX",
  //         "city": "Miguel Hidalgo",
  //         "postalCode": "11000",
  //         "line1": "Montes Urales"
  //       },
  //       {
  //         "geographicArea": "Buenos Aires Autonomous City",
  //         "country": "AR",
  //         "city": "Buenos Aires City",
  //         "postalCode": "1107",
  //         "line1": "Avenida Alicia Moreau de Justo 350"
  //       },
  //       {
  //         "geographicArea": "IdF",
  //         "country": "FR",
  //         "city": "Paris",
  //         "postalCode": "75009",
  //         "line1": "8 Rue de Londres"
  //       },
  //       {
  //         "geographicArea": "Tel Aviv",
  //         "country": "IL",
  //         "city": "Tel Aviv-Yafo",
  //         "postalCode": "67891",
  //         "line1": "Yigal Allon 98"
  //       },
  //       {
  //         "geographicArea": "BE",
  //         "country": "DE",
  //         "city": "Berlin",
  //         "postalCode": "10117",
  //         "line1": "Unter den Linden 14"
  //       },
  //       {
  //         "geographicArea": "HH",
  //         "country": "DE",
  //         "city": "Hamburg",
  //         "postalCode": "20354",
  //         "line1": "ABC-Strasse 19"
  //       },
  //       {
  //         "geographicArea": "TX",
  //         "country": "US",
  //         "city": "Frisco",
  //         "postalCode": "75034",
  //         "line1": "6175 Main St"
  //       },
  //       {
  //         "geographicArea": "ZH",
  //         "country": "CH",
  //         "city": "Zurich",
  //         "postalCode": "8002",
  //         "line1": "Brandschenkestrasse 110"
  //       },
  //       {
  //         "geographicArea": "Stockholm County",
  //         "country": "SE",
  //         "city": "Stockholm",
  //         "postalCode": "111 22",
  //         "line1": "Kungsbron 2"
  //       }
  //     ],
  //     "industries": [
  //       "Software Development"
  //     ],
  //     "specialities": [
  //       "search",
  //       "ads",
  //       "mobile",
  //       "android",
  //       "online video",
  //       "apps",
  //       "machine learning",
  //       "virtual reality",
  //       "cloud",
  //       "hardware",
  //       "artificial intelligence",
  //       "youtube",
  //       "software"
  //     ],
  //     "website": "https://goo.gle/3DLEokh",
  //     "founded": null,
  //     "callToAction": {
  //       "callToActionType": "VIEW_WEBSITE",
  //       "visible": true,
  //       "callToActionMessage": {
  //         "textDirection": "USER_LOCALE",
  //         "text": "Visit website"
  //       },
  //       "url": "https://goo.gle/3DLEokh"
  //     },
  //     "followerCount": 31046555,
  //     "staffCountRange": "10001+",
  //     "crunchbaseUrl": "https://www.crunchbase.com/organization/google"
  //   }
  // }

  //clearBit
//   {
//     "total": 5,
//     "page": 1,
//     "results": [
//         {
//             "id": "f7a39e5f-4e8f-4b9d-a2c8-99a1250c7c1c",
//             "name": "Sumeru",
//             "legalName": null,
//             "domain": "sumeru.us",
//             "domainAliases": [
//                 "sumerusolutions.com",
//                 "sumeru.com",
//                 "sumeru.group"
//             ],
//             "site": {
//                 "phoneNumbers": [],
//                 "emailAddresses": []
//             },
//             "category": {
//                 "sector": "Industrials",
//                 "industryGroup": "Commercial & Professional Services",
//                 "industry": "Professional Services",
//                 "subIndustry": "Consulting",
//                 "gicsCode": "20202020",
//                 "sicCode": "87",
//                 "sic4Codes": [
//                     "8742",
//                     "7371"
//                 ],
//                 "naicsCode": "54",
//                 "naics6Codes": [
//                     "541613",
//                     "541511"
//                 ],
//                 "naics6Codes2022": [
//                     "541613",
//                     "541511"
//                 ]
//             },
//             "tags": [
//                 "Information Technology & Services",
//                 "Marketing",
//                 "Consulting",
//                 "Professional Services",
//                 "Agency",
//                 "Computer Programming",
//                 "Software",
//                 "Computers",
//                 "E-commerce",
//                 "Consulting & Professional Services",
//                 "Technology",
//                 "B2B",
//                 "B2C",
//                 "SAAS"
//             ],
//             "description": "Sumeru is a global conglomerate providing a range of specialist services and consultancy across IT Talent Augmentation and Digital Transformation. Since 2002, we have helped businesses around the world innovate and transform their digital ecosystems. O...",
//             "foundedYear": 2002,
//             "location": "15th St NW, Washington, DC, USA",
//             "timeZone": "America/New_York",
//             "utcOffset": -5,
//             "geo": {
//                 "streetNumber": null,
//                 "streetName": "15th Street Northwest",
//                 "subPremise": null,
//                 "streetAddress": "15th Street Northwest",
//                 "city": "Washington",
//                 "postalCode": null,
//                 "state": "District of Columbia",
//                 "stateCode": "DC",
//                 "country": "United States",
//                 "countryCode": "US",
//                 "lat": 38.9091836,
//                 "lng": -77.03455629999999
//             },
//             "logo": "https://logo.clearbit.com/sumeru.us",
//             "facebook": {
//                 "handle": null,
//                 "likes": null
//             },
//             "linkedin": {
//                 "handle": "company/sumeru-inc"
//             },
//             "twitter": {
//                 "handle": null,
//                 "id": null,
//                 "bio": null,
//                 "followers": null,
//                 "following": null,
//                 "location": null,
//                 "site": null,
//                 "avatar": null
//             },
//             "crunchbase": {
//                 "handle": null
//             },
//             "emailProvider": false,
//             "type": "private",
//             "ticker": null,
//             "identifiers": {
//                 "usEIN": null,
//                 "usCIK": null
//             },
//             "phone": null,
//             "metrics": {
//                 "alexaUsRank": null,
//                 "alexaGlobalRank": 1144145,
//                 "trafficRank": "low",
//                 "employees": 540,
//                 "employeesRange": "251-1K",
//                 "marketCap": null,
//                 "raised": null,
//                 "annualRevenue": null,
//                 "estimatedAnnualRevenue": "$50M-$100M",
//                 "fiscalYearEnd": null
//             },
//             "indexedAt": "2024-01-02T04:21:11.456Z",
//             "tech": [
//                 "microsoft_office_365",
//                 "apache",
//                 "wordpress",
//                 "microsoft_exchange_online",
//                 "outlook",
//                 "godaddy_nameserver",
//                 "hubspot"
//             ],
//             "techCategories": [
//                 "productivity",
//                 "web_servers",
//                 "content_management_system",
//                 "email_hosting_service",
//                 "web_hosting",
//                 "marketing_automation"
//             ],
//             "parent": {
//                 "domain": null
//             },
//             "ultimateParent": {
//                 "domain": null
//             }
//         },




//     ]
// }

// {
//   "total": 0,
//   "page": 1,
//   "results": []
// }

// {
//   "error": {
//   "type": "over_quota",
//   "message": "Your account is over its quota. Please contact support to upgrade"
//   }
// }