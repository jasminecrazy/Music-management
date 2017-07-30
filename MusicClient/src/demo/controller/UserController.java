package demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/user**")
public class UserController {

	@RequestMapping(method = RequestMethod.GET)
	public String index() {
		return "user/index";
	}
	@RequestMapping(value="album",method = RequestMethod.GET)
	public String album() {
		return "user/album";
	}
	@RequestMapping(value="singer",method = RequestMethod.GET)
	public String singer() {
		return "user/singer";
	}
	@RequestMapping(value="song",method = RequestMethod.GET)
	public String song() {
		return "user/song";
	}
	@RequestMapping(value="genre",method = RequestMethod.GET)
	public String genre() {
		return "user/genre";
	}
	@RequestMapping(value="detail",method = RequestMethod.GET)
	public String detail() {
		return "user/detail";
	}
}
