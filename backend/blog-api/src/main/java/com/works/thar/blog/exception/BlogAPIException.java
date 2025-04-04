package com.works.thar.blog.exception;

public class BlogAPIException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public BlogAPIException(String message) {
		super(message);
	}

	public BlogAPIException(String message, Throwable cause) {
		super(message, cause);
	}

}
