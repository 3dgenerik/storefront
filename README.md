# Storefront frontend project

### Start app

    //this start application with default port 4200
    ng serve
    //if you want to use specific port
    ng serve --port <port_number>

### Note

    Don't forget to create tables using db-migrate in my storefront-api backend application. Just do following command:
    //Only if it's necessary you can remove all tables first
    npm run reset

    //create tables
    npm run up



### Scripts

    //necessary scripts
    "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "lint": "ng lint",
        "prettier": "prettier --config .prettierrc src/**/*.ts --write"
    },



## Important notes before we start with endpoints
For DEV mode first of all we need to run following command to create tables:

    npm run up

This will create the tables in the following order:

    users_table
    products_table
    orders_table
    products_in_order_table

Order is very important because orders_table has CONSTRAINT to id from users_table, and products_in_order_table has CONSTRAINTS to id from products_table and to id from orders_table.

Then run the app:

    npm start

Now we want to add approximately 30 rows to each tables to have something to work with. Just follow instructions and visit these URLs to trigger the corresponding actions. Also order is very important. 
    
    http://localhost:3001/api/users/create-random-users
    http://localhost:3001/api/products/create-random-products
    http://localhost:3001/api/orders/create-random-orders
    http://localhost:3001/api/product-in-orders/create-random-product-in-orders

Before we start to use the app FIRST WE NEED TO CREATE TOKEN by signin or signup.


<br />
<br />


## Testing in Jasmine

#### To run the test do following

    npm run test

This will change the environment to TEST mode and automatically create all test tables and populate them with rows, and clear all tables when test is finished.

### Notes
##### I have created my own project from scratch. I did not clone your start project from repo.
##### I have sent you the 'storefront-api.postman_collection.json' file with all the URLs for testing in Postman.












