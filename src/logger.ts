import consola from 'consola';

export  default (name: string) => consola.withScope(require("path").basename(name));