FROM couchbase
COPY configure-server.sh /opt/couchbase
RUN ["chmod", "+x", "/opt/couchbase/configure-server.sh"]
COPY pclines.json /
CMD ["/opt/couchbase/configure-server.sh"]
