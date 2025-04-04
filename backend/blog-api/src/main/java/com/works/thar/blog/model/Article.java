package com.works.thar.blog.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "articles")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Article {
	
	@Id
	@GeneratedValue
	private UUID id;
	
	private String title;
	
	@Column(columnDefinition = "TEXT")
	private String content;
	
	@ElementCollection
	private List<String> tags;
	
	private LocalDateTime createdAt;
	
	private LocalDateTime updatedAt;
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = LocalDateTime.now();
		this.updatedAt = LocalDateTime.now();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = LocalDateTime.now();
	}
	

}
