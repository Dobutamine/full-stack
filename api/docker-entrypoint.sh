#!/bin/sh

echo "API docker entrypoint : waiting for database."
./wait-for db:27017

echo "API docker entrypoint : Starting the node server."
npm start