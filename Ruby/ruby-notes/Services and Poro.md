# SERVICES AND PLAIN OLD RUBY OBJECTS (PORO)

## Services and PORO Pattern:
 - A pattern used to organize your code in a way that make it easy to maintain and understand.
 - It is used to separate the concerns of your application.
 - Services and PORO (Plain Old Ruby Object) are used to encapsulate a specific set of functionality that can be shared across different parts of your application.
 - Services and PORO are typically used to abstract complex business logic away from controllers and models.
 - This makes the code more modular, reusable, and easier to test.

## Services:
 - To utilize our service, we will extract the logic of creating a user into a service.
 
### Example: Creating a User:
 - Before services, the standard user controller looked something like this:

*------------------------------------------------Users Controller------------------------------------------------*
class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:name, :email)
  end
end
*-----------------------------------------------------------------------------------------------------------------*

 - To create a service manually, do the following:
    1. Create a folder called services inside the app folder.
    2. Create a new file in the services folder.
    3. Name the file like this: [name]_service.rb
    4. Restart the server if you are running it.
    5. Include the following into your user_service.rb file:

 *------------------------------------------------UserService------------------------------------------------*
module UserService
    module Base
        def self.create_user(params)
            user = User.new(params)
            if user.save
                user
            else
                user.errors
            end
        end
    end
end
  *----------------------------------------------------------------------------------------------------------*

 - We have defined the UserService module where we have a Base module.
 - The Base module has a method called create_user
 - When we call the create_user method, it will create a user and return the user if it is valid.
 - If it is not valid, it will return the errors.
 - Now, we need to refactor the users controller to utilize the UserService.

*------------------------------------------------Users Controller------------------------------------------------*
class UsersController < ApplicationController
  def create
    user = UserService::Base.create_user(user_params)
    if user.save
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:name, :email)
  end
end
*-----------------------------------------------------------------------------------------------------------------*

 - Instead of having the logic of creating a user inside the controller, we are now reaching out to the UserService for the creation of a user.
 - This makes our controller cleaner and  easier to understand since the controller is now only responsible for handling requests and responses.
 - Creating a user is a simple example, but as the application grows, there will be more complex logic that you need to extract into services.

### Example: Filtering Users:
 - We are going to add logic that will allow us to filter our users based on certain parameters.
 - Add the following to the users controller:
        def index
          users = UserService::Base.filter_users(params)
          render json: users, status: :ok
        end
 - Add the following to the User service:
        def self.filter_users(params)
          users = User.all
          users = users.where(name: params[:name]) if params[:name].present?
          users = users.where(email: params[:email]) if params[:email].present?
          users
        end