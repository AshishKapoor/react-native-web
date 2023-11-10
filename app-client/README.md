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
<img width="448" alt="Screenshot 2023-11-10 at 5 04 48 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/f224a2da-54e4-426c-ac36-5ce7d80639ae">
<img width="448" alt="Screenshot 2023-11-10 at 5 04 52 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/5177d63c-a3c5-401a-b43f-9a078e4111e8">
<img width="448" alt="Screenshot 2023-11-10 at 5 04 55 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/6a499875-813e-45a7-b4c5-8390e2f85fb6">


## Web
<img width="1425" alt="Screenshot 2023-11-10 at 3 59 52 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/dbbe350c-5e61-45c4-bde4-e20c16befeee">
<img width="1425" alt="Screenshot 2023-11-10 at 4 00 46 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/a8a2c907-b8e0-46bd-a5db-7fc1a11971cd">

## Android
<img width="574" alt="Screenshot 2023-11-10 at 4 05 18 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/2c480c61-2e7c-463a-b4d1-3d5a7580f3b8">

TODO: Fix - Network requests are blocked on Android using Expo. 
