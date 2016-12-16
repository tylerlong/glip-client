# Glip Client

This is a simple Glip client implementation. It currently supports the following features:

- [posts](blob/master/examples/posts.js)
    - send message
    - receive messages in real time
    - monitor message modification and removal in real time
    - get message(s)
- [groups](blob/master/examples/groups.js)
    - get group(s)/team(s)
    - monitor group events
- [persons](blob/master/examples/persons.js)
    - get person
- [companies](blob/master/examples/companies.js)
    - get company


## Installation

```
yarn add glip-client
```

or

```
npm install --save glip-client
```


## Usage

Please check the [examples](examples).


## todo

- provide build version for browser
- provide build version for ancient node versions which doesn't support ES6
- support batch operations
