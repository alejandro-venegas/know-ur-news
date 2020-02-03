# Know Ur News

## Table of Contents

- [Generalities](#generalities)
- [Article Analysis](#article-analysis)
- [Service Workers](#service-workers)
- [Testing](#testing)

## Generalities

This project uses webpack (with various plugins) to load and bundle JS and CSS (SASS) files, making a lightweight and simple web application on the client side. NodeJS (and Express) is used on the server side to provide connection between the different technologies that conform the functionality of this project. Also, the project has two webpack configuration, one for the production environment and one for the development environment, providing different benefits according to its context.

## Article Analysis

The analysis is powered by the Aylien API. When a well formatted URL is inputted (which is verified by the 'pattern' attribute on the input element) the client sends the info to the server, where the Aylien package is installed. Once there, the server sends a request with the provided info to the Aylien API. When a response arrives, the server sends the data back to the client and the client procedes to manipulate the DOM to insert the data and add the styles according to the type of data recieved.

## Service Workers

This app saves a cached version of the website with the help of the Google Workbox plugin for webpack.

## Testing

Testing is done with Jest. Two simple tests were written to assess the functionality of the client's JS files. The formHandler test makes sure "fetch" is called when the URL form is submitted. The responseHadler test evaluates that the corresponding function throws an error when an incorrect JSON structure is provided.
