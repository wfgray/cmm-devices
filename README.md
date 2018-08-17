Devices
========
Running Couchbase DB through docker container

1.The docker folder contains the db sub folder which executes the couchbase db set up on Docker.

2.Go to docker(with the help of cd command) folder.

3.Build the dockerfile.
 docker-compose build

4.Run the dockerfile to install the couchbase. 
 docker-compose up

5.Wait till the couchbase set up and login to http://localhost:8091 with details Adminstrator/password or Devices/Devices

End of couchbase setup.

Devices microservice uses a couchbase database and a springboot app

Build the project from the root
    &#x1F539; mvn clean install -Dmaven.test.skip.exec=true

ToDo 1: Modify for the devices database
To run database only
First start your couchbase db on docker.
Docker

Couch DB
Run the docker build command from the docker/db directory

	docker build -t couchbase-dev .

Run command to start the docker container.

	docker run -d --name pc-server -h db -p 8091-8094:8091-8094 -p 11210:11210 -e COUCHBASE_ADMINISTRATOR_USERNAME=Administrator -e COUCHBASE_ADMINISTRATOR_PASSWORD=password -e COUCHBASE_BUCKET=pc -e COUCHBASE_RBAC_USERNAME=pc -e COUCHBASE_RBAC_PASSWORD=password -e COUCHBASE_RBAC_NAME="admin-user" -e CLUSTER_NAME=pc-cluster couchbase-dev

After starting the container you login to the UI here http://localhost:8091/ui/index.html  You might need to change localhost to be your docker box IP or hostname.
from the left menu items choose Servers.  The Name field should represent your IP address.
End of ToDo 1:

ToDo 2: Modify for the devices api and verify that these steps still work for building the app
Building the demo application.  
In the src/main/resources/application.properties file set the couchbase.nodes to the IP address for your couchbase db.  The application expects the database to be available to it.  If you do not have a database up and running you can use.

    mvn package -DskipTests
	
To run outside of docker you do need the database started
    mvn package && java -jar target/demo2-0.1.0.jar
    OR
    mvn clean package spring-boot:run

To build docker container for the app, run the build command from docker/app
     docker build -t demoapp .

To run on docker
   docker run --name mydemoapp -p 8080:8080 -p 4567:4567 demoapp
End of ToDo 2  

ToDo 3: Add and modify for using docker compose
   
If you want to just run the app in docker run docker compose from the /docker directory
	docker-compose build
	docker-compose up
End of ToDo 3:

ToDo 4: We have added a parent pom
    1. Review and understand how the parent pom works.
    2. Research how to reference items from one project in a another.
        In this case we want to reference(copy) the model classes created in sprint-model-device in/to sprint-rest-api-devices
    3. Update this readme to include how to build all or only parts of the app
        mvn clean compile  and mvn package as examples
Emd of ToDo 4:
	
Note: I'm leaving this as it will come in handy 
    1. Run this in Jenkins Implement a nightly build against the dev branch
        a. To run in Jenkins we will need to figure out IP/hostnames.  This might drive the need to have multiple application.properties
    2. For now you will need to manually add the travel-sample bucket.  We should remove the code that uses the travel-sample bucket and only leave the Customer.
        a. Remove all but CustomerController.java in web
        b. Remove all but CustomerService.java and CustomerServiceImpl.java in service
        c. Remove all but customer.java, Address.java, Person.java and Entity.java in model
    3. Model Device data for the pc bucket in Swagger
        a. Use Customer as an example to create new device model
        b. Implement the device model in (web, service, model).  
    4. Modify StartupPreparations.java to check for valid data in pc bucket
Fix or verify these items

Test command - change the IP to be the IP of your docker.

	http://<IP>:4567/customer360/customer/customer::bblue22

Postman Test
    http://localhost:8080/api/customer/customer::bblue22

To test
    curl localhost:8080/actuator/health

To see Swagger
    http://localhost:8080/swagger-ui.html#/airport-controller

Swagger Tools
	
	https://swagger.io/tools/

Swagger Editor
API editor for designing APIs with the OpenAPI Specification
This is a good place to model your API.

Run Swagger UI in docker
	docker pull swaggerapi/swagger-editor
	
	What port 80 is used? Well make one up like 8099 then chnage the 80:8080 to 80:8099
	docker run -d -p 80:8080 swaggerapi/swagger-editor
	
	Then open URL
	http://localhost:8099

Swagger UI
Visualize OpenAPI Specification definitions in an interactive UI
We are using this in our demo2 - swagger branch

Swagger Codegen
Generate server stubs and client SDKs from OpenAPI Specification definitions

Install https://github.com/swagger-api/swagger-codegen

java -jar swagger-codegen<version>.jar generate \
  -i swaggerpc.yaml \
  --api-package demo.web \
  --model-package demo.model \
  --group-id demo \
  --artifact-id spring-swagger-codegen-productCatalog \
  --artifact-version 0.0.1-SNAPSHOT \
  -l spring \
  -o spring-swagger-codegen-productCatalog
  
  
  
  
