*//------------------------------------------------------------ASSOCIATIONS AND CONTROLLERS------------------------------------------------------------//*

 # Types of Associations:
   - has_one: Used in the model that contains the foreign key.
     * It specifies that each instance of the model has one instances of another model.
     * Ex: If a User model has one Profile, it would be defined in the User model as "has_one :profile"
   - belongs_to: Used in the model that is owned by another model.
     * Ex: With the Profile model, "belongs_to :user" indicates that each profile is associated with a specific user.
   - has-many-through: Used when a record in a table can belong to many records in another table through a third table.
     * Ex: A user has many doctors through appointments. A doctor has many users through appointments. Whereas a many-to-many association would be a patient that has many doctors and a doctor has many patients
   - has_and_belongs_to_many: Used when a record in a table can belong to many records in another table and vice versa.
     * Ex: A user has many friends and a friend has many users. 
     * This is similar to a has-many-through, but the difference is that a has-many-through association requires a third model. 
     * has_and_belongs_to does not require a third model.
   - polymorphic: Used when a record in a table can belong to more than one record from other tables.
     * Ex: A comment can belong to a post or a comment can belong to a photo.
   - self-join: Used when a record in a table can belong to another record in the same table.
     * Ex: A user can have many friends and a friend can be a user.
     * Another example would be followers and following.

 # has_one Association:
   - A one-to-one association is when one record in a table is associated with one record in another table.
   - The example that was given is a user has one profile. A profile belongs to a user.
   - We will create a one-to-one association between a user and a profile.
   - First, we need to create a user model and a profile model.
     * This is done by running the following command in the terminal:
       + rails g model User name:string email:string
       + rails g model Profile user:references bio:text
   - In a one-to-one association in Rails, only the "belongs_to" side of the association (in our case, the Profile model) needs to have a foreign key column in its table. 
   - The "has_one" side (in our case, the User model) does not require a foreign key column in its table.     

*//----------app/models/user.rb----------//*  
class User < ApplicationRecord
  has_one :profile
end
*//--------------------------------------//*   

*//----------app/models/profile.rb----------//*  
class Profile < ApplicationRecord
  belongs_to :user
end
*//-----------------------------------------//*

   - Now any time we create a user, we can create a profile for that user.
   - Enter the following code into the console to create a user and a profile:
     * rails db:migrate
     * rails c
     * user = User.create(name:"John", email:"test@test.com")
     * profile = Profile.create(bio: "I am a user", user: user)
     * user.profile = profile

 # has_many Association:
   - A one-to-many association is when one record in a table is associated with many records in another table.
   - The example that was given was a user has many posts. A post belongs to a user.
   - Create a User model and a Post model.
     * Run the following command in the terminal:
       + rails g model User name:string email:string
       + rails g model Post title:string body:text user:references
   - In Rails, only the "belongs_to" side of the association (in our case, the Post model) needs to have a foreign key column in its table.
   - The "has_many" side (in our case, the User model) does not require a foreign key column.   

*//----------app/models/user.rb----------//*  
class User < ApplicationRecord
  has_many :posts
end
*//--------------------------------------//*   

*//----------app/models/post.rb----------//*  
class Post < ApplicationRecord
  belongs_to :user
end
*//--------------------------------------//*

   - Now any time we create a user, we can create a post for that user.
   - Enter the following code into the console to create a user and a post: 
     * rails db:migrate
     * rails c
     * user = User.create(name: "John", email "test@test.com")
     * post = Post.create(title: "My First Post", body: "This is my first post", user: user)
     * user.posts << post

 # has-many-through Association:
   - A has-many-through association is when a record in a table can belong to many records in another table through a third table.
   - A has-many-through association requires a third model.
   - The example given was a user has many doctors through appointments. A doctor has many users through appointments. Whereas a many-to-many association would be a patient has many doctors and a doctor has many patients.
   - Create a Physician, Patient, and Appointment model.
     * Run the following command in the terminal:
       + rails g model Physician name:string
       + rails g model Patient name:string
       + rails g model Appointment physician:references patient:references

