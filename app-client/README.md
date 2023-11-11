# Zeller React Native Client App

## Features
- Displays a list of users that are returned by the listZellerCustomers query. The graphql schema you will need, and the connection details can be found in aws-exports.js and schema.gql.
- Has a list of selectable user types that include Admin and Manager. Selecting a user type should perform a query against listZellerCustomers using that user type as a filter.
- Runs on iOS, android and Web.
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
<img width="411" alt="Screenshot 2023-11-11 at 4 28 56 AM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/9b928d75-c434-4feb-bdda-355c08f6d366">
<img width="411" alt="Screenshot 2023-11-11 at 4 29 06 AM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/2bebd030-4fd7-42aa-81cb-a52a37551cb9">
<img width="411" alt="Screenshot 2023-11-11 at 4 29 00 AM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/25c2819e-defb-4f94-9bad-cd892854b3ba">



## Web
<img width="612" alt="Screenshot 2023-11-11 at 4 09 25 AM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/a4afdd02-8ce3-4680-a702-e07bf3587749">

<img width="1425" alt="Screenshot 2023-11-10 at 3 59 52 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/523ffd5a-fbc0-4cb0-bd31-6b33130407e3">


## Android
Note: For Android graphql URL should point to the IP address instead of localhost.
<img width="530" alt="Screenshot 2023-11-11 at 12 33 28 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/c0c1f4ad-d6ad-4ec6-8944-e1991c6eb311">

<img width="574" alt="Screenshot 2023-11-10 at 4 05 18 PM" src="https://github.com/AshishKapoor/zeller-rn-codechallenge/assets/5203107/3e111ee4-b559-42bf-a0cb-b1beb46074e1">
