# Task Description
Implement the route that is responsible for showing the user's bookmarks by sending a request to API with the JWT token that contains the user's data (id, name) and then the response of that request will be the list of books that the user bookmarked grouped in JSON file that contains every book id and name.

## Database Schema 
Database Schema file: [BookmarksSchema.sql](BookmarksSchema.sql).

![Schema Picture](./DatabaseDigram.png)
## Usage
### Token For Test
Safe token for testing: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJuYW1lIjoibWFobW91ZCJ9.h1HRBtj0R_UZ0CIWsyZ4HNXi9s9wOiBcOT6exT5YzBA
### ENV Variables
```
mysqlHost=localhost
mysqlUser=root
mysqlPass='YOUR DATABASE PASSWORD'
mysqlDB=taskimp
mysqlPort=3306
jwtSecret=sic-mundus-creatus-est
```
### Run
```
cd functions/
firebase serve
```
### Postman
![Run Picture](./TestRoutePostman.png)