*//----------app/models/physician.rb----------//*  
class Physician < ApplicationRecord
  has_many :appointments
  has_many :patients, through: appointments
end
*//-------------------------------------------//*   

   - has_many :appointments: This line of code is saying that a physician has many great appointments from.
   - has_many :patients, through: :appointments: This line of code is saying that a physician has many patients through appointments

*//----------app/models/patient.rb----------//*  
class Patient < ApplicationRecord
  has_many :appointments
  has_many :physicians, through: :appointments
end
*//-----------------------------------------//*

   - has_many :appointments: A patient has many appointments from the appointment table.
   - has_many :physicians, through: :appointments: A patient has many physicians through appointments.

*//----------app/models/appointment.rb----------//*  
class Appointment < ApplicationRecord
  belongs_to :physician
  belongs_to :patient
end
*//---------------------------------------------//*

   - belongs_to :physician: An appointment belongs to a physician. 
   - belongs_to :patient: An appointment belongs to a patient.
   - Now any time we create a physician, we can create an appointment for that physician.
   - Enter the following code to create a physician:
     * rails db:migrate
     * rails c
     * physician = Physician.create (name: "Dr. Smith")
     * patient = Patient.create(name: "John Doe")
     * appointment = Appointment.create(physician: physician, patient: patient)
     * physician.appointments
     * patient.appointments
   - Now we see that a physician has an appointment and the patient has an appointment.
   - We can also see that a physician has a patient and a patient has a physician.

 # Has-and-belongs-to-many Association:
   - A has-and-belongs-to-many is when a record in a table can belong to many records in another table and vice versa.
   - Ex: A user has many friends and a friend has many users.
   - This is similar to a has-many-through association, but a has-many-through requires a third model. Has-and-belongs-to-many does not require a third model.
   - Enter the following code to create a Has-and-belongs-to-many association between authors and books:
     * rails g model Author name:string
     * rails g model Book title:string 
   - The third table is going to be the authors_books table that will have an author_id column and a book_id column. The author_books table will be the join table between authors table and the books table.
   - Enter the following code to create the authors_books table:
     * rails g model CreateJoinTableAuthorBook author book
     * The generated file looks as follows:

*//----------------------------------------------//*  
class CreateJoinTableAuthorBook < ActiveRecord::Migration[6.0]
  def change
    create_join_table :authors, :books do |t|
      # t.index [:author_id, :book_id]
      # t.index [:book_id, :author_id]
    end
  end
end
*//---------------------------------------------//*

   - Uncomment the two lines of code:

*//----------------------------------------------//*  
class CreateJoinTableAuthorBook < ActiveRecord::Migration[6.0]
  def change
    create_join_table :authors, :books do |t|
       t.index [:author_id, :book_id]
       t.index [:book_id, :author_id]
    end
  end
end
*//---------------------------------------------//*

   - Run the migration:
     * rails db:migrate
   - Now we can see the association between the author model and the book model:  

*//-----------app/models/author.rb----------------//*  
class Author < ApplicationRecord
  has_and_belongs_to_many :books
end
*//-----------------------------------------------//*

*//-----------app/models/book.rb----------------//*  
class Book < ApplicationRecord
  has_and_belongs_to_many :authors
end
*//---------------------------------------------//*

   - Now any time we create an author, we can create a book for that author. 
   - Enter the following code to create an author and a book in the Rails console:
     * rails c
     * author = Author.create(name: "John Doe")
     * book = Book.create(title: "My First Book")
     * author.books << book

 # Polymorphic Association:
   - Polymorphic association is when a record in a table belongs to more than one other record in another table.
   - Ex: A comment can belong to a post and can belong to a photo.
   - We will create a polymorphic association with comments, posts, and photos.
   - Enter the following code into the terminal to create the models:
     * rails g model Comment body:text commentable:references{polymorphic}
     * rails g model Post title:string body:text
     * rails g model Photo title:string
   - The third table is going to be the comments table.
   - The comments table will have a commentable_id column and a commentable_type column.
   - The comments table will be the join table between the posts table and the photos table.
   - Now generate a migration file to create the comments table:
     * rails g migration CreateComments
   - The migration should look as follows:

