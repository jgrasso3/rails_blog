# Rails

## CLI

* rails c
  * opens up rails console
    * bundle exec jaeger pry
* rails new <project name>
* rails g controller <name> <actions>
* rails g scaffold <name> <column:type(string)>
  * creates:
    * migration file in `db/migrate` witha  timestamp to create the table
    * controller with basic crud actions
    * views
    * model
* rails db:
  * migrate
  * drop
  * seed
    * run seeds.rb to create bummy data

partial: way to store a section of template that can be dropped in using a `<% render '<path>' %>`