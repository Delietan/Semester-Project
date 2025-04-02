## ABOUT THE PROJECT

### General

- This was my final exam project for my Professional Degree in Backend Development
    - The project received grade A
    - Duration: 4 weeks
- The project consists of:
    - Complete API for E-commerce using Node with Express.js
    - MySQL Database 3NF
    - Sequelize ORM
    - JWT Authentication
    - Jest And Supertest for Integration Testing
    - Swagger Documentation
    - Admin Dashboard Frontend with EJS and Bootstrap

### Functionality of the software

- This software allows you to run an e-commerce. A company using this software would be able to upload a product list from local data or from an external API.
- Through the use of the "Admin Dashboard", an admin user would be able to execute CRUD operations (Create, Read, Update and Delete) for all Products, Brands, Categories, Memberships, Roles, Orders, Order statuses and Users.
- Users will automatically have thier membership upgraded, depending on the quantity of items they have purchased, and receive discounts based on the membership.
- Users and admins can view orders and see information about prices, grand total and discounts receieved.
- Inventory quantity updates automatically on purchase.
- Authencation for various endpoints, limiting accesibility for guest and registered users.
- Complete documentation for the API is included. Read more below.
- Integration testing for the API is included. Read more below.

## How to install and run this web application:

- The only files which are required to run this application are the three files inside the "Web Application" folder. index.html, style.css and wdt_app.js. Open index.html in a browser to run the app. Ensure that all three files are in the same folder. Older or outdated browers may not support all functionality.

- CDN is used for connecting Bootstrap, jQuery and SweetAlert. No other external libraries are used.



## How to use web application:

- Employees are automatically rendered on page load.
- Select employee and click "Out" the register out-time for employee.
- On employee return, select employee and click "In",
- Delayed employee notifies the user. Notification can be dismissed to forwarded to manager.

- Register delivery by submitting information and clicking "Add".
- Select delivery and click "Clear" when delivery is completed.
- Delayed delivery notifies the user. Notification can be dismissed or forwarded to manager.