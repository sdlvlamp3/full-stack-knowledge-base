*//------------------------------------------------------------DATABASE FUNDAMENTALS PART 1------------------------------------------------------------//*

 # Intro to Databases:
   - Database:          A collection of data stored in a computer system.
   - They are used to store data in a strucutred way, so that it can be easily managed and accessed
   - They are used in many applications, spanning virtually the entire range of computer software.
   - They are the prefered method of storage for large multiuser applications, where coordination between many users is needed.
   - Even individual users find them convenient and many email programs and personal organizers are based on standard database technology.
   - The topic of databases is very broad, and there are many different types of databases and database management systems.
   - We will go over the most common types of databases and different ways of organizing data in a database using SQL (Structured Query Language)

 # Database Management Systems:
   - Database Management System (DBMS):     A software that uses a standard method to store and organize data.
   - The data can be added, updated, deleted or traversed using various standard algorithms and queries.
   - DBMS's are categorized according to their data structures or types.
   - DBMS accepts requests for data from the application program and instructs the operating system to transfer the appropriate data.
   - When a DBMS is used, information systems can be changed much more easily as the organization's information requirements change.
   - New categoreis of data can be added to the database without disruption to the existing program.
   - This is imporant because it means that organizations can manage and analyze thier data much more effectively and effciently.
     * Consider the task of creating a report for salespeople that shows all the customers they have talked to in the last month, along with the total sales for each customer.
     * Without a DBMS, this report would be difficult to create because the data would have to be stored in many different locations.
     * With a DBMS, the report can be generated with a few simple queries.

 # Examples of DBMS:
   - SQLite
   - MySQL
   - PostgreSQL
   - Microsoft Access
   - SQL Server
   - FileMaker
   - Oracle
   - RDBMS
   - dBASE
   - Clipper
   - FoxPro

 # Types of Databases 
   - Two of the most common types of databases are relational and non-relational. 
   - The key difference between them is how they store data.

 # Relational Database:           
   - Also called SQL databases, are used for storing structural data and are based on tables. 
   - They use SQL for defining and manipulating data.
   - Relational databases are easy to extend.
   - New data categories can be added after the original database creation without requiring that you modify all the existing applications.
   - Some examples of Relational Databases are:
     * MySQL
     * Oracle
     * Microsoft SQL Server
   - Projects that use relational databases include:
     * WordPress
     * Drupal
     * Joomla   
  
 # Non-Relational Database:
   - Also called NoSQL, are used for storing unstructured data.
   - They use a variety of data models including:
     * Document
     * Graph
     * Key-Value
     * Columnar
   - They are very useful for LARGE databases and for databases where the data structure is not fixed (might change over time).
   - These do not use SQL, and the data is not stored in tables.
   - They are instead stored in a format that is optimized for the specific type of data being stored.
   - Examples of non-Relational databases include:
     * MongoDB
     * Cassandra
     * Redis
     * Neo4j
   - Projects that use non-Relational databases include:
     * Netflix
     * Twitter
     * LinkedIn

 # When to use different types of databases?
   - It is not always easy to decide which type of database to use.
   - There are many factores to consider, including:
     * The types of data you are storing
     * The amount of data
     * The performance requirements
     * The level of expertise on your team.
   - In general, relational databases are good for applications that require multi-row transactions.
   - In general, non-relational databases are good for applications that need to handle large amounts of data where the data structure is not known in advance.
   - It is possible to use both types of databases for the same application.

 # Differnt Types of SQL Databases:
   - There are several types of SQL databases, but the most common are MySQL, PostgreSQL, and SQLite.
   - MySQL is the most popular open-source database, and is the default database for many content management systems including WordPress and Drupal.
     * MySQL is generally known for its fast read operations, making it a good choice for read-heavy applications.
   - Postgres is also an open-source database, and is used by many large organizations, including Apple, Cisco and Red Hat.
     * Postgresis generally known for its readabliity, data integreity, and correctness.
     * It excels in write-heavy operations and complex query optimizations.
     * Often favored for systems that require copmlex queries, including data warehousing and analytics applications.
   - SQLite is a lightwight database which is used by many applications including Firefox, Chrome and Skype.
     * Generally known for its simplicity
     * A good choice for applications that need a lightweight database without the overhead ofa  client-server database engine.

 # Introduction to SQL:
   - SQL:       A programming language used to communicate with data stored in a relational database management system.
   - SQL syntax is similar to the English language, which makes it relatively easy to write, read and interpret.
   - It used for tasks such as retrieving data from a database, inserting new data, updating existing data, and deleting data.
   - It is a standard language for storing, manipulating, and retrieving data in databases.
   - Most SQL syntax is compatible with all databases.

 # Creating Tables:
   - SQL databases store their data in tables.
   - A table is a collection of related data and it consists oof columns and rows.
   - Databases are useful for storing information categorically.
   - A company may have a database with the following tables:
     * Employees
     * Products
     * Customers
     * Orders
     * Invoices
     * etc
   - We will use an SQL editor to create and manipulate a database.   
   - To create a table, you use the "CREATE TABLE" statement.
   - The following statement creates a new table labeled Employees.

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

