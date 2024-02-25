# Authentication and Authorization

## Authentication
    - Authentication: The process of verifying the identity of the user.
    - Ex: A user logs into an application using a username and password.

### Ways to Authenticate a User
    1. Username and Password:
       - A user enters a unique username and the matching password.
    2. Two Factor Authentication (2FA):
       - Requiring a second form of verification through another platform.
       - Platforms could be a text, email, or a generated code through an authenticator.
       - This provides an extra layer of security by ensuring that even if a password is compromised, an attacker still needs another piece of information to access the account.
    3. OAuth:
       - A protocol that lets users grant a third-party website or application access to their information on another website, but without sharing their access credentials.
       - This is convenient for the user and can also be more secure as it leverages the robust security measures of a major third-party service.
    4. Token-based:
       - After initial login, the server generates a token that the client can use for subsequent requests.
       - This token is usually included in the headers of the HTTP requests and is validated by the server for each request.
       - Common in APIs and single-page applications, this is especially useful for stateless interactions.
    5. Passwordless:
       - A method that allows users to log in without the need to remember a password.
       - Often used in conjunction with other authentication methods such as email or SMS, to send a one-time code to the user that they can use to login.
       - This is convenient to the user and can also be secure because it leverages the robust security measures ofa a major third-party service.

## Authorization:
    - Authorization: The process of determining whether a user has the right to access a specific resource or perform a particular action within an application.
    - Ex: After logging in, the application checks if the authenticated user has the necessary permissions to access a requested page or feature.
    - Without authorization, the application cannot enforce restrictions on what authenticated users are allowed to do.

### Common Authorizations:
    1. Role based:
       - A common approach where users are assigned roles, and each role has predefined permissions.
       - Ex: An 'admin' rile might have extensive access across the application, while the 'user' role might only have more limited access.  
    2. :
       - The process in which involves assigning specific permissions or capabilities directly to users or through roles. 
       - It's about checking if a user has the permission to perform an action like editing a document or viewing a specific page.
    3. OAuth:
       - The user's identity is authenticated by the third-party service, and your application is granted token to access specific user data without needing the user's credentials.  
       - OAuth is more about authorization rather than authentication since the token allows for access to the user's data without the need for a password.

## Best Practices for Authentication:
    - It is difficult / nearly impossible to protect against every possible attack, but following these best practices will help to avoid the most common security issues.
    1. Use strong, hashed passwords.
       - Using BCrypt is a good option since it involves salting the password and using a strong hashing algorithm.
       - This prevents attackers from using rainbow tables to crack passwords.
         * A rainbow table is a precomputed table for reversing cryptographic hash functions, usually for cracking password hashes.
    2. Offer and encourage 2FA.
       - This adds an extra layer of security by requiring verification from a second source.
    3. Temporarily lock accounts after a certain number of failed login attempts to prevent brute force attacks.
    4. Always use HTTPS not HTTP to encrypt data transmitted between the client and th server. 
       - Especially for login pages transmitting sensitive information.
    5. Store session IDs and other sensitive information on the server.
       - If you must store data on the client side, ensure it's properly encrypted and protected.
    6. Keep all software, libraries, and frameworks updated to protect against known vulnerabilities.
    7. Enforce a minimum password length and complexity.
    8. Implement secure methods for password recovery.
       - This could be email confirmation links or security questions.
       - Ensure that security questions are not easily guessable.

## Best Practices for Authorization:
    1. Grant users only the permissions they need to perform their tasks.
       - Avoid giving excess privileges which can lead to security vulnerabilities.
    2. User a role based system to assign permissions to riles, and then assign roles to users.
       - This simplifies management of permissions as changes can be made at the role level rather than individually.
    3. Periodically review and audit user permissions to ensure they are still appropriate and make adjustments as necessary.
    4. When applicable, add context or time-based restrictions to access
       - This could be IP address, device type, etc.          

## Authentication in Rails:
    - Rails comes with a built-in authentication system called has_secure_password.
    - It's a simple way to auth to your application.
    - It provides methods to set and authenticate against a BCrypt password and adds a few validations to your model.
      * Authenticating against a BCrypt password refers to the process of verifying a  user's login attempt by comparing the password they provide with the hashed password store in the database.  

*//-----------------------------------------------------------------------------------//*
where XXX is the attribute name of your desired password.

