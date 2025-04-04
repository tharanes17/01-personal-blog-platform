package com.works.thar.blog.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.works.thar.blog.model.Article;

@Repository
public interface ArticleRepository extends JpaRepository<Article, UUID> {
	List<Article> findByTitleContainingIgnoreCase(String title);
	List<Article> findByTagsContainingIgnoreCase(String tag);
	List<Article> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
	List<Article> findByUpdatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
}
