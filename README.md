Sinatra
=============


## Getting Started locally

1. Run `bundle install` in the directory where the project is located.
2. Create the database for postgres 
a) `psql -U vagrant postgres`
b) `create database contact_list_dev;`
3. `bundle exec rake db:migrate`
2. `shotgun -p 3000 -o 0.0.0.0`
3. Visit `http://localhost:3000/` in your browser