The following validations are added automatically:

Password must be present on creation

Password length should be less than or equal to 72 bytes

Confirmation of password (using a XXX_confirmation attribute)

If confirmation validation is not needed, simply leave out the value for XXX_confirmation (i.e. don’t provide a form field for it). When this attribute has a nil value, the validation will not be triggered.  
*//-----------------------------------------------------------------------------------//*

## Creating Tests for Authentication:
    1. Add the following to your gemfile
       -  group :development, :test do
            gem "debug", platforms: %i[ mri mingw x64_mingw ]
            gem 'rspec-rails'
            gem 'factory_bot_rails'
          end
    2. Run the following command to generate the RSpec configuration files:
       - rails g rspec:install
       - rails g rspec:model [user] 
    3. To use factory bot, add the following to our rails_helper.rb file:
       - require 'spec_helper'
         require 'faker' 
       - RSpec.configure do |config|
           config.include FactoryBot::Syntax::Methods  
    4. Create a new spec file for our user model:
       - rails g rspec:model user
    5. Update your spec/factories/users.rb file to look like the following:
       - FactoryBot.define do
           factory :user do
             username { Faker::Internet.username }
             password { 'password' }
             password_confirmation { 'password' }
           end
         end
       - This will create a user with a username and password.
       - You can always use email instead of username.
       - We also add a password confirmation for creations to make sure the password and password confirmation match.
       - We will use BCrypt to hash the password which will be stored in our database as password_digest.
         * Remember BCrypt is a hashing algorithm that is used to hash passwords.
     - In the User model, you will have a "has_secure_password", which adds methods to set and authenticate against a BCrypt password.
       * This method expects a "password_digest" attribute in your database and virtual attributes "password" and "password_confirmation"  

*//---------------------------------Auth Test: User Model---------------------------------//*
require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is valid with a username and password' do
    user = build(:user)
    expect(user).to be_valid
  end

  it 'is not valid without a username' do
    user = build(:user, username: nil)
    expect(user).not_to be_valid
  end

  it 'hashes the password' do
    user = create(:user, password: 'password')
    expect(user.password_digest).not_to eq 'password'
  end
end
*//---------------------------------------------------------------------------------------//*

    - We need to make sure of the following things:
      * A user is valid with a username and password
      * A user is not valid without a username
      * A user's password is hashed. We will have a column for this hash in our database called "password_digest"

## Adding Tests for Users Controller: 
    - Include the following in your spec/requests/users_spec.rb

*//---------------------------------Auth Test: User Controller---------------------------------//*
require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'POST #create' do
    context 'with valid attributes' do
      it 'creates a new user and returns a success response' do
        post :create, params: { user: attributes_for(:user) }
        expect(response).to have_http_status(:created)
        expect(User.count).to eq(1)
      end
    end

    context 'with invalid attributes' do
      it 'does not create a new user and returns an error response' do
        post :create, params: { user: attributes_for(:user, username: nil) }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(User.count).to eq(0)
      end
    end
  end
end
*//--------------------------------------------------------------------------------------------//*

    - We are testing to make sure that a user is created with the valid attributes and that a user is not created with invalid attributes.

## Adding Tests for Sessions Controller:
    - We will create a new spec file in our sessions controller
      * rails g rspec:request sessions

*//---------------------------------Auth Test: Sessions Controller---------------------------------//*
require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  describe 'POST #create' do
    let!(:user) { create(:user) }

    context 'with valid credentials' do
      it 'authenticates the user and returns a success response' do
        post :create, params: { username: user.username, password: 'password' }
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)).to include('token')
      end
    end

    context 'with invalid credentials' do
      it 'does not authenticate the user and returns an error response' do
        post :create, params: { username: user.username, password: 'wrong_password' }
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end
end
*//------------------------------------------------------------------------------------------------//*  

    - Creating a session is the process of logging in a user.
    - We need to make sure that  a user can login with valid credentials and that a user cannot login with invalid credentials.
    - If the user logs in with correct credentials, we should return a token.
    - Run the tests.
      * bundle exec rspec

## Creating the models:
    - rails g model User username:string password_digest:string
    - enter "n" to not overwrite the spec file. 
    - rails db:migrate

*//---------------------------------User Model---------------------------------//*
class User < ApplicationRecord
  has_secure_password
