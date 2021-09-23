import fastify from "fastify";
import path from "path";
import fs from "fs";

let indexHtml: string;

fs.readFile("../dist/index.html", function (err, html) {
  if (err) {
    throw err;
  }
  indexHtml = html
    .toString("utf8")
    .replace("{IM_VERSION}", process.env.IM_VERSION as string);

  console.log(indexHtml);
});

const server = fastify();

server.register(require("fastify-static"), {
  root: path.join(__dirname, "..", "dist"),
  prefix: "/", // optional: default '/',
  allowedPath: (pathname: string, root: string) => {
    return !(pathname === "/index.html" || pathname === "");
  },
});

server.get("/", (request, reply) => {
  reply.type("text/html").send(indexHtml);
});

server.setNotFoundHandler((request, reply) => {
  reply.type("text/html").send(indexHtml);
});

server.listen(9000, (err: any, address: any) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
