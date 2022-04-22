package com.xbsoftwares.xbcritic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xbsoftwares.xbcritic.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {
	
}