end
*//----------------------------------------------------------------------------//* 

    - Test the user_spec.rb
      * bundle exec rspec spec/models/user_spec.rb 
    - The tests will fail.
    - Add the following to the User model:

*//---------------------------------User Model---------------------------------//*
class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true
end
*//----------------------------------------------------------------------------//* 

    - To use "has_secure_password", you need to install BCrypt to the gemfile:
      * gem 'bcrypt'
      * bundle install
      * bundle exec rspec spec/models/user_spec.rb
    - Tests should pass.

## Creating the Users Controller:
    - rails g controller users
    - enter "n"
    - Add the following to the UsersController

*//---------------------------------UsersController---------------------------------//*
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
    params.permit(:username, :password, :password_confirmation)
  end
end
*//---------------------------------------------------------------------------------//* 

    - When you use "User.new" or "User.create", with "has_secure_password" in your User model, Rails automatically checks to see if the password and password_confirmation fields match when creating a new user.
    - This is one of the conveniences provided by the "has_secure_password" method.
    - Next, we need to add the following to the routes file:

*//---------------------------------Routes---------------------------------//*
Rails.application.routes.draw do
  resources :users, only: [:create]
end
*//------------------------------------------------------------------------//* 

    - Run the tests.
      * bundle exec rspec spec/requests/users_spec.rb

## Creating Sessions Controller:
    - rails g controller sessions create
    - enter "n"

*//---------------------------------SessionsController---------------------------------//*
class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      render json: { token: '123' }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end
end
*//------------------------------------------------------------------------------------//* 

    - user& : The "&" is called the safe navigation operator.
        * This is a Ruby operator that allows you to call a method on an object without worrying if it is nil.
        * If the object is nil, the method will return nil instead olf raising an exception.
    - If the user is found and the password is correct, we will return a token.
    - Otherwise we will return an error message.
    - For now, we are just returning a token for testing purposes. We will be using customized tokens later.
    - Add the following to the routes file:

*//---------------------------------Routes---------------------------------//*
Rails.application.routes.draw do
  resources :users, only: [:create]
  post '/login', to: 'sessions#create'
end
*//------------------------------------------------------------------------//* 

    - Run the tests.
      * bundle exec rspec spec/requests/sessions_spec.rb
    - The tests should pass.

## Creating a JSON Web Token with JWT Gem:
    - JWT or JSON Web Token, is a compact, URL-safe means of representing claims to be transferred between two parties.
    - The claims in a JWT are encoded as a JSON object that is  used as the payload ofa JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure.
    - This enables the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.
    - A JWT is a string made up of three parts, separated by dots ("."), which are
      1. Header:
         - Typically consists of two parts: the type of token (JWT), and the signing algorithm being used (HMAC, SHA256, RSA)
         -  {
              "alg": "HS256",
              "typ": "JWT"
            } 
    2. Payload:
       - Contains the claims. Claims are statements about the entity (typically the user) and additional data. 
       - There are three types of claims: registered, public, and private.
       - {
           "sub": "1234567890",
           "name": "John Doe",
         } 
    3. Signature:
       - Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. 
       - To create the signature part, you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.
     - The resulting JWT looks like this:
       - xxxxx.yyyyy.zzzzz
        - xxxxx is the Base64Url encoded header.
        - yyyyy is the Base64Url encoded payload.
        - zzzzz is the signature.
    - Once a user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.
    - We will need the jwt gem.

## Logging in a User and Returning a JWT:
    - Add the following to the gemfile:
      * gem 'jwt'
      * bundle install
    - Looking back at our SessionsController:

*//---------------------------------SessionsController---------------------------------//*
class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      render json: { token: '123' }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end
end
*//------------------------------------------------------------------------------------//*   

    - If the user is found and the password is correct, we will return a token.
    - Otherwise we will return an error message.
    - Shown above, the token we are currently using is only for testing purposes, but we will change that to use the JWT gem to create a token.

*//---------------------------------SessionsController---------------------------------//*
class SessionsController < ApplicationController
.
.
.


  private 
  
  def jwt_encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end
