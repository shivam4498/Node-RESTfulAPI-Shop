# Shopping Cart RESTful API
* This is a descriptive RESTful API for E-commerce shopping application using Node, Express and MongoDB Atlus(Database)

## How to Use ?

* Just clone the repository in your local system.

```install npm```
* Now you will get a *node_module* file in your local directory with installed all the modules and packages mentioned in the *package.json* file.

``` npm start``` will start your live server.

* Now go to the *postman* and do a **POST** request on your localhost server ``` localhost:4000/user/signup``` 
* you can see the model type in ```./api/models/user```
* Now do the POST request for ```localhost:4000/user/login``` for same body and copy the *JWT* token from there.
* Paste this JWT token to your header in **Authorization** (will use as a middleware to keep the safe requests).
* As an owner to keep the product track Visit ```localhost:4000/products/ ```
* As a Customer to place the orders Visit ```localhost:4000/orders/```


**Note-** Just make sure that you have keep your Mongodb Atlas (to store the data) login password in any nodemon.json file and do same to keep your secret JWT string in it.




## Building Process(RESTful API)
### Run the following commands in your terminal
```init npm```
* It will create a *package.json* file in you local directory.
* you can see your all installed *modules and packages* in your *package.json* file.

```npm install --save express```
* I have used express as a framework for node.js to make building this API easier.

* Use **postman** to ```GET POST PATCH and DELETE``` requests.
[Download postman from here](https://www.postman.com/downloads/)

* All API related stuffs (routs,models, controllers, middlewares) will go to the *api* folder.

``` npm install --save-dev nodemon```

``` npm install --save-global nodemon```

``` nodemon server.js```
* Just use npm start to start your live server.

Install morgan ```npm install --save morgan``` (HTTP request logger middleware for node.js)

Now install body-parser ```npm install --save body-parser```(Node.js body parsing middleware)
* It parse incoming request bodies in a middleware before your handlers, available under the req.body property.

## Database Management
* Signup for Mongodb Atlas (if you are using first time otherwise just login)....
[Mongodb Atlas click here](https://www.google.com/aclk?sa=l&ai=DChcSEwixudTV-pzrAhXDCisKHXvhBrEYABABGgJzZg&sig=AOD64_3MKDZzKMgCTZ_S2iG3XYEdUq5YjQ&q=&ved=2ahUKEwjVkc7V-pzrAhXayDgGHWAUAKEQqyQoAHoECA4QCw&adurl=)

* npm install mongoose (to serve the data)
* npm install --save multer (to use a Form/data )

## Autentication Management
* Using Jsonwebtoken [More about JWT](https://jwt.io/)

* npm install bcrypt --save (for your  user's password Hashing with your secret string in nodemon.json file)

* npm install jasonwebtoken

## Contributing 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.





