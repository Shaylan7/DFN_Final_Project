# Donate Freight Network 

Donate Freight Network is an app designed to reduce waste in the trucking industry as well as improve carrier's lives. When carrier's truck load of product is rejected at delivery, Donate Freight Network connects them with the closest donation facility set up to receive the type of product the carrier is loaded with. DF functions similar to a store locator using Google Maps Distance Matrix API. 

[Link to App](https://donate-freight-network.herokuapp.com/).


<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

## To Use 

Log in with test account credentials to avoid registering a new account. 

Username: testaccount@gmail.com
Password: Hellotest123 

### Locally 
1. You will need to install and run Docker. - Use [Homebrew][] on macOS: `brew install --cask docker` - [Follow the instructions on the Docker website][docker-www]
2. Fork and clone this repo
3. Go to [Google Maps Platform](https://developers.google.com/maps/documentation/distance-matrix/overview) to create an API key. From there you can read documentation and navigate your way to [Set up in Cloud Console](https://developers.google.com/maps/documentation/distance-matrix/cloud-setup) where you will create a project and enable your API key. 
4. Create a .env file in the app/ directory with the following line
  
 ```
REACT_APP_GOOGLE_MAPS_API_KEY=<copy/paste your api key here>
REACT_APP_CLIENT_ID=<copy/paste your client id here>

```

5. In your CLI, from the root directory, run the command npm run db:init to set up the database
6. From your root directory, run the command npm start
7. Donate Freight Network will be running on localhost:3000



### Technologies

* Postgresql Database
* Express
* React.js
* Node.js
* Google Maps Distance Matrix API 
* Bootstrap
* OAuth 2.0 API



### MVP

Users should be able to...

* Log in with a google account or a registered account 
* Search near by donation facilities by entering their address, city or zip code. 
* Filter donation sites by the type of product they accept 
* Submit a new donation 
* Review the donation tracker page for dynamic donation data 


### Future Iterations 
With more time users would be able to...

* Favorite specific facilities 
* When using the search functionality carriers would be given the option of selecting “current location” instead of entering an address manually. 
