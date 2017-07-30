package demo.controller;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/admin**")
public class AdminController {

	@RequestMapping(method = RequestMethod.GET)
	public String index() {

		return "admin/index";
	}

	@RequestMapping(value = "album", method = RequestMethod.GET)
	public String album() {
		return "admin/album";
	}

	@RequestMapping(value = "author", method = RequestMethod.GET)
	public String author() {
		return "admin/author";
	}

	@RequestMapping(value = "singer", method = RequestMethod.GET)
	public String singer() {
		return "admin/singer";
	}
	@RequestMapping(value = "genre", method = RequestMethod.GET)
	public String genre() {
		return "admin/genre";
	}

	@RequestMapping(value = "song", method = RequestMethod.GET)
	public String song() {
		return "admin/song";
	}
}
