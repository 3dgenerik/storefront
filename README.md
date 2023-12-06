# Storefront frontend project

### Start app

    //this start application with default port 4200
    ng serve
    //if you want to use specific port
    ng serve --port <port_number>

### Note

    Don't forget to create tables using db-migrate in my storefront-api backend application. Just do following command:
    //Only if it's necessary you can remove all tables
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


## Storefront funcionality

    - When the application starts, 35 products are automatically created to enhance user experience and make
    interaction with the application more engaging.

### Routes
    
#### http://localhost:3000/.
    
    This route is starting route. The user is currently using the application as a guest user and cannot make
    purchases or access other features and benefits. They can only browse products and view product details.
    In the upper right corner, there are two options where the user can log in or register.



#### http://localhost:3000/register
















