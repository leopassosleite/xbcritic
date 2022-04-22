package com.xbsoftwares.xbcritic.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xbsoftwares.xbcritic.dto.MovieDTO;
import com.xbsoftwares.xbcritic.dto.ScoreDTO;
import com.xbsoftwares.xbcritic.entities.Movie;
import com.xbsoftwares.xbcritic.entities.Score;
import com.xbsoftwares.xbcritic.entities.User;
import com.xbsoftwares.xbcritic.repositories.MovieRepository;
import com.xbsoftwares.xbcritic.repositories.ScoreRepository;
import com.xbsoftwares.xbcritic.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ScoreRepository scoreRepository;

	public MovieDTO saveScore(ScoreDTO dto) {

		User user = userRepository.findByName(dto.getName());
		if (user == null) {
			user = new User();
			user.setName(dto.getName());
			user = userRepository.saveAndFlush(user);
		}

		Movie movie = movieRepository.findById(dto.getMovieId()).get();

		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());

		score = scoreRepository.saveAndFlush(score);

		double sum = 0.0;
		for (Score s : movie.getScores()) {
			sum += s.getValue();
		}

		double avg = sum / movie.getScores().size();

		movie.setScore(avg);
		movie.setCount(movie.getScores().size());

		movie = movieRepository.save(movie);

		return new MovieDTO(movie);
	}
}
