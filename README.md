# geoLocator

Code for [Cloud Functions](https://cloud.google.com/functions/) to geo locate a user.

## Example output [(Link)](https://us-central1-private-social-media.cloudfunctions.net/locate)

```javascript
{
  "range": [
    2839088128,
    2839088383
  ], //<low bound of IP block>, <high bound of IP block>
  "country": "MX", // 2 letter ISO-3166-1 country code
  "region": "CMX", // Up to 3 alphanumeric variable length characters as ISO 3166-2 code
                   // For US states this is the 2 letter state
                   // For the United Kingdom this could be ENG as a country like “England
                   // FIPS 10-4 subcountry code
  "eu": "0",  // 1 if the country is a member state of the European Union, 0 otherwise.
  "timezone": "America/Mexico_City", // Timezone from IANA Time Zone Database
  "city": "Mexico City", // This is the full city name
  "ll": [
    19.4342,
    -99.1386
  ], // The latitude and longitude of the city
  "metro": 0, // Metro code
  "area": 1000 // The approximate accuracy radius (km), around the latitude and longitude
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
