# Customer Service Portal

## Overview
This is a simple CRUD (Create, Read, Update, Delete) application that manages customer records. The customer data includes:

- **First Name**
- **Last Name**
- **Email Address**
- **Contact Number**

This project uses **React** for the frontend, **Laravel** for the backend API, **XAMPP** for managing MySQL, and **Docker Compose** to manage the containerized environment for backend services.

---

## Features
The application includes the following CRUD operations for managing customer data:

- **Create a Customer**: Add a new customer with First Name, Last Name, Email, and Contact Number.
- **Update a Customer**: Edit an existing customer's data.
- **Delete a Customer**: Remove a customer from the system.
- **List All Customers**: View all customers in a table.
- **View a Customer**: View detailed information of a specific customer.

---

## Technologies Used

- **Frontend**: React.js (JavaScript framework)
- **Backend**: Laravel (PHP framework)
- **Database**: MySQL (via XAMPP or Dockerized MySQL)
- **Containerization**: Docker Compose
- **UI**: Bootstrap (CSS framework)

---

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Docker** and **Docker Compose** (for managing containers)
- **XAMPP** (for running MySQL locally, or use Dockerized MySQL)
- **Node.js** and **npm** (for managing and running the React frontend)
- **PHP** and **Composer** (for running Laravel)

---

## Setup Instructions

### 1. Clone the Repository

Clone this project to your local machine:

```bash
git clone https://github.com/counter101/customer-management-app.git
cd customer-management-app


### 2. Docker Setup (Optional but recommended)

The backend and MySQL database can run in Docker containers. Make sure you have Docker and Docker Compose installed on your machine.

### 2.1.  Docker Compose Configuration

The docker-compose.yml file should be located in the root directory of your project. Ensure it includes configurations for the Laravel API, MySQL, and any other services you might need (like Redis for caching or MailHog for email testing).

version: '3.8'

services:
  app:
    build: .
    container_name: laravel_app
    ports:
      - 8000:8000
    volumes:
      - ./backend:/var/www/html
    networks:
      - laravel

  db:
    image: mysql:5.7
    container_name: mysql_db
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: customer
      MYSQL_USER: root
      MYSQL_PASSWORD: ''
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
    networks:
      - laravel

  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    container_name: phpmyadmin
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: root
    ports:
      - "8080:80"
    networks:
      - laravel

networks:
  laravel:
    driver: bridge

volumes:
  mysql_data:


### 2.2.  Build and Start Docker Containers
In the project root directory, run the following command to build and start the containers:


***This command will start the following services:

docker-compose up -d

Laravel API: Running at http://localhost:8000
MySQL Database: Running at localhost:3306
phpMyAdmin: Running at http://localhost:8080 for MySQL management


***If you want to view logs for the containers, run:

docker-compose logs -f

### 2.3.  Build and Start Docker Containers

***To stop the containers:

docker-compose down


### 3. Laravel Backend Setup

Once the Docker containers are up and running, follow these steps to set up Laravel:


### 3.1 Install Dependencies

docker-compose exec app bash
composer install

### 3.2 Set Up Environment File

Make sure your .env file is configured correctly for the Docker services. The DB_HOST should be set to db (the service name in the Docker configuration).

Run the following commands to set up the application key and database:

php artisan key:generate
php artisan migrate

### 4. React Frontend Setup

The frontend is a React application that communicates with the Laravel API.

### 4.1 Install React Dependencies

cd frontend
npm install


### 4.2 Run React Development Server
npm start

The frontend should be available at http://localhost:3000.



API Endpoints
Customer Endpoints

GET /api/customers - Get a list of all customers
GET /api/customers/{id}/edit - Get details of a specific customer
POST /api/customers - Create a new customer
PUT /api/customers/{id}/edit - Update an existing customer
DELETE /api/customers/{id}/delete - Delete a customer

UI/UX Design
The frontend is built using React and styled with Bootstrap to provide a clean and responsive user interface for customer management.

