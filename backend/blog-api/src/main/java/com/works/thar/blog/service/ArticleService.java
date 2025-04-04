package com.works.thar.blog.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.works.thar.blog.exception.BlogAPIException;
import com.works.thar.blog.model.Article;
import com.works.thar.blog.repository.ArticleRepository;

@Service
public class ArticleService {
	
	@Autowired
	private ArticleRepository articleRepository;
	
	public List<Article> getAll() {
		return articleRepository.findAll();
	}
	
	public Article getById( UUID id) {
		return articleRepository.findById(id).orElse(null);
	}
	
	public Article create(Article article) {
		return articleRepository.save(article);
	}
	
	public Article update( UUID id, Article article) {
		Article articleToUpdate = articleRepository.findById( id).orElse(null);
		if (articleToUpdate != null) {
			articleToUpdate.setTitle(article.getTitle());
			articleToUpdate.setContent(article.getContent());
			articleToUpdate.setTags(article.getTags());
			return articleRepository.save(articleToUpdate);
		}
		throw new BlogAPIException("Article not found");
	}
	
	public List< Article> getByTag( String tag) {
		return articleRepository.findByTagsContainingIgnoreCase(tag);
	}

	public void delete( UUID id) {
		articleRepository.deleteById(id);
	}
}
