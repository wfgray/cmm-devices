FROM couchbase
COPY configure-server.sh /opt/couchbase
RUN ["chmod", "+x", "/opt/couchbase/configure-server.sh"]
COPY Device.json /
CMD ["/opt/couchbase/configure-server.sh"]