end
*//------------------------------------------------------------------------------------//*  

    - We have now defined a private method that will encode our payload.
    - def jwt_encode(payload, exp = 24.hours.from_now)
      - This defines a method that includes 2 parameters: payload and exp
      - The payload represents the data that we want to include in our token.
        - This is typically used for storing the user's id.
      - Exp is th e expiration time of the token
        - We are setting the default expiration time to 24 hours from now.
    - payload[:exp] = exp.to_i
      - We are setting the expiration time of the token and converting the expiration time to an integer.
    - JWT.encode(Payload, Rails.application.secrets.secret_key_base)
      - We are encoding the payload using the JWT gem.
      - We are using the secret key base to encode the payload
      - The reason wwe are using the secret key base is because it is unique to our application.

## The Rails Object:
    - The Rails object is an instance of the Rails::Application class.
    - It is created when the application boots, and is available for your application to use.
    - It is also available in the console.
    - The rails object is the container for your application's configuration, and the instance methods on the Rails object are the primary way to configure your application.
    - With access to the Rails object, you have access to sensitive information about your application, such as the secret key base.
      - Again, the secret key base is unique to your application which is used for security purposes.
      - It is also used to encrypt sensitive data such as the Rails credentials feature which is used to hold sensitive information such as API keys, passwords, etc.
    - The secret key base is unique for every application, so we don't have to worry about someone else using our secret key base.
    - In our current setup, we are using the secret key base eo encode our payload.
    - If you run your rails console and type in Rails.application.secrets.secret_key_base, you will see the secret key base for your application.
    - The environment you have access in the console is the development environment.
    - The secret key base is different for every environment.

## Logging in a User and Returning a JWT cont:
    - To update our sessions controller to use the jwt_encode method, add the following to the SessionsController file:

