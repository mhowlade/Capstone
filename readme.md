# Backlog
- remove from cart is bugged (DONE)
- - causes other objects to be removed from cart, rather than clicked
- remove from cart / already in cart state not working
- add try catch to api functions (crash on false route)


# Project outline

## SERVER

MongoDB
collection

## END SERVER

## CLIENT

Landing page
- Featured Products
- Search box
- List of categories

Selecting product brings up the detailed information
- Add to cart button

Cart functionality
- An order total
- Place for payment
- Shipping info
- On checkout cart is cleared
- Order sent to database

# EXTRA
Product reviews
- Data Analysis
Create a solution for sentiment analysis (negative or positive).
1.	Create a script that generates and populates the database with a minimum of 1000 records of dummy data.
2.	Train a model using sklearn.naive_bayes.MultinomialNB classifier to predict if a feedback entry is positive or negative.
3.	Create a React component that can take a comment as input and pass that to the model using a RESTful service. Display the returned prediction (positive or negative).
a.	TIP: Investigate using the python-shell npm package in Express to call Python from JavaScript. Another option is to use Flask to create the RESTful service.


## END CLIENT
