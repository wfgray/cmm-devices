package sprint.rest.api.device.business;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.document.JsonDocument;
import com.couchbase.client.java.query.N1qlQuery;
import com.couchbase.client.java.query.N1qlQueryResult;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import sprint.rest.api.device.model.Device;

@Service
public class DeviceBusinessImpl implements DeviceBusiness {

	private static final Logger log = LoggerFactory.getLogger(DeviceBusinessImpl.class);

    @Value("${query.devices}")
    private String QUERY_ALL_DEVICES;
    
    @org.springframework.beans.factory.annotation.Autowired
    public DeviceBusinessImpl(ObjectMapper objectMapper) {
	    this.objectMapper = objectMapper;
	}	    
    
	@Autowired
	private Bucket loginBucket;

	private final ObjectMapper objectMapper;
   
	public JsonDocument getDeviceBySKU(String sku) {
		log.info("Request received for GerDeviceBySku, SKU ID = "+sku);
		return loginBucket.get(sku);
	}

	public List<Device> getDevices() throws JsonParseException, JsonMappingException, IOException {
		log.info("Request received for Get all the Devices");
		loginBucket.bucketManager().createN1qlPrimaryIndex(true, false);
    	N1qlQueryResult responseData = loginBucket.query(N1qlQuery.simple(QUERY_ALL_DEVICES));
    	List<Device> listRes = new ArrayList<Device>();
    	
    	if(responseData!=null && !responseData.allRows().isEmpty()){
    		for(int cnt=0;cnt<responseData.allRows().size();cnt++){    		
				listRes.add(objectMapper.readValue(responseData.allRows().get(cnt).value().get("Devices").toString(), Device.class));    			
        	}
    	}
    	
		return listRes;
	}
	

}