*//----------------------------------------------//*  
class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.text :body
      t.references :commentable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
*//---------------------------------------------//*

   - Run the migration
     * rails db:migrate

*//-----------app/models/comment.rb----------------//*  
class Comment < ApplicationRecord
  belongs_to :commentable, polymorphic: true
end
*//------------------------------------------------//*

*//-----------app/models/post.rb----------------//*  
class Post < ApplicationRecord
  has_many :comments, as: :commentable
end
*//---------------------------------------------//*

*//-----------app/models/photo.rb----------------//*  
class Photo < ApplicationRecord
  has_many :comments, as: :commentable
end
*//----------------------------------------------//*

   - Now any time we create a post, we can create a comments for that post.
   - Enter the following command to create a post and a comment in the Rails console:
     * rails c
     * post = Post.create(title: "My first post", body: "This is my first post")
     * comment = Comment.create(body: "This is my first comment", commentable: post)
     * post.comments
     * photo = Photo.create(title: "My first photo")
     * comment = Comment.create(body: "This is my first comment", commentable: photo)
     * photo.comments  
   - Now we can see that the post has a comment and the photo has a comment.
   - We can also see that the comment has a post and the comment has a photo.

 # self-join Association:
   - A self-join association is when a record in a table can belong ot another record in the same table.
   - Ex: A user can have many friends and a friend can be a user.
   - In a self-join association, you don't necessarily need a third table like typical many-to-many relationships.
   - Instead, you can use a single table (users) with a join table that references it twice (one for each side of the relationship)
   - We will create a self-join association between users and friends where the users table holds all user records, and the friendships table is used to link users together.
     * rails g model User name:string
     * rails g model Friendship user:references friend:references
   - The migration file looks as follows:

*//----------------------------------------------//*  
class CreateFriendships < ActiveRecord::Migration[6.0]
  def change
    create_table :friendships do |t|
      t.references :user, null: false, foreign_key: true
      t.references :friend, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
*//---------------------------------------------//*   

   - Note that for the friend column, we specify "foreign_key {to_table: :users}" to indicate that this is a self-reference to the users table.

*//----------app/models/user.rb----------//*  
class User < ApplicationRecord
  has_many :friendships
  has_many :friends, through: :friendships, source: :friend
end
*//--------------------------------------//*   

*//----------app/models/friendship.rb----------//*  
class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: 'User'
end
*//--------------------------------------------//*   

   - Enter the following code to create two users and see the association:
     * user1 = User.create(name: "Alice")
     * user2 = User.create(name: "Bob")
     * user.1friends << user2
     * user1.friends 

 # Controllers and Routes:
   - Controllers are the middlemen between models and views.
   - They are responsible for processing requests and sending responses.
   - They are also responsible for handling the logic of the application.
     * Ex: If we want to create a user, the controller will handle the logic of creating a new user.
   - Routes are responsible for mapping URLs to controller actions.
   - A controller action is a method that is defined in the controller's class.
     * Ex: If we want to create a user, we will make a POST request to the create action in the users controller.

 # Users Controller:
   - To demonstrate this, we will create a new Rails API.
     * rails new controllers_and_routes_api --api 
   - Let's create a User model:
     * rails g model User name:string email:string
   - Let's run the migration:
     * rails db:migrate
   - Let's create a users controller. We do this by running the following command in the terminal:
     * rails g controller Users
   - This will create a controller file in the app/controllers/users_controller.rb
   - Open the file and add the following code:

*//----------app/controllers/users_controller.rb----------//*  
class UsersController < ApplicationController
end
*//-------------------------------------------------------//*        

   - This file is where we will be adding "actions"
   - Actions are methods that are defined in the controller and are responsible for handling requests and sending logic.
   - Let's add an action called "create" to the users controller.

*//----------app/controllers/users_controller.rb----------//*  
class UsersController < ApplicationController
  def create
  end
