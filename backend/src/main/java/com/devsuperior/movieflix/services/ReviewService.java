package com.devsuperior.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private AuthService authService;
	

	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		User user = authService.authenticated();
		Review entity = new Review();
		entity.setText(dto.getText());

		Movie movie = movieRepository.getOne(dto.getMovieId());
		entity.setMovie(movie);
		
		entity.setUser(user);
			
		entity = repository.save(entity);
		
		return new ReviewDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public List<ReviewDTO> reviewByMovie(Long movieId) {
		List<Review> list = repository.findByMovie(movieId);
		return list.stream().map(x -> new ReviewDTO(x)).collect(Collectors.toList());
	}
 }
