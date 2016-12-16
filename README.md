# Glip Client

This is a simple Glip client implementation. It currently supports the following features:

- [posts](examples/posts.js)
    - send message
    - receive messages in real time
    - monitor message modification and removal in real time
    - get message(s)
- [groups](examples/groups.js)
    - get group(s)/team(s)
    - monitor group events
- [persons](examples/persons.js)
    - get person
- [companies](examples/companies.js)
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


## Todo

- provide build version for browser
- provide build version for ancient node versions which doesn't support ES6
- support batch operations
    - postpone, maybe multipart/mixed will be replaced with JSON array.