end
*//-------------------------------------------------------//*        

   - The purpose of this action is to create a new user. 
   - Let's add the logic to create a new user:

*//----------app/controllers/users_controller.rb----------//*  
class UsersController < ApplicationController
  def create
    @user = User.new(name:params[:name], email: params[:email])
    if @user.save
      render json: @user
    else
      render json: { error: "Unable to create user." }
    end
  end
end
*//-------------------------------------------------------//*        

   - Here we are creating a new user with the name and email that are passed in as parameters.
   - We see that we can access params by using the params hash.
   - The params hash is a hash that contains all the parameters that are passed in from the request.
     * Ex: If we make a POST request to the create action with the following parameters...

        {
        	"name": "John",
        	"email": "johndoe123@gmail.com"
        }

     * Then the params hash will look like this:  
        
       {
         name: "John",
        email: "johndoe123@gmail.com"
       }
   - From there, we check to see if the user was saved:
     * If the user was saved, then we render the user as JSON.
     * If the user was not saved, then we render an error message as JSON.
   - Let's add a route to the routes file.
   - Open up the routes file in config/routes.rb and add the following code:

*//----------config/routes.rb----------//*  
Rails.application.routes.draw do
  resources :users
end
*//------------------------------------//*

   - The resources method is a method that is provided by Rails and is used to create routes for a resource.
   - The resources method will create the following routes, here's a table:

| HTTP Verb | Path       | Controller#Action | Used for                    |
| --------- | ---------- | ----------------- | --------------------------- |
| GET       | /users     | users#index       | display a list of all users |
| POST      | /users     | users#create      | create a new user           |
| GET       | /users/:id | users#show        | display a specific user     |
| PATCH/PUT | /users/:id | users#update      | update a specific user      |
| DELETE    | /users/:id | users#destroy     | delete a specific user      |

   - HTTP Verb: The HTTP verb that is used to make the request.
     * GET request is used to get a resource.
     * POST request is used to create a resource.
     * PUT request is used to update a resource
     * DELETE request is used to delete a resource.
   - Path: The path that is used to ake the request.
     * the path for a GET request to get all users is /users. 
     * the path for a POST request to get a user is /users.
     * the path for a GET request to get a specific user is /users/:id 
     * the path for a PUT request to update a specific user is /users/:id
     * the path for a DELETE request to delete a specific user is /users/:id
   - Controller#Action: The controller and action that is used to handle the request:
     * Get all users is users#index
     * Create a user is users#create
     * Get a specific user is user#show
     * Update a specific user is users#update
     * Delete a specific user is user#destroy
   - Since we are only using the create action for now, we can specify that the only action we only want to use is "create" in the resources method.   

*//----------config/routes.rb----------//*  
Rails.application.routes.draw do
  resources :users, only: [:create]
end
*//------------------------------------//*

   - Let's test our create action by starting up our Rails server.
   - Run the following command in the terminal:
     * rails s
   - Now let's make a POST request to the create action.
   - Let's create the user controller, you can do this manually OR run the following command:
     * rails g controller Users
   - This will create a controller file in the app/controllers/users_controller.rb.
   - It's important that you name the controller file users_controller.rb since it is a convention in Rails to name the controller file after the resource that it is responsible for.
   - Also, we define in our routes file:
     
     Rails.application.routes.draw do
       resources :users, only: [:create,]
     end

   - indicates the name of the controller, the name of the controller file, and the name of the controller class:
 
     | HTTP Verb | Path   | Controller#Action | Used for                    |
     | --------- | ------ | ----------------- | --------------------------- |
     | POST      | /users | users#create      | create a new user           |   

   - Let's open this file and add the create action the users controller:

*//----------app/controllers/users_controller.rb----------//*  
class UsersController < ApplicationController
  def create
    user = User.new(name: params[:name], email: params[:email])
    if user.save
      render json :user
    else
      render json { error: "Unable to create user." }
    end
  end
