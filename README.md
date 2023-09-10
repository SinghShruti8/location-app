# Project Description

Aim: The idea is to build a full-stack application that has a location-based or mapping component

Technologies:
  1. Data: Taken from https://overpass-turbo.eu/ by generating JSON file with cafes in Ireland.
  2. Database: Used Docker to get image of PGADMIN and POSTGRESQL/POSTGIS to deal with spatial data
  3. Front-end: Progressive Web Application (PWA) implemented.
  4. Middle tier: Django web app using conda
  5. Deployement: Tried to deploy the application using Docker, Nginx, Gunicorn
             Cloud provider: DigitalOcean
             Domain from: GoDaddy

Project Deliverables:

1. Working PWA
   <img width="1354" alt="Screenshot 2023-09-10 at 19 00 01" src="https://github.com/SinghShruti8/location-app/assets/71876624/c10286cd-1b54-417e-998b-cfa66742bb9b">

3. User Registration and Login Page
   <img width="1440" alt="Screenshot 2023-08-31 at 16 49 49" src="https://github.com/SinghShruti8/location-app/assets/71876624/a5557cbf-6c69-41c6-8a76-0651b170aeaf">
<img width="1438" alt="Screenshot 2023-08-31 at 16 49 56" src="https://github.com/SinghShruti8/location-app/assets/71876624/c412d581-ca15-4390-8cd8-c454f94d4e34">

4. Home Page asking for user's location and displaying the nearby cafes (only if the user is logged in)
   <img width="1440" alt="Screenshot 2023-08-31 at 16 49 32" src="https://github.com/SinghShruti8/location-app/assets/71876624/17e8fc6c-7b5a-4c77-a35a-11e16d655c8c">

Attempts for Deployement:

1. Working digitalocean droplet:
   <img width="1440" alt="Screenshot 2023-08-31 at 16 57 49" src="https://github.com/SinghShruti8/location-app/assets/71876624/01370dee-20e1-4252-824d-fd8305bd877f">

   <img width="851" alt="Screenshot 2023-08-31 at 16 59 06" src="https://github.com/SinghShruti8/location-app/assets/71876624/4a4e26a5-32eb-419c-821d-9ecd8f35a56f">

2. Working Docker containers:
   <img width="1266" alt="Screenshot 2023-08-31 at 16 53 30" src="https://github.com/SinghShruti8/location-app/assets/71876624/48d8e481-5bd4-4355-9f1e-b75b1b17cdf7">

   <img width="1242" alt="Screenshot 2023-08-31 at 16 59 36" src="https://github.com/SinghShruti8/location-app/assets/71876624/6bd43e3c-582b-41b8-a3e4-48234c4e55ea">


2. Domain Name:
   <img width="1189" alt="Screenshot 2023-08-31 at 16 58 06" src="https://github.com/SinghShruti8/location-app/assets/71876624/fcedeeb4-e010-441b-af25-23560bdcd5a0">

4. Working NGINX:
   <img width="1436" alt="Screenshot 2023-08-29 at 22 40 10" src="https://github.com/SinghShruti8/location-app/assets/71876624/5279efd2-5b07-4a85-b912-86f10fba526d">

   <img width="1310" alt="Screenshot 2023-08-31 at 17 02 16" src="https://github.com/SinghShruti8/location-app/assets/71876624/563de300-9488-46ba-960f-5d5a65b19f53">

The deployement did not work at the end due to some issues encountered on the device which led to conda not working when generating the image of the application. 
<img width="1427" alt="Screenshot 2023-08-30 at 14 58 13" src="https://github.com/SinghShruti8/location-app/assets/71876624/bca5563d-590d-4dbb-af6d-f59e35d438ea">

<img width="613" alt="Screenshot 2023-08-30 at 02 02 04" src="https://github.com/SinghShruti8/location-app/assets/71876624/35a90294-ee45-4c45-98b9-217ab1c37040">



However, a full stack django application has been achieved which shows the user nearby cafes and how far they are. I will be working towards deploying this application through
docker by identifying and rectifying the errors and issues encountered.


   



