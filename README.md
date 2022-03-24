# E-Commerce Website Project Overview

This webapp was created using the ReactJS, Spring, with mySQL stack.

## **Front End**

![Overview of Components](./Planning and Architecture/code-images/graph-components.png)

The front end of the websites has several components as illustrated above. The components are organized by relationship. Components that have a relationship with one another are grouped relativel closer to one another.

The overall layout of the page is quite simple with each page resuing the navbar and footer components and varying in the components that are the focused of the page. The page have been grouped further in the image below.

![Components by Pages](./Planning and Architecture/code-images/graph-components-grouped.png)

## Shopping Cart Functionality

![Shopping Cart Functionality](./Planning and Architecture/code-images/graph-shoppingcart.png)

Having a shopping cart is an essential function of any modern online e-commerce store. In this case, the shopping cart function was made by implementing a parent-child relationship between with components that have the ability to add or/and remove items to and from the shopping cart. Moreover, the data is saved and retrieved fromt the browsers local storage for persistance.

The productview component displays the individual product along with its corresponding information such as the price. While the shopping cart component displays the array of products that are in the shopping cart.

The program starts by retreving data from the local storage and setting the internal state of the cart to it. Meanwhile the child components receive a reference to the handle add/delete from cart functions that are responsible for updatign the state and local storage. Whenever the add or delete button is clicked, the child component will call the passed reference function with the appropriate parameters. Lastly, the parent component will take cart of updating the state once again and the local storage as well.

A reasoning behind this design is the simplicity it offers. Originally the child components would read directly from the localStorage and update their state to then display the shopping cart. A problem in the shopping cart encountered with the old architecture is that whenever a function in the parent component sets the state and updates the cart, the DOM gets rendered once again. However, the child component is rendered before the localStorage is updated. Hence, the child component reads the unupdated version of the shopping cart. This translates into showing as if the count of the product is seemingly 1 behind, unless the page is reloaded.

The issue was fixed with the architecture shown above, where the child components receive the state from the parent. In this case, by design, there is no need to wait for the local storage to update which leads to better speed and less redundancy since it eliminates the need to reload to wait for the local storage to update. Moreover, the child components make use of the React Life Cycle hooks, " ComponentDidMount()/getDerivedStateFromProps()" to update the state based on the parent props.
An added feature behind this design model is that there is only one component interacting with the local storage. This has many benefits. The first is that it follows organized design principles. The parent function acts like an interface to the local storage which also improves access control and the chances of an offset function making an errounious change to the local storage.

**App.js**
![Handle add To Cart Function](./Planning and Architecture/code-images/Appjs-handleAddToCart.png)
![Handle add To Cart Function](./Planning and Architecture/code-images/Appjs-handleDeleteFromCart.png)

**Shopping Cart/ ProductView Components**
![Shopping Cart Component](./Planning and Architecture/code-images/ShoppingCart-getDerivedState.png)

## Routing

**React Router**
![React Router](./Planning and Architecture/code-images/Appjs-router.png)

An unforeseen issue that I ecountered was naming. The way React Router works is it will render whichever ever path matches first. For instance,
if given path "/product" and "/products" it will inevitably go to "product" because it is the first match. This issue is shown in
[this repo of stack overlow](https://stackoverflow.com/questions/43351752/react-router-changes-url-but-not-view "this repo of stack overlow").
The fix for this is to use the 'exact' keyword. However, I dedcided It'd be more appropriate to rename the paths.

## Database Connectivity

The webapp is able to connect the local database using the axios Http Client and implementing the API in ProductService.js.

![ProductService.js](./Planning and Architecture/code-images/ProductService.png)

The API is very simple to use and implement. Components that need to display products from certain categories make use of the defined functions in the class.

For testing the HTTP requests, I used the highly recommended [Postman service](https://www.postman.com/). It is a useful tool that can send various HTTP request and display the output. The webapp is neatly designed and also has the desktop agent which may be necessary in some scenarios\*(Postman will indicate so).

## **Backend**

![Database Architecture](./Planning and Architecture/code-images/graph-database.png)

The database architecture shown above is the intended architecture for a program of this scale. There is a lot of data going on and some that is missing, like for instance storing profile images, or telemetric data about user habits that can be used for displaying preferences. Nevertheless, the architecture shown above makes use of the concept of creating entities with data that is closely related and then creating relationships between those different entities.

It can be said that in a e-commerce store the data can be separated into three groups, those that belong to Users(customers), Vendors, and Orders. Each of the groups mentioned have tables associated with it, as well as a table that has some relation to another table in another one of the groups.

The program is currently limited to the products table for reasons of simplicity.

## Views and Reports

A relatively unused feature that this e-commerce store will offer is reports through the use of SQL views and reports. These are simple SQL statements that use the given table to create something useful whether that is to the vendor or customer.

On the customer side, the report includes a view of history of products that were bought along with the quantity(orderdetails), price(products), status(orders), and etc...

On the vendor side the reports are of bigger detail. These reports aim to aid in marketing and also provide a summary of their products from a sales perspective. For instance these repoprts include, demographics of who bought which products and when(marketing), as well as the the quantity in stock of each product being sold. The example above are some of the few use cases for reports. More importantly, these reports help to illustrate how essential an organized collection of data can be for not only a business or customer, but also for a platform.

## Custom Program To Populate Database

While developing the website an issue I encountered was having a sufficient quantity of fake products to test the interoperability of the website. However, this meant that I would manually have to input data, which seems like a tedious task. Hence, I created a custom program that populates a database using a given csv file strings that can't be garbled letters and random numbers(max and min can be set) for things like prices.

The csv files were obtained from [this website](https://extendsclass.com/csv-generator.html). The website is very useful in generating custom csv files that tailors your needs.

![Custom Database Program](./Planning and Architecture/code-images/populate-database-function.png)

![Custom Database Program](./Planning and Architecture/code-images/populate-database-function-2.png)

![Custom Database Program](./Planning and Architecture/code-images/populate-database-function-3.png)
