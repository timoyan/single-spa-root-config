// Use this file only as a guide for first steps. Delete it when you have added your own routes files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/get-started-routes

// users data
const USERS = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

module.exports = [
  {
    id: "get-import-map-v1", // id of the route
    url: "/v1/importmap.json", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        response: {
          status: 200, // status to send
          body: {
            imports: {
              "@timo/root-config": "http://localhost:9000/timo-root-config.js",
              "@timo/navbar": "http://localhost:8080/timo-navbar.js",
              react:
                "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
              "react-dom":
                "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
              "single-spa":
                "https://cdn.jsdelivr.net/npm/single-spa@5.9.3/lib/system/single-spa.min.js",
            },
            version: "v1",
          }, // body to send
        },
      },
    ],
  },
];
