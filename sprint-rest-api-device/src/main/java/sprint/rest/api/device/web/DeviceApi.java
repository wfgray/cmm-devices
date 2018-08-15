/**
 * NOTE: This class is auto generated by the swagger code generator program (2.3.1).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package sprint.rest.api.device.web;

import io.swagger.annotations.*;
import sprint.rest.api.device.model.Device;
import sprint.rest.api.device.model.ModelApiResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.*;
import java.util.List;
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2018-08-14T18:59:42.272-05:00")

@Api(value = "device", description = "the device API")
public interface DeviceApi {

    @ApiOperation(value = "Get device details by sku", nickname = "getDeviceBySKU", notes = "Return a single device", response = Device.class, tags={ "Device", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Device.class),
        @ApiResponse(code = 400, message = "Invalid request", response = ModelApiResponse.class),
        @ApiResponse(code = 404, message = "Device not found", response = ModelApiResponse.class),
        @ApiResponse(code = 500, message = "Service unaviable", response = ModelApiResponse.class) })
    @RequestMapping(value = "/device/{sku}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<Device> getDeviceBySKU(@ApiParam(value = "ID of Device to return",required=true) @PathVariable("sku") String sku);


    @ApiOperation(value = "Get all device", nickname = "getDevices", notes = "Return all devices", response = Device.class, tags={ "Device", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "successful operation", response = Device.class),
        @ApiResponse(code = 400, message = "Invalid request", response = ModelApiResponse.class),
        @ApiResponse(code = 404, message = "Device not found", response = ModelApiResponse.class),
        @ApiResponse(code = 500, message = "Service unaviable", response = ModelApiResponse.class) })
    @RequestMapping(value = "/device",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<Device> getDevices();

}