*//---------------------------------SessionsController---------------------------------//*
class SessionsController < ApplicationController
  def create
    user = User.find_by(username: params[:username])
    if user.authenticate(params[:password])
      token = jwt_encode(user_id: user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end

  private

  def jwt_encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end
end
*//------------------------------------------------------------------------------------//* 

    - if user.authenticate(params[:password])
      token = jwt_encode(user_id: user.id)
        - We are encoding the payload and storing it in a variable called "token"
        - We are passing the  user's id as the payload.
        - To test this, send a request to http://localhost:3000/login with the following body:
          * {
              "username": "username",
              "password": "password"
            }
        - Once you do, you will get the correct response of unauthorized:
          * {
                "error": "Unauthorized"
            }
        - Let's quickly create a user so we can login.
          * rails c
          * User.create(username:'username', password: 'password', password_confirmation: 'password') 
        - Try again and you should see a JWT
          * {
                "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE3MDYzNzk3MDZ9.a0xAX98--3NIRLs6qXr-HM5D5Zyd7ropPGfmuNUeCao"
            } 

## Verifying JWT and Misconceptions about JWTs:
    - Encryption is a two way function in which data is converted into a format that cannot be easily understood by unauthorized people. It can be decrypted back to its original form if the person has the right key. 
      - Encryption is ideal when you need to securely transmit sensitive information over a network.
      - Ex: when you send credit card information during an online transaction, the data is encrypted so that only the intended recipient with the right decryption key (ex: the payment processor) can access the information.
    - One-way Hashing is a one way function in which data is converted into a fixed length string of characters. It CANNOT be decrypted back to its original form. It is used to verify the integrity of data. We use BCrypt to hash our passwords.
      - One-way hashing is used to securely store passwords.
      - When a user creates a password, it is hashed using a hash function (like BCrypt) and the resulting hash is stored in the database.
      - When the user logs in, the password they enter is hashed again, and the resulting hash is compared tol the one stored.
      - Because hashing is one-way, even if someone gains access to the database, they cannot reverse the hashes back to passwords.
    - Encoding is the process of converting data from one form to another. It doesn't provide any security. It's just a way to represent data in a different format.
      - Encoding is used when data needs to be transformed into a format that is compatible with different systems or protocols.
      - Ex: When embedding binary data in an XML or JSON payload, you might use Base64 encoding to convert the binary data into text representation that can be easily included in the text-based payload.
    - The reason for using JWTs to authenticate a user is because:
      - WTs are encoded, which makes them URL-safe and easy to pass in HTTP headers.
      - It's stateless, meaning that the server doesn't need to keep track of the user's session.
        - This is ideal for APIs and single-page applications.
      - While the payload and header of a JWT are just encoded and can be decoded by anyone, th esignature is encrypted with a secret key.
    - When the token is used for authentication:
      - The server decodes the JWT to retrieve the header and payload.
      - The server then verifies the signature by comparing it against its own computed signature using the secret key.  
      - If the signature is valid, the server trusts the claims within the JWT and authenticates the user.
    - Below are the steps to verify your JWT:
      1. Visit jwt.io and grab the token that you received from the response from postman.
         * {
               "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE3MDYzNzk3MDZ9.a0xAX98--3NIRLs6qXr-HM5D5Zyd7ropPGfmuNUeCao"
           } 
      2. Paste the value of the token to the encoded section of jwt.io. You should see something similar to the following:
         * {
             "alg": "HS256"
           }
           {
             "user_id": 1,
             "exp": 1706379706
           }  
      3. Verify the token by accessing the secret key base value.
         * Rails.application.secrets.secret_key_base
         * 035cc7c22f1246d6dbb3a9c3a42e7d3d133da2e617c8935b5288490050827675de0fab273c426bc718665707b59ad0385f88c6460c63786c17d970eb54ea17bd
      4. Paste this under verify signature in the input box and uncheck secret base64 encoded.

## Authenticating a User using a JWT:
    - We will make certain routes protected so that only authenticated users can access them.
    - Let's make the show action protected for our users controller:

*//---------------------------------Routes---------------------------------//*
Rails.application.routes.draw do
  resources :users, only: [:create, :show]
  post '/login', to: 'sessions#create'
end
*//------------------------------------------------------------------------//*

    - Add the following to the users_controller.rb

*//---------------------------------UsersController---------------------------------//*
class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def show 
    user = User.find_by(id: params[:id])

    render json: user, status: :ok
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end
end
*//---------------------------------------------------------------------------------//* 

    - Now how do we protect this route?
    - We can include logic in the users controller to be used to authenticate the user, but this is not ideal since we will be repeating ourselves if we have other controllers that also have actions that we want to protect.
    - Instead, since all controllers will inherit from the ApplicationController, we can include logic in the application controller to be used to authenticate the user.

*//---------------------------------ApplicationController---------------------------------//*
class ApplicationController < ActionController::API
  def authenticate_request

  end
end
*//---------------------------------------------------------------------------------------//* 

    - We have defined a method called "authenticate_request"
    - This method will be used to authenticate the user.
    - Let's now add the logic to this method:

*//---------------------------------ApplicationController---------------------------------//*
class ApplicationController < ActionController::API
  def authenticate_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
  end
end
*//---------------------------------------------------------------------------------------//* 

    - header = request.headers['Authorization']
      - To decode the token, we need to access the Authorization header.
      - The Authorization header is used to provide authentication information in an HTTP request.
      - The most common type of authentication is the Bearer authentication scheme, which involves the use of a security token called a bearer token.
      - The Bearer authentication scheme is intended primarily for server authentication using the WWW-Authenticate and Authorization HTTP headers but can be used for user authentication in some cases.
    - header = header.split(' ').last if header
      - We are using split to split the header into an array.
      - We are splitting the header by the space character.
      - We are then grabbing the last element of the array which is the token.

*//---------------------------------ApplicationController---------------------------------//*
class ApplicationController < ActionController::API
  def authenticate_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      decoded = JWT.decode(header, Rails.application.secrets.secret_key_base).first
      @current_user = User.find(decoded['user_id'])
    rescue JWT::ExpiredSignature
      render json: { error: 'Token has expired' }, status: :unauthorized
    rescue JWT::DecodeError
      render json: { errors: 'Unauthorized' }, status: :unauthorized
    end
  end
end
*//---------------------------------------------------------------------------------------//* 

    - We wrap up the process of decoding the token with a "begin rescue" block in response to capturing any errors that might occur.
    - If the token has expired, we will return an error message.
    - If the token is invalid, we also return an error message.
    - Otherwise, we will find the user and store it in an instance variable called "@current_user"
    - Notice that when we call "JWT.decode", we include the header which is the token and the secret key base.
    - We are using the secret key base to verify the signature of the token which will indicate that it is valid.
    - Now we can use "authenticate_request" to protect our routes.
    - Add the following to the UsersController:

*//---------------------------------UsersController---------------------------------//*
class UsersController < ApplicationController
  before_action :authenticate_request, except: [:create]
.
.
.
*//---------------------------------------------------------------------------------//* 

    - We call the "authenticate_request" method before the "show" action.
    - We don't want to call this method before the create action since we want to allow users to create an account without being authenticated.
    - The only way the "show" action will execute is if they are authenticated through "authenticate_request" and include a valid token in the Authorization header.
    - We can test this out by using postman.
    - Send a request to localhost:3000/users/1 without a token. You will get the following:
      * {
            "errors": "Unauthorized"
        }
    - Now try to send a request to localhost:3000/users/1 with a token. 
    - To do that, copy the token value from the response you used to login.
    - Go to the Authorization tab.
    - Select "type" and select "Bearer Token".
    - Paste the token in the token field.
    - Click send and you should get this:
      * {
            "id": 1,
            "username": "username",
            "password_digest": "$2a$12$rRGqSRKChBUMRs1eIvVjDOeXgZXy17NUViGizydc/EhNGc2.pL.Bu",
            "created_at": "2022-01-25T01:11:32.201Z",
            "updated_at": "2022-01-25T01:11:32.201Z"
        } 
    - With this, we have successfully authenticated a user using JWT.

## Consideration When Making Custom JWTs:
    - The largest concern with JWT for session management is the difficulty in invalidating a token once it's been issued.
      - Traditional session tokens can be easily invalidated by the server(logout or permission change) but JWTs remain valid until they expire.
      - This can be problematic in scenarios where immediate revocation is necessary, such as a user logout or account suspension.
    - JWTs are criticized for potentially being larger than traditional session tokens, which can increase the load on network traffic as they are included in every HTTP request.

## Token Storage and Revocation:
    - Creating a customized token, (not JWT) is an alternative way to authenticate a user.
    - If we store these tokens in a database, then we can easily revoke them.
    - Both JWTs and custom tokens have pros and cons.

![alt text](JWT_tokens_EN.webp)

## Serialization:
    - Serialization is important for when we are building APIs.
    - Serialization is the process in which we convert data structures or objects into a format that can be stored or transmitted and reconstructed later.
    - The following are examples:
      - When you send data from the client to the server, it needs to be serialized into a format that can be transmitted back over the network.
      - When you store data in a database, it needs to be serialized into a format that can be stored in the database.
    - We will focus on serializing data to be sent from the server to the client.

### Advantages to Serialization:
    - It reduces the amount of data sent over the network, which improves performances and reduces bandwidth usage.
    - It allows you to control what data is sent to the client.
      - Ex: You might want to exclude sensitive information like passwords or credit card numbers
    - It allows you to control how the data is formatted.
      - Ex: You might wan tot format dates in a specific way.
    - It allows you to include additional information that is not part of the data model.
      - Ex: You might want to include links related to a resource.

### Problems Without Serialization:
    - When we send a request to localhost:3000/users/1, we get the following:
      * {
            "id": 1,
            "username": "username",
            "password_digest": "$2a$12$rRGqSRKChBUMRs1eIvVjDOeXgZXy17NUViGizydc/EhNGc2.pL.Bu",
            "created_at": "2022-01-25T01:11:32.201Z",
            "updated_at": "2022-01-25T01:11:32.201Z"
        }
    - The problem with that is that we are sending sensitive information such as "password_digest". 
    - We don't want to send this information to the client.
    - We also don't want to send the "created_at" and "updated_at" attributes to the client unless we want to.
    - To fix this, we will use blueprinter to serialize our data.

## Creating a Serializer for the User Model with Blueprinter:
    - The blueprinter gem is a simple and fast object serializer for Ruby.
    - It allows you to easily define the attributes to be serialized and their formatting.
    - It also supports associations for serializing related objects.
    - Add the following to the gemfile:
      * gem 'blueprinter'
      * bundle install
    - Create a serializer for our user model by entering in the following:
      * rails g blueprinter:blueprint user
    - This will create a new file in the serializers folder called "user_blueprint.rb" under app/blueprints.

*//---------------------------------UserBlueprint---------------------------------//*
class UserBlueprint < Blueprinter::Base
end
*//-------------------------------------------------------------------------------//* 

    - The file structure is necessary for blueprinter to work.
    - The name of the file doesn't necessarily need to be the same as the model name, but it is recommended to do so.
    - The name of the class MUST be the same name as the file name.
    - The class MUST inherit from Blueprinter::Base.
    - Files in your project directory are automatically loaded by Rails, so you don't need to require the blueprint files.
    - Next, add the following to the user_blueprint:

*//---------------------------------UserBlueprint---------------------------------//*
class UserBlueprint < Blueprinter::Base
  identifier :id

  fields :username
end
*//-------------------------------------------------------------------------------//* 

    - We are defining the fields that we wan to serialize.
    - identifier :id
      - We are also defining the identifier which is the id.
      - The identifier is used to uniquely identify the object.
    - fields :username
      - This defines the fields that we want to serialize.
      - In this case, we are serializing the username.
    - In other words, if we serialize a user record using this blueprint, we will get the following:
      * {
          "id": 1,
          "username": "username"
        }
    - Notice how we are not serializing the password_digest, created_at, and updated_at attributes.

*//---------------------------------UsersController---------------------------------//*
class UsersController < ApplicationController
  before_action :authenticate_request, except: [:create]

  def show 
    user = User.find_by(id: params[:id])

    render json: UserBlueprint.render(user), status: :ok
  end
end
*//---------------------------------------------------------------------------------//* 

    - render json: UserBlueprint.render(user), status: :ok
      - We are serializing the user record using the user blueprint method render.
      - This method will return the value as a JSON string which is perfect since we will be sending JSON data to the client.
      - Be sure to restart your server since we added a new gem and blueprint.

## Blueprinter Views:
    - Views in blueprinter are used to define the fields that we want to serialize. 
    - We can define multiple views for a blueprint for different use cases.
    - Ex: We night want to serialize the user's email address in one view, but not in another view.
    - Let's add a new view for our user blueprint:

*//---------------------------------UserBlueprint---------------------------------//*
class UserBlueprint < Blueprinter::Base
  identifier :id

  view :normal do
    fields :username
  end

  view :extended do
    fields :username, :created_at, :updated_at
  end
end
*//-------------------------------------------------------------------------------//* 

    - We have defined two views: normal and extended.
    - The normal view will serialize the username.
    - The extended view will serialize the username, created_at, and updated_at attributes.
    - This is demonstrated in our users controller:

*//---------------------------------UsersController---------------------------------//*
.
.
.
  def show 
    user = User.find_by(id: params[:id])

    render json: UserBlueprint.render(user, view: :normal), status: :ok
  end
.
.
.
*//---------------------------------------------------------------------------------//* 

    - If we send a request to localhost:3000/users/1, we will get the following response:
      * {
            "id": 1,
            "username": "username"
        } 
    - This is powerful since we can define different view for different use cases.

## Blueprinter Associations:
    - What's more powerful is that we can serialize associations.
    - Let's add a new model called Post:
      * rails g model Post title:string body:text user:references
      * rails db:migrate

*//---------------------------------Post Model---------------------------------//*
class Post < ApplicationRecord
  belongs_to :user
end
*//----------------------------------------------------------------------------//* 

*//---------------------------------User Model---------------------------------//*
class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true
  has_many :posts
end
*//----------------------------------------------------------------------------//*

    - Now, let's create a serializer for our post model:
      * rails g blueprinter:blueprint post

*//---------------------------------PostBlueprint---------------------------------//*
class PostBlueprint < Blueprinter::Base
end
*//-------------------------------------------------------------------------------//*

    - Let's add the following to our post blueprint:

*//---------------------------------PostBlueprint---------------------------------//*
class PostBlueprint < Blueprinter::Base
  identifier :id

  view :normal do
    fields :title, :body
  end
end
*//-------------------------------------------------------------------------------//*

    - We defined a view called normal.
      - This view will serialize the title and body attributes.
    - Let's include the posts association in our user blueprint.

*//---------------------------------UserBlueprint---------------------------------//*
class UserBlueprint < Blueprinter::Base
  identifier :id

  association :posts, blueprint: PostBlueprint, view: :normal

  view :normal do
    fields :username
  end

  view :extended do
    fields :username, :created_at, :updated_at
  end

end
*//-------------------------------------------------------------------------------//* 

    - association :posts, blueprint: PostBlueprint, view: :normal
      - We are using the method called "association" to serialize the posts association.
      - We are passing in the method name which is posts indicating that the user model has a posts association.
      - We are also passing the blueprint which is the post blueprint as well as the view.