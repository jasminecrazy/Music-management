package demo.controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import demo.entity.Songs;

import demo.service.SongService;

@RestController
public class SongRestController {
	@Autowired
	private SongService songService;
	Songs songObj;

	@RequestMapping(value = "song", method = RequestMethod.GET)
	public ResponseEntity<List<Songs>> getAllSong() {
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "*");
		headers.add("Access-Control-Allow-Credentials", "true");
		headers.add("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
		headers.add("Access-Control-Max-Age", "3600");
		headers.add("Content-Type", "application/json;charset=UTF-8");
		headers.add("Access-Control-Allow-Headers",
				"X-Requested-With, Content-Type, authorization, Origin, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
		return new ResponseEntity<List<Songs>>(songService.findAllSongs(),headers, HttpStatus.OK);
	}

	@RequestMapping(value = "song/{id}", method = RequestMethod.GET)
	public ResponseEntity<Songs> getSong(@PathVariable int id) {
		Songs song;
		try {
			song = songService.getSongs(id);

		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(song, HttpStatus.OK);
	}

	@RequestMapping(value = "song", method = RequestMethod.POST)
	public ResponseEntity<Void> addSong(@RequestBody Songs song) {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "*");
		headers.add("Access-Control-Allow-Credentials", "true");
		headers.add("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
		headers.add("Access-Control-Max-Age", "3600");
		headers.add("Content-Type", "application/json;charset=UTF-8");
		headers.add("Access-Control-Allow-Headers",
				"X-Requested-With, Content-Type, authorization, Origin, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
		try {
			Random r = new Random();
			int songId = r.nextInt(300);
			song.setSongId("S"+songId);
			songService.addSongs(song);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "song", method = RequestMethod.PUT, produces = "application/json; charset=utf-8")
	public ResponseEntity<Void> updateSong(@RequestBody Songs song) {
		try {
			songService.updateSongs(song);
		} catch (Exception e) {
			System.out.print(e);
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@RequestMapping(value = "song/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteSong(@PathVariable int id) {
		try {
			songService.deleteSongs(id);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}
	@RequestMapping(value = "song/getGenre/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Songs>> getGenreSong(@PathVariable int id) {
		return new ResponseEntity<List<Songs>>(songService.getGenreSong(id), HttpStatus.OK);
	}
	@RequestMapping(value = "song/getAlbum/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Songs>> getAlbumSong(@PathVariable int id) {
		return new ResponseEntity<List<Songs>>(songService.getAlbumSong(id), HttpStatus.OK);
	}
	@RequestMapping(value = "song/getSinger/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Songs>> getSingerSong(@PathVariable int id) {
		return new ResponseEntity<List<Songs>>(songService.getSingerSong(id), HttpStatus.OK);
	}
	@RequestMapping(value= "song/search/{keyword}",method = RequestMethod.GET)
	public ResponseEntity<List<Songs>> searchSong(@PathVariable String keyword) {
		return new ResponseEntity<List<Songs>>(songService.searchSong(keyword), HttpStatus.OK);
	}
	@RequestMapping(value= "song/favorite",method = RequestMethod.GET)
	public ResponseEntity<List<Songs>> favoriteSong() {
		return new ResponseEntity<List<Songs>>(songService.favoriteSong(), HttpStatus.OK);
	}
	
	
}
