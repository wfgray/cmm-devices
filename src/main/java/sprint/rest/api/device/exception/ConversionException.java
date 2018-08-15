package sprint.rest.api.device.exception;

public class ConversionException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public ConversionException(String message) {
		super(message);
	}

	public ConversionException(Throwable t) {
		super(t);
	}

	public ConversionException(String message, Throwable t) {
		super(message, t);
	}
}