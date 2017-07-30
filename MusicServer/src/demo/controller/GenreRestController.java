package demo.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import demo.entity.Genre;
import demo.service.GenreService;

@RestController
public class GenreRestController {
	@Autowired
	private GenreService genreService;

	@RequestMapping(value = "genre", method = RequestMethod.GET)
	public ResponseEntity<List<Genre>> getAllGenre() {

		return new ResponseEntity<List<Genre>>(genreService.findAllGenre(), HttpStatus.OK);

	}

	@RequestMapping(value = "genre/{id}", method = RequestMethod.GET)
	public ResponseEntity<Genre> getGenre(@PathVariable int id) {
		Genre genre;
		try {
			genre = genreService.getGenre(id);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(genre, HttpStatus.OK);
	}

	@RequestMapping(value = "genre", method = RequestMethod.POST)
	public ResponseEntity<Void> addGenre(@RequestBody Genre genre) {
		try {
			Random r = new Random();
			int genreId = r.nextInt(300);
			genre.setGenreId("G"+genreId);
			genreService.addGenre(genre);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "genre", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateUser(@RequestBody Genre genre) {
		try {
			genreService.updateGenre(genre);
		} catch (Exception e) {
			System.out.print(e);
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "genre/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteGenre(@PathVariable int id) {
		try {
			genreService.deleteGenre(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
}