*//------------------------------------------------------------------------------//*
*!!NOTE: in this editor, data isn't persistent, meaning you would need to create tables, data, etc each and every time you run the SQL statement. This is for learning purposes only!!*

   - The data tyes in the above SQL statement are:
     * int : used for integer numbers
     * varchar : used for variable-length character strings
     * date : used for date values
     * text : used for long text strings
   - Other data types include:
     * float : used for floating-point numbers
     * decimal : used for decimal numbers
     * boolean : used for boolean values
     * blob : used for binary data
     * json : used for storing JSON data
     * uuid : used for storing UUIDs
     * array : used for storing arrays
   - Size of the data matters as it affects the performance of the database.
     * For example, if you know that a column will only store values up to 255 characters, you should use varchar(255) instead of text
     * This improves the performance of the database.
     * Another example is if you know that a column will only store values up to 10 characters, you should use varchar(10) instead of varchar(255)
     * This will improve the performance of the database.
     * This is because the database will allocate memory for the column, and will be able to store more rows in memory.
   - Going over the example above, 
     * EmployeeID is an integer number that uniquely indentifies each employee
     * LastName is a variable-length character string that stores the last name of the employee
     * FirstName is a variable-length character string that stores the first name of the employee
     * BirthDate is a date value that stores the birthday of the employee
     * Notes is a long text string that stores notes about the employee

 # Inserting Data:
   - To insert data into a table, you use the "INSERT INTO" statement
   - The following statement inserts a new row into the Employees table:

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');

*//------------------------------------------------------------------------------//*        

   - "INSERT INTO" is a clause that adds the specified row(s) into the table
   - "Employees" is the name of the table
   - (EmployeeID, LastName, FirstName, BirthDate, Notes) is a parameter that lists the columns that the "INSERT INTO" statement will insert values into
   - "VALUES" is a clause that indicates that the data being inserted in order of the columns specified in the "INSERT INTO" clause

 # Selecting Data:
   - Selecting data refers to the retrieval of data from a database.
   - To select data from a table, you use the "SELECT" statement.

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');

SELECT * FROM Employees;

*//------------------------------------------------------------------------------//*     

   - Upon executing, you should see the following output:
     * 1|Doe|John|1990-01-01|John Doe was born on January 1, 1990.
   - "SELECT" is a clause that indicates that the statement is a query. You will SELECT every time you query data from a database.
   - " * " is a wildcard character that indicates all columns. This returns all columns from the Employees table.
   - "FROM Employees" is a cluase that indicates the table that you are querying data from. 
   - " ; " is a semicolon that indicates the end of a statment. Though it is optional, it is best practice to use it.
   - This is also called a query.
   - A query is a request for data or information from a database table or combination of tables.
   - A query alwasy returns a result set, even if it's empty.
   - You can thing of a result set as a temporary table that holds the data returned by the query.
   - In the example above, the result set contains all rows from the Employee table.
   - If you want to select only some columns, you can specify them after the "SELECT" clause. 
   - For example, the following statement selects only thte FirstName and LastName columns from the Employees table:

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');

SELECT FirstName, LastName FROM Employees;

