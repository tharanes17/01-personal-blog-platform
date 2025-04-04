package com.works.thar.blog.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.works.thar.blog.model.Article;
import com.works.thar.blog.service.ArticleService;

@RestController
@RequestMapping("/api/articles")
public class ArticleController {
	
	@Autowired
	private ArticleService articleService;
	
	@GetMapping
	public ResponseEntity< List< Article>> getAll( @RequestParam( required = false) String tag) {
		if (tag != null) {
			return ResponseEntity.ok( articleService.getByTag( tag));
		}
		return ResponseEntity.ok( articleService.getAll());
	}
	
	@GetMapping( "/{id}")
	public ResponseEntity< Article> getById( @PathVariable String id) {
		Article article = articleService.getById( UUID.fromString( id));
		if (article != null) {
			return ResponseEntity.ok( article);
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity< Article> create( @RequestBody Article article) {
		Article createdArticle = articleService.create( article);
		return ResponseEntity.status(201).body( createdArticle);
	}
	
	@PutMapping( "/{id}")
	public ResponseEntity< Article> update( @PathVariable String id, @RequestBody Article article) {
		Article updatedArticle = articleService.update(  UUID.fromString( id), article);
		if (updatedArticle != null) {
			return ResponseEntity.ok( updatedArticle);
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping( "/{id}")
	public ResponseEntity< Void> delete( @PathVariable String id) {
		articleService.delete( UUID.fromString( id));
		return ResponseEntity.noContent().build();
	}
}
