package sprint.rest.api.device.web;

import com.couchbase.client.java.document.JsonDocument;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import sprint.rest.api.device.business.DeviceBusiness;
import sprint.rest.api.device.model.Device;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
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
    private DeviceBusiness deviceBusiness;
    
  /* Moved the logic to business package 
   * @Autowired
    private Bucket loginBucket;*/
    
    @CrossOrigin
    public ResponseEntity<Device> getDeviceBySKU(@ApiParam(value = "ID of Device to return",required=true) @PathVariable("sku") String sku) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {       
            	//JsonDocument responseData = loginBucket.get(sku);
            	JsonDocument responseData = deviceBusiness.getDeviceBySKU(sku);
                return new ResponseEntity<Device>(objectMapper.readValue(responseData.content().toString(), Device.class), HttpStatus.OK);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<Device>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<Device>(HttpStatus.NOT_IMPLEMENTED);
    }

    
    @CrossOrigin
    public ResponseEntity<List<Device>> getDevices() {
        String accept = request.getHeader("Accept");
        List<Device> listRes = null;
    	if (accept != null && accept.contains("application/json")) {
    	   listRes = new ArrayList<Device>();
           try {       	    
				listRes = deviceBusiness.getDevices();
			} catch (JsonParseException e) {
				log.error("Couldn't serialize response for content type application/json", e);
	            return new ResponseEntity<List<Device>>(HttpStatus.INTERNAL_SERVER_ERROR);  
	        } catch (JsonMappingException e) {
	        	log.error("Couldn't serialize response for content type application/json", e);
	            return new ResponseEntity<List<Device>>(HttpStatus.INTERNAL_SERVER_ERROR);
			} catch (IOException e) {
				log.error("IO Exception with Error", e);
	            return new ResponseEntity<List<Device>>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
        	return new ResponseEntity<List<Device>>(listRes, HttpStatus.NOT_IMPLEMENTED);            
         }

       return new ResponseEntity<List<Device>>(listRes, HttpStatus.NOT_IMPLEMENTED);  
    }
	
	

}
