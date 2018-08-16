package sprint.rest.api.device.web;

import com.couchbase.client.deps.com.fasterxml.jackson.databind.JsonNode;
import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.document.AbstractDocument;
import com.couchbase.client.java.document.JsonDocument;
import com.couchbase.client.java.document.json.JsonObject;
import com.couchbase.client.java.query.N1qlParams;
import com.couchbase.client.java.query.N1qlQuery;
import com.couchbase.client.java.query.N1qlQueryResult;
import com.couchbase.client.java.query.N1qlQueryRow;
import com.couchbase.client.java.query.consistency.ScanConsistency;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import sprint.rest.api.device.config.Database;
import sprint.rest.api.device.model.Device;
import sprint.rest.api.device.model.ModelApiResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.*;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-14T18:59:42.272-05:00")

@Controller
public class DeviceApiController implements DeviceApi {

    private static final Logger log = LoggerFactory.getLogger(DeviceApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public DeviceApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    @Autowired
    private Bucket loginBucket;
    
    public ResponseEntity<Device> getDeviceBySKU(@ApiParam(value = "ID of Device to return",required=true) @PathVariable("sku") String sku) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {       
            	JsonDocument responseData = loginBucket.get(sku);
                return new ResponseEntity<Device>(objectMapper.readValue(responseData.content().toString(), Device.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Device>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<Device>(HttpStatus.NOT_IMPLEMENTED);
    }

    
	public ResponseEntity<Device> getDevices() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
            	loginBucket.bucketManager().createN1qlPrimaryIndex(true, false);
            	N1qlQueryResult responseData = loginBucket.query(N1qlQuery.simple("SELECT * FROM Devices"));
            	/*System.out.println(responseData.allRows().get(0).value());
            	List<ResponseEntity<Device>> listRes = new ArrayList<ResponseEntity<Device>>();
            	for(int cnt=0;cnt<responseData.allRows().size();cnt++){
            		//
            	}*/
            	//Return only one record
            	return new ResponseEntity<Device>(objectMapper.readValue(responseData.allRows().get(0).value().get("Devices").toString(), Device.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Device>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<Device>(HttpStatus.NOT_IMPLEMENTED);
    }
	
	

}
