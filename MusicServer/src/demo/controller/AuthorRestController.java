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

import demo.entity.Author;
import demo.service.AuthorService;

@RestController
public class AuthorRestController {
	@Autowired
	private AuthorService AuthorService;

	@RequestMapping(value = "author", method = RequestMethod.GET)
	public ResponseEntity<List<Author>> getAllAuthor() {

		return new ResponseEntity<List<Author>>(AuthorService.findAllAuthor(), HttpStatus.OK);

	}

	@RequestMapping(value = "author/{id}", method = RequestMethod.GET)
	public ResponseEntity<Author> getAuthor(@PathVariable int id) {
		Author Author;
		try {
			Author = AuthorService.getAuthor(id);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(Author, HttpStatus.OK);
	}

	@RequestMapping(value = "author", method = RequestMethod.POST)
	public ResponseEntity<Void> addAuthor(@RequestBody Author Author) {
		try {
			Random r = new Random();
			int authorId = r.nextInt(300);
			Author.setAuthorId("A"+authorId);
			AuthorService.addAuthor(Author);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "author", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateUser(@RequestBody Author Author) {
		try {
			AuthorService.updateAuthor(Author);
		} catch (Exception e) {
			System.out.print(e);
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "author/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteAuthor(@PathVariable int id) {
		try {
			AuthorService.deleteAuthor(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
}
