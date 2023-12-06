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

### Endpoints
    
#### http://localhost:3000/ (for guests users)

    This endpoint is starting endpoint and contain all products from database. The user is currently using the application 
    as a guest user and cannot make purchases or access other features and benefits. They can only browse products, 
    view product details and filtering by category. In the upper right corner, there are two options where the 
    user can sign in or register.


#### http://localhost:3000/register

    Registration form has validation with visible messages when user try to type incorrect values. After a 
    successful registration, the user receives a token that allows them to use the 
    application without limitations

#### http://localhost:3000/signin 

    If user already exist in database you can use this endpoint and sign in. Here you also receive a token,
    just like in the registration endpoint.

#### http://localhost:3000/ (for registered or signed-in users)

    For signed-in users, additional options have appeared, including a navigation menu, additional infos, simple
    user profile with logout button, additional options for buying products in product card. 
    
    Now you can start shopping. By pressing the 'Add to cart' button, you automatically create an 'Order' if
    it doesn't already exist and add the product with quantity to the cart. Once the product is added, the button becomes
    inactive and provides information that it has already been added to the cart, and also card badge is
    updated. Since this is a dynamic application, every time the user logs in again, their activity from
    the previous session is saved and persists after logging in again because it is connected to 
    the database.

    After clicking on the 'Log out' button, the user is logged out and redirected to the 
    http://localhost:3000/signin endpoint.

#### http://localhost:3000/product-details/:productId

    Details for specific product.

#### http://localhost:3000/cart

    Here is the shopping cart with products that the user has added, along with additional product information, 
    a link to product details, the ability to change quantities, and the option to remove products from the list.
    On the right side, there is a payment form. After successfully filling all the inputs and pressing the 'Pay now'
     button, the user is redirected to the http://localhost:3000/success endpoint, the product list is now empty and
     active order is set to 'complete'. 

#### http://localhost:3000/success

    At this endpoint, we display information about the successfully completed purchase, including details
    about the user.

#### http://localhost:3000/orders-history

    Here is the complete history of all 'complete' purchases, as well as the 'active order (which can only be 'one at a 
    given moment)  

#### http://localhost:3000/users

    This is an additional endpoint that displays a list of all registered users.    

##### Notes:
    Most of the actions in the app are token required.
    Most of the endpoints are not available for guest users and show warning message.


















