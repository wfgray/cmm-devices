FROM openjdk:8-jdk-alpine
VOLUME /tmp
ADD demo2-0.1.0.jar app.jar
CMD sleep 90 && java -Djava.security.egd=file:/dev/./urandom -jar /app.jar