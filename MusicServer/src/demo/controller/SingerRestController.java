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

import demo.entity.Singer;
import demo.service.SingerService;

@RestController
public class SingerRestController {
	@Autowired
	private SingerService singerService;

	@RequestMapping(value = "singer", method = RequestMethod.GET)
	public ResponseEntity<List<Singer>> getAllSinger() {

		return new ResponseEntity<List<Singer>>(singerService.findAllSinger(), HttpStatus.OK);

	}

	@RequestMapping(value = "singer/{id}", method = RequestMethod.GET)
	public ResponseEntity<Singer> getSinger(@PathVariable int id) {
		Singer singer;
		try {
			singer = singerService.getSinger(id);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(singer, HttpStatus.OK);
	}

	@RequestMapping(value = "singer", method = RequestMethod.POST)
	public ResponseEntity<Void> addSinger(@RequestBody Singer singer) {
		try {
			Random r = new Random();
			int singerId = r.nextInt(300);
			singer.setSingerId("S"+singerId);
			singerService.addSinger(singer);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "singer", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateUser(@RequestBody Singer singer) {
		try {
			singerService.updateSinger(singer);
		} catch (Exception e) {
			System.out.print(e);
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "singer/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteSinger(@PathVariable int id) {
		try {
			singerService.deleteSinger(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
}
