# Products insert example [Atlas]
f8a3ad328e73f11fb8fa"},"name":"name","desc":"desc","price":{"$numberDouble":"NaN"},"stock":"","released":"","category":{"$oid":"65c4f998bd7d3dd51868b0c6"},"images":[""]}




Collections:

Products:

_id (ObjectId): Unique identifier for each product.
name (string): Product name.
description (string): Detailed description of the product.
price (decimal): Product price.
currency (string, optional): Currency code (e.g., USD, EUR).
images (array of strings): URLs of product images.
category (reference to Category collection): Document ID of the associated category.
stock (integer): Available stock quantity (or a flag for infinite stock).
createdAt (date): Date and time the product was created.
updatedAt (date): Date and time the product was last updated.
Categories:

_id (ObjectId): Unique identifier for each category.
name (string): Category name.
parent (reference to Category collection, optional): Document ID of the parent category (for creating subcategories).
description (string, optional): Category description.
createdAt (date): Date and time the category was created.
updatedAt (date): Date and time the category was last updated.
Orders:

_id (ObjectId): Unique identifier for each order.
user (reference to Users collection): Document ID of the user who placed the order.
items (array of objects):
product (reference to Products collection): Document ID of the ordered product.
quantity (integer): Number of units of the product ordered.
price (decimal): Price of the item at the time of ordering.
shippingAddress (object): User's shipping address information.
billingAddress (object): User's billing address information.
status (string): Order status (e.g., "pending", "processing", "shipped", "completed", "canceled").
paymentStatus (string): Payment status (e.g., "pending", "authorized", "paid", "refunded").
shippingMethod (string): Selected shipping method.
total (decimal): Total amount paid for the order.
createdAt (date): Date and time the order was placed.
updatedAt (date): Date and time the order was last updated.
Users: (Optional, if user accounts and authentication are needed)

_id (ObjectId): Unique identifier for each user.
email (string): User's email address (unique).
password (string, hashed and salted): User's password.
firstName (string): User's first name.
lastName (string): User's last name.
addresses (array of objects): User's saved shipping and billing addresses.
orders (array of references to Orders collection): IDs of the user's orders.
createdAt (date): Date and time the user account was created.
updatedAt (date): Date and time the user account was last updated.
Relationships:

A Product document can have one Category document (one-to-one relationship).
A Category document can have multiple child Category documents (one-to-many relationship).
An Order document can have multiple Product documents (one-to-many relationship).
A Product document can be included in multiple Order documents (many-to-many relationship).
A User document (if used) can have multiple Order documents (one-to-many relationship).