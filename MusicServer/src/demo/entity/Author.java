package demo.entity;
// Generated Jul 29, 2017 10:42:16 AM by Hibernate Tools 5.1.0.Alpha1

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.Proxy;

/**
 * Author generated by hbm2java
 */
@Entity
@Proxy(lazy=false)
@Table(name = "author", catalog = "db_music")
public class Author implements java.io.Serializable {

	private Integer id;
	private String authorId;
	private String authorname;
	private Set<Songs> songses = new HashSet<Songs>(0);

	public Author() {
	}

	public Author(String authorId, String authorname) {
		this.authorId = authorId;
		this.authorname = authorname;
	}

	public Author(String authorId, String authorname, Set<Songs> songses) {
		this.authorId = authorId;
		this.authorname = authorname;
		this.songses = songses;
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

	@Column(name = "authorId", nullable = false, length = 50)
	public String getAuthorId() {
		return this.authorId;
	}

	public void setAuthorId(String authorId) {
		this.authorId = authorId;
	}

	@Column(name = "authorname", nullable = false, length = 100)
	public String getAuthorname() {
		return this.authorname;
	}

	public void setAuthorname(String authorname) {
		this.authorname = authorname;
	}
@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "author")
	public Set<Songs> getSongses() {
		return this.songses;
	}

	public void setSongses(Set<Songs> songses) {
		this.songses = songses;
	}

}