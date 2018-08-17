FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD sprint-rest-api-device-0.0.1-SNAPSHOT.jar app.jar
CMD sleep 90 && java -Djava.security.egd=file:/dev/./urandom -jar /app.jar