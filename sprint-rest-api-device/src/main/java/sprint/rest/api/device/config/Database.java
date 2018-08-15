package sprint.rest.api.device.config;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Database {

    @Value("${storage.host}")
    private String host;

    @Value("${storage.bucket}")
    private String bucket;

    @Value("${storage.username}")
    private String username;

    @Value("${storage.password}")
    private String password;

    public @Bean Cluster couchbaseCluster() {
    	 CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder()
                 .connectTimeout(90000) //10000ms = 10s, default is 5s
                 .build();
    	System.out.println("Create connection");
    	CouchbaseCluster cluster = CouchbaseCluster.create(env, host);
    	//CouchbaseCluster cluster = CouchbaseCluster.create(host);
        cluster.authenticate(username, password);
        return cluster;
    }

    public @Bean Bucket loginBucket() {
    	System.out.println("Open Bucket");
    	return couchbaseCluster().openBucket(bucket);
    }

}
