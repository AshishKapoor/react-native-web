# Zeller React Native Client App

## Features
- Displays a list of users that are returned by the listZellerCustomers query. The graphql schema you will need, and the connection details can be found in aws-exports.js and schema.gql.
- Has a list of selectable user types that include Admin and Manager. Selecting a user type should perform a query against listZellerCustomers using that user type as a filter.
- Runs on iOS or android and Web.
- Designs for the user feature includes a drawers style navigation.

## Bonus Points

These features are absolutely not required, however if you finish your project eary and wish to continue, here are some ideas

- Implemented App navigation with a second, empty homescreen
- Implemented a pull to refresh on the list
- (TODO) Implement a text search box that filters users by name

### Steps to run the project

change your present directory on terminal to 
`cd app-client`

then run the following commands

`yarn install`

For iOS build
`yarn run ios`

For Web
`yarn run web`

For Android
`yarn run android`

### Screenshots
## iOS
<img width="448" alt="Screenshot 2023-11-10 at 5 04 48 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/6832b2bd-048d-4662-8d23-139a189db193">
<img width="448" alt="Screenshot 2023-11-10 at 5 04 52 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/823b2d1d-5a62-4b76-bb84-d1ce2e6f182e">
<img width="448" alt="Screenshot 2023-11-10 at 5 04 55 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/38c809ce-6b05-4d2e-9a93-b757c4a04063">


## Web
<img width="1425" alt="Screenshot 2023-11-10 at 3 59 52 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/dbbe350c-5e61-45c4-bde4-e20c16befeee">
<img width="1425" alt="Screenshot 2023-11-10 at 4 00 46 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/a8a2c907-b8e0-46bd-a5db-7fc1a11971cd">

## Android
<img width="574" alt="Screenshot 2023-11-10 at 4 05 18 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/2c480c61-2e7c-463a-b4d1-3d5a7580f3b8">

TODO: Fix - Network requests are blocked on Android using Expo. 
