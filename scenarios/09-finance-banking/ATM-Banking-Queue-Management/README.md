ATM / Banking Queue Management
Scenario Overview

Imagine that you are working on the backend of a bank branch and ATM service-management system.

The system needs to manage customers waiting for banking services and process their requests in an organized manner. Banks need to:

Process customers in the order in which they arrive.

Manage a fixed number of ATM or service-request slots efficiently.

Process service requests in reverse order when required.

Schedule the maximum number of non-overlapping customer appointments.

Arrange customers in an efficient service order to reduce total waiting time.

At first, the system may handle only a few customers. As the number of customers and service requests grows, managing queues and schedules efficiently becomes increasingly important.

Your task is to build the algorithms that allow the banking system to manage customer queues, service requests, appointments, and waiting times efficiently.

Real-World Problem

An ATM and banking queue-management system needs to answer questions such as:

In what order should waiting customers be served?

How can a fixed-size ATM request buffer reuse positions efficiently?

How can service requests be processed in reverse order?

How many customer appointments can be scheduled without overlapping?

What service order minimizes the total waiting time of customers?

These questions appear simple, but the data structure or algorithm used to solve them becomes increasingly important as the number of customers and service requests grows.

Real-World to DSA Mapping

Banking Queue Concept

DSA Representation

Customer waiting line

Queue

Customer service order

FIFO

ATM request buffer

Circular Queue

Service request sequence

Stack

Reverse processing order

LIFO

Customer appointment

Activity

Appointment scheduling

Activity Selection

Service time

Array

Customer service order

Greedy

Waiting-time optimization

Greedy

Learning Objectives

After completing this scenario, students should be able to:

Process customers using FIFO queue operations.

Understand how circular queues efficiently reuse fixed-size service slots.

Use stack operations to process service requests in reverse order.

Apply Activity Selection to schedule the maximum number of non-overlapping customer services.

Use Greedy techniques to minimize the total waiting time of customers.

Understand how sorting can support efficient scheduling and service-order decisions.

Understand why appropriate data structures and algorithms are important for managing banking queues efficiently.

Problem Progression
Problem 1 — Process Customers in Waiting Order

Use Queue operations and FIFO ordering to process customers in exactly the order in which they entered the bank service queue.

Problem 2 — Manage ATM Service Slots

Use Circular Queue operations to manage a fixed-size ATM request buffer while efficiently reusing slots freed after dequeue operations.

Problem 3 — Reverse a Service Request Sequence

Use Stack operations and LIFO ordering to process banking service requests in reverse order.

Problem 4 — Schedule Maximum Customer Services

Use Activity Selection and a Greedy strategy to schedule the maximum number of non-overlapping customer appointments.

Problem 5 — Minimize Waiting Customers at Service Counters

Use a Greedy strategy to arrange customers according to their service times and minimize the total waiting time.

Key Takeaway

The important lesson is not simply how to implement each algorithm.

The goal is to understand:

"Given a real-world banking queue-management requirement and a set of customer requests, appointments, or service constraints, how do I choose an appropriate data structure or algorithm?"