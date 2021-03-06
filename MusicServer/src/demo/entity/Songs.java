package demo.entity;
// Generated Aug 8, 2017 11:27:46 AM by Hibernate Tools 5.2.3.Final

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Songs generated by hbm2java
 */
@Entity
@Table(name = "songs", catalog = "db_music")
public class Songs implements java.io.Serializable {

	private Integer id;
	private Album album;
	private Author author;
	private Genre genre;
	private Singer singer;
	private String songId;
	private String songName;
	private Boolean status;
	private String lyric;
	private String picture;

	public Songs() {
	}

	public Songs(Album album, Author author, Genre genre, Singer singer, String songId, String songName) {
		this.album = album;
		this.author = author;
		this.genre = genre;
		this.singer = singer;
		this.songId = songId;
		this.songName = songName;
	}

	public Songs(Album album, Author author, Genre genre, Singer singer, String songId, String songName, Boolean status,
			String lyric, String picture) {
		this.album = album;
		this.author = author;
		this.genre = genre;
		this.singer = singer;
		this.songId = songId;
		this.songName = songName;
		this.status = status;
		this.lyric = lyric;
		this.picture = picture;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "album_id", nullable = false)
	public Album getAlbum() {
		return this.album;
	}

	public void setAlbum(Album album) {
		this.album = album;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "author_id", nullable = false)
	public Author getAuthor() {
		return this.author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "genre_id", nullable = false)
	public Genre getGenre() {
		return this.genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "singer_id", nullable = false)
	public Singer getSinger() {
		return this.singer;
	}

	public void setSinger(Singer singer) {
		this.singer = singer;
	}

	@Column(name = "songID", nullable = false, length = 50)
	public String getSongId() {
		return this.songId;
	}

	public void setSongId(String songId) {
		this.songId = songId;
	}

	@Column(name = "songName", nullable = false, length = 100)
	public String getSongName() {
		return this.songName;
	}

	public void setSongName(String songName) {
		this.songName = songName;
	}

	@Column(name = "status")
	public Boolean getStatus() {
		return this.status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	@Column(name = "lyric", length = 65535)
	public String getLyric() {
		return this.lyric;
	}

	public void setLyric(String lyric) {
		this.lyric = lyric;
	}

	@Column(name = "picture", length = 500)
	public String getPicture() {
		return this.picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

}
