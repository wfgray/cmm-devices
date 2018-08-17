package sprint.rest.api.device.business;

import java.io.IOException;
import java.util.List;

import com.couchbase.client.java.document.JsonDocument;
import com.couchbase.client.java.query.N1qlQueryResult;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;

import sprint.rest.api.device.model.Device;

public interface DeviceBusiness {

	JsonDocument getDeviceBySKU(String sku);
	List<Device> getDevices() throws JsonParseException, JsonMappingException, IOException;
}