*//------------------------------------------------------------------------------//* 

 # Where Clause:
   - The "WHERE" clause is used to filter records.
   - It is used to extract only those records that fulfill a specified condition.
   - The following is a "WHERE" statment that selects all rows from the Employees table where the FirstName is equal to "John":

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (2, 'Doe', 'Jane', '1991-02-02', 'Jane Doe was born on February 2, 1991.');

SELECT * FROM Employees WHERE FirstName = 'John';

*//------------------------------------------------------------------------------//* 

   - You should see the following output:
     * 1|Doe|John|1990-01-01|John Doe was born on January 1, 1990.
   - "WHERE" is a clause that indicates you want to fileter the result set to include only rows where the following condition is true.
   - FirstName = 'John' is a condition that the FirstName column equals John
    
   - The Where clause can be combined with "AND", "OR", and "NOT" operators.
   - The following statment selects all rows from the Employeese table where the FistName is equal to John and Lastname is equal to Doe

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (2, 'Doe', 'Jane', '1991-02-02', 'Jane Doe was born on February 2, 1991.');

SELECT * FROM Employees WHERE FirstName = 'John' AND LastName = 'Doe';

*//------------------------------------------------------------------------------//* 

   - Output: 
     * 1|Doe|John|1990-01-01|John Doe was born on January 1, 1990.
   - "AND" is an operator that combines two conditions. Both conditions must be ture for the row to be included in the result set.
   - FirstName = 'John' is a condition that the FirstName column equals John
   - LastName = 'Doe' is a condition that the LastName column equals Doe
   - "SELECT * FROM Employees" is the statement that you want to execute.
   - "WHERE FirstName = 'John' AND LastName = 'Doe'" is the condition that you want to filter the result set with.
    
   - The WHERE clause can also be combined with the OR operator.
   - The following statment selects all rows from the Employees table wher ethe FirstName is equal to John or LastName equal to Doe

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (2, 'Doe', 'Jane', '1991-02-02', 'Jane Doe was born on February 2, 1991.');

SELECT * FROM Employees WHERE FirstName = 'John' OR LastName = 'Doe';

*//------------------------------------------------------------------------------//* 

   - Output:
     * 1|Doe|John|1990-01-01|John Doe was born on January 1, 1990.
     * 2|Doe|Jane|1991-02-02|Jane Doe was born on February 2, 1991. 
   - OR is an operator that combines two conditions. Either one of the conditions must be true for the row to be included in the result set.
   - FirstName = 'John' is a condition that the FirstName column equals John.
   - LastName = 'Doe' is a condition that the LastName column equals Doe.
   - SELECT * FROM Employees is the statement that you want to execute. 
    
   - The "WHERE" clause can also be combined with the "NOT" operator.
   - The following selects all rows from the Employees table where the FirstName is not equal to John:

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (2, 'Doe', 'Jane', '1991-02-02', 'Jane Doe was born on February 2, 1991.');

SELECT * FROM Employees WHERE NOT FirstName = 'John';

*//------------------------------------------------------------------------------//* 

   - Output:
     * 2|Doe|Jane|1991-02-02|Jane Doe was born on February 2, 1991.
   - NOT is an opertor that negates the condition the follows it. The NOT operator displays a record if ht econdition(s) are NOT TRUE.

 # Why is WHERE important?:
   - It allows you to extract only the data that you need from a table
   - When you query a table with millions of rows, returning all the rows will consume the bandwidth of your database server, and put unnecessary load on it.
   - This will slow down the database server, and will slow down you application.
   - By using WHERE you can return only the rows that you need and reduce the load on your database server.
   - It is used in almsot every SQL statement.
   - It is used to filter the result set to include only rows that meet the specified condition.
   - It is also used to limit the number of rows that is returned by a query.
   - This is also useful for security purposes, as you can limit the data that a user can access.
     * For example, you can limit a user to only see their own data, and not the data of other users.
     * This is called row-level security and is a very powerful feature of SQL
   - Extracting millions of rows can be problematic for other reasons as well.
   - If you are extracting data from a table with millions of rows and you are using a slow internet connection, it might take a long time to download the data.
   - By using the WHERE clause you can reduce the amount of data that you need to download and reduce your costs.

 # Order By Clause:
   - The "ORDER BY" clause is used to sort the result set in ascending or descending order.
   - The "ORDER BY" clause is is set to sort in ascending order by default.
   - To sort the result set in descending order, you use the "DESC" keyword.
   - The following statement sorts the result set in ascending order by the FirstName column:

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (2, 'Doe', 'Jane', '1991-02-02', 'Jane Doe was born on February 2, 1991.');