end
*//-------------------------------------------------------//* 

   - Here, we define a class called UsersController in which is where we define our actions.
   - Notice how the class in inheriting from ApplicationController.
     * ApplicationController is a class that is provided by Rails to define the class as a controller.
   - There are certain methods that are provided by ApplicationController that are used to handle requests and send responses:
     * render: This method is used to render a view or render a resource as JSON.
     * redirect_to: This method is used to redirect to a different route.
     * params: This method is used to access the parameters that are passed in from the request.
     * request: This method is used to access the request object.
     * etc.
   - Next, we define an action called create.
   - Actions are methods that are defined in the controller and are responsible for handling requests and sending responses.
   - This action is responsible for creating a new user.
   - Remember, an action is in the context of the controller is just a method defined in the controller class.
   - In create we are creating a new user with the name and email that are passed in as parameters.
   - We see that we can access params by using the params hash
   - The "new" method is a method that is provided by ActiveRecord and it will fill the attributes of the record but will not save until we call the save method.
   - Here we use a conditional logic to check if the user was saved.
     * If the user was saved, then we render the user as JSON.
     * If the user was not saved, then we render an error message as JSON.

 # Postman:
   - To make our very first request to our Rails api, we use the Postman.
   - Postman is a tool that is used to send requests to our server.
   - Postman is a commonly  used tool for testing APIs
   - You can download Postman here: https://www.postman.com/downloads/. 
   - To test out your API, do the following:
     1. Create a workspace in the top left-hand corner
     2. select blank template 
     3. name the workspace
     4. access: personal
     5. Create a collection (a group of requests) with the "+" in the top left hand corner.
     6. Name the collection
     7. Create the request by hovering  over the collection on the left side, clicking on the "...", and click Add request.
     8. Name the request.
     9. Add http://localhost:3000/users to the URL
     10. Change the request to POST
     11. Navigate to the Body tab and select raw and JSON
     12. Pas in a JSON object such as:
       * {
            "name": "jane doe",
            "email": "johhnydoe123@gmail.com

         } 
     13. Click send. You should see a response.

 # Postman Index:
   - Another action we will be creating is the index action.
   - This is one of the actions defined int he RESTful routes.
   - Below is a table of what our routes look like:

| HTTP Verb | Path       | Controller#Action | Used for                    |
| --------- | ---------- | ----------------- | --------------------------- |
| GET       | /users     | users#index       | display a list of all users |
| POST      | /users     | users#create      | create a new user           |
| GET       | /users/:id | users#show        | display a specific user     |
| PATCH/PUT | /users/:id | users#update      | update a specific user      |
| DELETE    | /users/:id | users#destroy     | delete a specific user      |

   - The purpose of the index action is to display a list of all users.
   - Let's add an index action to the users controller.

*//----------app/controllers/users_controller.rb----------//*  
class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  
  def create
    user = User.new(name: params[:name], email: params[:email])
    if user.save
      render json :user
    else
      render json { error: "Unable to create user." }
    end
  end
end
*//-------------------------------------------------------//* 

   - Here, we are getting all of the users and rendering them as JSON.
   - Now let's add a route to the route file.
   - Open config/routes.rb and add the following:

*//----------config/routes.rb----------//*  
Rails.application.routes.draw do
  resources :users, only: [:create, :index]
end
*//------------------------------------//* 

   - Again, each action name is tied to a route name:

| HTTP Verb | Path   | Controller#Action | Used for                    |
| --------- | ------ | ----------------- | --------------------------- |
| GET       | /users | users#index       | display a list of all users |
| POST      | /users | users#create      | create a new user           |

   - In order to trigger the index action in our users controller, we need to make a GET request to the /users route.
   - Let's test this out in postman by creating a GET request.
   - Make a new request called "get users"
   - Make sure the URL is set to http://localhost:3000/users
   - click send

 # Postman Show:
   - The purpose of the show action is to get a specific user.
   - Let's add a show action to the users controller:

*//----------app/controllers/users_controller.rb----------//*  
class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    user = User.new(name: params[:name], email: params[:email])
    if user.save
      render json :user
    else
      render json { error: "Unable to create user." }
    end
  end
