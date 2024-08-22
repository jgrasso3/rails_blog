# Rails

rails c

rails s

rails g ...

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

## MVC

Model View Controller

### Model

`rails g model comment post:belongs_to user:belongs_to`

* Foreign Keys
  * the many: `belongs_to :comp`
  * the one: `has_many :comps`
    * for delete on cascade add `, dependent: :destroy`

### View

### Controller

`rails g controller comments`

## Database

db:migrate

db:seed

* Foreign Key
  * `rails g migration add_user_to_posts user:belongs_to` adds FK on Post pointing to a User
    * migrate will fail for pre existing posts that didn't get a user
  * have to edit models
    * user: has_many :posts
    * posts: belongs_to :user

## Routes

rails routes

## Bootstrap

## Auth

### Devise

add devise to Gemfile

* `rails g devise:install`
  * setups devise for rails app
  * lists out next steps like placing alerts
* `rails g devise User`
  * creates a User model w/
    * db migration
      * has a bunch of commented out settings to setup things like tracking, lockout, etc
      * Trackable, Confirmable, Lockable
    * tests
    * devise routes
      * adds `devise_for :users` in `config/routes.rb`
      * `user/_session_manager.html.erb` for example of login logout
* `rails g devise:views`
  * creates all the views devise uses under the hood so we can edit them
* `rails g devise:controllers users`
  * adds all devise controllers for our User
  * uncomment protected update/create sanitizers, add name key, and uncomment before_actions
  * add sessions and registration devise routes

#### Requiring auth for a page

`before_action :authenticate_user!` in the controller

## Action Text

`rails action_text:install` -> `bundle install` -> migrate
