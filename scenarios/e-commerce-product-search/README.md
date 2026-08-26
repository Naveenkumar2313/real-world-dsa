# E-Commerce Product Search

## Scenario Overview

Imagine that you are working on the backend of an e-commerce platform.

The platform contains a large catalog of products. Customers need to:

- Search for products.
- Browse products in a useful order.
- Find products within a particular price range.
- Find products that can be purchased together within a budget.
- Process large product catalogs efficiently.

At first, the catalog may contain only a few products. As the platform grows, the number of products can become extremely large.

Your task is to build the algorithms that allow the platform to handle these operations efficiently.

---

## Real-World Problem

An e-commerce platform needs to answer questions such as:

> Does a product with this ID exist?

> How should products be ordered by price?

> Which products cost between ₹500 and ₹1,000?

> Can a customer purchase two products without exceeding a budget of ₹2,000?

> How should a very large catalog be sorted efficiently?

These questions appear simple, but the algorithm used to solve them becomes increasingly important as the catalog grows.

---

## Real-World to DSA Mapping

| E-Commerce Concept | DSA Representation |
|---|---|
| Product catalog | Array |
| Product ID | Search key |
| Product price | Numeric value |
| Sorted catalog | Sorted array |
| Price range | Search interval |
| Customer budget | Target constraint |

---

## Learning Objectives

After completing this scenario, students should be able to:

1. Perform a linear search.
2. Sort an array.
3. Understand why sorted data enables faster searching.
4. Apply binary search to a sorted product catalog.
5. Apply the two-pointer technique to find product pairs.
6. Understand why algorithm efficiency matters for large datasets.

---

## Problem Progression

### Problem 1 — Find a Product
Use a simple linear search to locate a product.

### Problem 2 — Sort Products by Price
Organize products by increasing price.

### Problem 3 — Find Products in a Price Range
Use a sorted catalog to efficiently find products within a price range.

### Problem 4 — Find a Product Pair Within a Budget
Find two products whose combined price matches a customer's budget.

### Problem 5 — Sort a Large Product Catalog
Explore why more efficient sorting algorithms are important for large catalogs.

---

## Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

> "Given a real-world requirement and a dataset, how do I choose an appropriate algorithm?"