end
*//-------------------------------------------------------//* 

   - Here, we are finding a user by the id that is passed in as a parameter and rendering the user as JSON.
   - Now let's add a route to the routes file.

*//----------config/routes.rb----------//*  
Rails.application.routes.draw do
  resources :users, only: [:create, :index, :show]
end
*//------------------------------------//* 

   - This will create the following routes:

| HTTP Verb | Path       | Controller#Action | Used for                    |
| --------- | ---------- | ----------------- | --------------------------- |
| GET       | /users     | users#index       | display a list of all users |
| POST      | /users     | users#create      | create a new user           |
| GET       | /users/:id | users#show        | display a specific user     |

   - The show action is mapped to a special route since it requires an id or parameter.
   - In order to trigger the show action in our users controller, we need to make a GET request to the /users/:id route.
   - In Postman, create a GET request called get user
   - Adjust the URL to http://localhost:3000/users/1
     * Since we currently only have a user of id 1
   - Click send.

 # Postman Put:
   - The purpose of the put action is to update a specific user.
   - Let's add a put action to the users controller:  

*//----------app/controllers/users_controller.rb----------//*  
class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    user = User.new(name: params[:name], email: params[:email])
    if user.save
      render json :user
    else
      render json { error: "Unable to create user." }
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(name: params[:name], email: params[:email])
      render json: @user
    else
      render json: { error: "Unable to update user." }
    end
  end
end
*//-------------------------------------------------------//* 

   - Here, we are finding the user by the id that is passed in as a parameter and updating the user with the name and email that are passed in as parameters.
   - Let's update the route to include the update action.

*//----------config/routes.rb----------//*  
Rails.application.routes.draw do
  resources :users, only: [:create, :index, :show, :update]
end
*//------------------------------------//* 

   - Again, each name is tied to a route name:

| HTTP Verb | Path       | Controller#Action | Used for                    |
| --------- | ---------- | ----------------- | --------------------------- |
| GET       | /users     | users#index       | display a list of all users |
| POST      | /users     | users#create      | create a new user           |
| GET       | /users/:id | users#show        | display a specific user     |
| PATCH/PUT | /users/:id | users#update      | update a specific user      |

   - In Postman, create a new request and call it update user.
   - Adjust the URL
   - Navigate to the body tab and select raw and JSON
   - Paste in a JSON object such as:
       * {
            "name": "jane doe",
            "email": "johhnydoe456@gmail.com

         } 
   - Click send.

 # Postman Destroy:
   - The purpose of the destroy action is to delete a specific user.
   - Let's add a destroy action to the users controller:

*//----------app/controllers/users_controller.rb----------//*  
class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    user = User.new(name: params[:name], email: params[:email])
    if user.save
      render json :user
    else
      render json { error: "Unable to create user." }
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(name: params[:name], email: params[:email])
      render json: @user
    else
      render json: { error: "Unable to update user." }
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render json: { message: "Successfully deleted user." }
    else
      render json: { error: "Unable to delete user." }
    end
  end
end
*//-------------------------------------------------------//* 

   - Here we are finding a user by the id that is passed in as a parameter and deleting the user.
   - Since we are using all 5 routes, we don't need to exclude any, so we can remove the "only" option.

*//----------config/routes.rb----------//*  
Rails.application.routes.draw do
  resources :users
end
*//------------------------------------//* 

   - Again, each action is tied to a route name.
   - This will create the following routes:

| HTTP Verb | Path       | Controller#Action | Used for                    |
| --------- | ---------- | ----------------- | --------------------------- |
| GET       | /users     | users#index       | display a list of all users |
| POST      | /users     | users#create      | create a new user           |
| GET       | /users/:id | users#show        | display a specific user     |
| PATCH/PUT | /users/:id | users#update      | update a specific user      |
| DELETE    | /users/:id | users#destroy     | delete a specific user      |

   - In Postman, create a new request and call it delete user.
   - Adjust the URL and delete the user with id 1.
   - Click send.