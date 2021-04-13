#!/bin/sh
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
fi
npx @databases/pg-schema-cli --database $POSTGRES_URL --directory src/__generated__