FROM openjdk:8-jre

ENTRYPOINT ["/usr/bin/java", "-jar", "/usr/share/cmm/cmm_devices.jar"]

# Add the service itself
ARG JAR_FILE
ADD target/${JAR_FILE} /usr/share/cmm/cmm_devices.jar
