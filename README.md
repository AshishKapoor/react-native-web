# React Native Web

## 1. Goal
A React Native app that displays and filters a list of users.

## 2. Requirements
- App should display a list of users that are returned by the listZellerCustomers query. The graphql schema you will need, and the connection details can be found in aws-exports.js and schema.gql
- App should have a list of selectable user types that include Admin and Manager. Selecting a user type should perform a query against listZellerCustomers using that user type as a filter. 
- App should run on IOS or android
- Implement App navigation with a second, empty homescreen
- (Todo) Implemenent a text search box that filters users by name
- Implement a pull to refresh on the list
