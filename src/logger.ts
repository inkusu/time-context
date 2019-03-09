/* tslint:disable */
const consola = require("consola");

export  default (name: string) => consola.withScope(require("path").basename(name));
