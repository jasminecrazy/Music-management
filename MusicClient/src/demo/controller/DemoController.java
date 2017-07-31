package demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("demo")
public class DemoController {
	@RequestMapping(method = RequestMethod.GET)
	public String index() {
		return "demo/index";
	}

	@RequestMapping(value = "album", method = RequestMethod.GET)
	public String album() {
		return "demo/album";
	}

	@RequestMapping(value = "singer", method = RequestMethod.GET)
	public String singer() {
		return "demo/singer";
	}

	@RequestMapping(value = "song", method = RequestMethod.GET)
	public String song() {
		return "demo/song";
	}

	@RequestMapping(value = "genre", method = RequestMethod.GET)
	public String genre() {
		return "demo/genre";
	}

	@RequestMapping(value = "detail", method = RequestMethod.GET)
	public String detail() {
		return "demo/detail";
	}

	@RequestMapping(value = "detailSong", method = RequestMethod.GET)
	public String detailSong() {
		return "demo/detailSong";
	}

	@RequestMapping(value = "detailSinger", method = RequestMethod.GET)
	public String detailSinger() {
		
		return "demo/detailSinger";
	}
	@RequestMapping(value = "search", method = RequestMethod.GET)
	public String search() {
		return "demo/search";
	}
	@RequestMapping(value = "register", method = RequestMethod.GET)
	public String register() {
		return "demo/register";
	}
}
