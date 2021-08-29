
# Frontend developer test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

***You can provide the answers to questions/code challenge either as zipped file containing the code, or as a link to a fork of this repository***

## Question 1

Toby is calling friends using friends’ scores as guidance, starting from the friend with the highest score.

After each call the score of the friend who was called is set to the minimum score in the friends’ list while all other scores are incremented by 1.

If two or more friends share the score, Toby will contact the first person that he hasn't spoken to yet, or if he has already spoken to all of them, the first one from the subset will be chosen.

Given an integer `n`, where `1 <= n <= 10^7` and a list of friends' scores of length `n` where `1 <= score <=10 ^ 7`, write a function that will return the number of calls he has to make before all of his friends are granted a chance to speak to him.

 Place your solution in the `src/challenge_1.js` file

 What are the function's time & space complexities?
 
 *Answer*:
 ```
 The complexity in O notation is O(n^2)

 ```


## Question 2

Take a look at the component `PaypalButton`, located in `/src/PaypalButton.js`.


1. Take a look at the component PaypalButton, located in /src/PaypalButton.js.
2. What issues with it can you spot?
    *Answer*:
    ```txt

    ```
3. Re-factor the class component into a functional component, while applying improvements regarding the problems you noted before and any other optimizations.
4. Bonus: Get rid of the HOC connect component (perhaps by utilising other available APIs).

Note: The component uses [PayPal SDK](https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/). Keep in mind that due to the mock returning a fake value `onAccept` will never be executed in this demo and the expected result is the SDK failing with `500` while trying to call `https://www.sandbox.paypal.com/smart/api/payment/fake_paypal_token/ectoken`

The component also utilises [formik](https://formik.org/) as form/state management library.
