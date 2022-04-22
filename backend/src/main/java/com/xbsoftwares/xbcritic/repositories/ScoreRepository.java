package com.xbsoftwares.xbcritic.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xbsoftwares.xbcritic.entities.Score;
import com.xbsoftwares.xbcritic.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
	
}