SELECT * FROM Employees ORDER BY FirstName;

*//------------------------------------------------------------------------------//*

   - Output:
     * 2|Doe|Jane|1991-02-02|Jane Doe was born on February 2, 1991.
     * 1|Doe|John|1990-01-01|John Doe was born on January 1, 1990.
   - ORDER BY indicates that you want to sort the result by set.
   - FirstName is a column that you want to sort by
   - SELECT * FROM Employees is the statement that you want to execute.
   - The "ORDER BY" clause can also be sued to sort the result in descending order by add "DESC" at the end.

 # Limit Clause:
   - The "LIMIT" clause is used to limit the number of rows returned by a query. 
   - The "LIMIT" clause is used in the "SELECT" statement.
   - The following statement selects the first 10 rows from the Employees table:

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (2, 'Doe', 'Jane', '1991-02-02', 'Jane Doe was born on February 2, 1991.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (3, 'Doe', 'Mary', '1992-03-03', 'Mary Doe was born on March 3, 1992.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (4, 'Doe', 'Mark', '1993-04-04', 'Mark Doe was born on April 4, 1993.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (5, 'Doe', 'Lisa', '1994-05-05', 'Lisa Doe was born on May 5, 1994.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (6, 'Doe', 'Robert', '1995-06-06', 'Robert Doe was born on June 6, 1995.');

SELECT * FROM Employees LIMIT 3;

*//------------------------------------------------------------------------------//*

   - The LIMIT clause is important because it allows you to limit the number of rows returned by a query.
   - You wouldn't want to receive thousands of rows when you only need the first 10.
   - Not having the LIMIT clause in your statement will slow down your application, especially if you have poor internet connection.
   - To get the last 3 rows from the Employees table, you use the "OFFSET" clause.
   - The following statement will select the last 3 rows of the Employee table:

*//------------------------------Example: Employees------------------------------//*

SELECT * FROM Employees ORDER BY EmployeeID DESC LIMIT 3;

*//------------------------------------------------------------------------------//*

   - Notice how the code is executed from left to right, meaning it will first order the result set in descending order by EmployeeID column, and then it will select the first 3 rows.

 # Aggregate Functions:
   - Aggregate Functions:     Used to perform calculations on a set of values and return a single value.
   - They are often used with the "GROUP BY" clause of the "SELECT" statement.
   - The following table shows the most commonly used aggregate functions:

| Function  | Description                |
| --------- | -------------------------- |
| `AVG()`   | Returns the average value  |
| `COUNT()` | Returns the number of rows |
| `FIRST()` | Returns the first value    |
| `LAST()`  | Returns the last value     |
| `MAX()`   | Returns the largest value  |
| `MIN()`   | Returns the smallest value |
| `SUM()`   | Returns the sum            |

   - The following statement returns the number of rows in the Employees table:

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (2, 'Doe', 'Jane', '1991-02-02', 'Jane Doe was born on February 2, 1991.');

SELECT COUNT(*) FROM Employees;

*//------------------------------------------------------------------------------//*

   - Output:
     * 2
   - COUNT (*) is an aggregate function that returns the number of rows in the result set.
   - SELECT COUNT (*) FROM Employees is the statement that you want to execute.
   - The following statement will return the average birth date of all employees in the Employees table:

*//------------------------------Example: Employees------------------------------//*

SELECT AVG(BirthDate) FROM Employees;

*//------------------------------------------------------------------------------//*

   - Output:
     * 1991-02-02
   - This is useful in several ways:
     * If you wanted to find the oldest employee, you can use the "MAX()" function to fin d the largest birth date of all employees in the Employee table.  
   
 # Why use Aggregate Functions?:
   - Aggregate functions save you time and effort because they allow you to perform calculations on a set of values and return a single value.
   - Pulling in all the data and performing calculations on it can be time consuming and resource intensive. 
   - Using aggregate functions means that you can reduce the amount of data that you need to download, and speed up your application.

 # GROUP BY Clause:
   - The "GROUP BY" clause is used to group the result set by one or more columns.
   - The "GROUP BY" clause is often used with aggregate functions such as AVG(), COUNT(), MAX(), MIN(), and SUM().
   - The following statement will group the result set by the FirstName column and returns the number of Employees for  each group.

*//------------------------------Example: Employees------------------------------//*

CREATE TABLE Employees (
    EmployeeID int,
    LastName varchar(255),
    FirstName varchar(255),
    BirthDate date,
    Notes text
);

INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (1, 'Doe', 'John', '1990-01-01', 'John Doe was born on January 1, 1990.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (2, 'Doe', 'John', '1991-02-02', 'Jane Doe was born on February 2, 1991.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (3, 'Moe', 'John', '1992-03-03', 'Mary Doe was born on March 3, 1992.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (4, 'Doe', 'Mark', '1993-04-04', 'Mark Doe was born on April 4, 1993.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (5, 'Doe', 'Lisa', '1994-05-05', 'Lisa Doe was born on May 5, 1994.');
INSERT INTO Employees (EmployeeID, LastName, FirstName, BirthDate, Notes)
VALUES (6, 'Doe', 'Robert', '1995-06-06', 'Robert Doe was born on June 6, 1995.');

SELECT FirstName, COUNT(*) FROM Employees GROUP BY FirstName;

*//------------------------------------------------------------------------------//*

   - Output:
     * John|3
     * Lisa|1
     * Mark|1
     * Robert|1 
   - GROUP BY FirstName is a clause that groups the result set by the FirstName column.
   - SELECT FirstName, COUNT(*) is the clause that specifies the columns that you want to select.
   - FROM Employees is a clause that specifies the table you want to query data from.

*//------------------------------Example: Employees------------------------------//*

SELECT FirstName, COUNT(*) FROM Employees GROUP BY FirstName ORDER BY COUNT(*) ASC;

*//------------------------------------------------------------------------------//*

   - Output:
     - Lisa|1
     - Mark|1
     - Robert|1
     - John|3
   - This is useful because it allows you to sort the groups in the result set.
   - If you want to find the most popular first name, you can use the GROUP BY clause to group the result set by the FirstName column and return the number of employees for each group.
   - This prevents you from extracting all the data and performing calculations on it.
   - By using GROUP BY, you can group the result set and reduce the amount of data that you need to download.

 # Having Clause:
    - The "HAVING" clause is used to filter groups in the result set.
    - The "HAVING" clause is often used with aggregate functions like AVG(), COUNT(), MAX(), MIN(), and SUM().
    - The following statement groups the result set by the FirstName column and returns the number of employees for each group. It also filters the groups that have more than 1 employee.

*//------------------------------Example: Employees------------------------------//*

SELECT FirstName, Count(*) FROM Employees GROUP BY FirstName HAVING COUNT(*) > 1;

*//------------------------------------------------------------------------------//*

   - The HAVING COUNT (*) > 1 is a clause that filters groups that have more than 1 employee.
   - This is useful because it allows you to sort the groups in the result set.
   - This prevents you from extracting all the data and performing calculations on it.
   - By using HAVING, you can group the result set and reduce the amount of data that you need to download.

 # Introduction to Joins:
   - A JOIN clause is used to combine rows from two or more tables, based on a related column between them.
   - There are several different types of JOIN you can use to combine your tables.

 # JOIN Types:
   - INNER:           Returns rows when there is a match in both tables.
   - LEFT:            Returns all rows from the left side of the table, and the matched rows from the right side of the table.
     * The difference between a LEFT JOIN and an INNER JOIN is that a LEFT returns all rows from the left table, even if there is no match in the right table.
     * The LEFT table is the table that is specified BEFORE the LEFT JOIN clause.
     * The RIGHT table is the table that is specified AFTER the LEFT JOIN clause.
   - RIGHT:           Returns all rows from the right table, and the matched rows from the left table, even if there is no match in the left table.
   - FULL:            Returns all rows when there is a match in one of the tables.
     * This means that if there are rows in the left table that do not have matches in the right table, those rows will be included in the result set and vice-versa.
   - SELF:            Used to join a table to itself as if the table were two tables, temporarily renaming at least one table in the statement.  