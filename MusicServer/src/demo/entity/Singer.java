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
 * Singer generated by hbm2java
 */
@Entity
@Proxy(lazy=false)
@Table(name = "singer", catalog = "db_music")
public class Singer implements java.io.Serializable {

	private Integer id;
	private String singerId;
	private String singerName;
	private Set<Songs> songses = new HashSet<Songs>(0);

	public Singer() {
	}

	public Singer(String singerId, String singerName) {
		this.singerId = singerId;
		this.singerName = singerName;
	}

	public Singer(String singerId, String singerName, Set<Songs> songses) {
		this.singerId = singerId;
		this.singerName = singerName;
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

	@Column(name = "singerId", nullable = false, length = 50)
	public String getSingerId() {
		return this.singerId;
	}

	public void setSingerId(String singerId) {
		this.singerId = singerId;
	}

	@Column(name = "singerName", nullable = false, length = 100)
	public String getSingerName() {
		return this.singerName;
	}

	public void setSingerName(String singerName) {
		this.singerName = singerName;
	}
@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "singer")
	public Set<Songs> getSongses() {
		return this.songses;
	}

	public void setSongses(Set<Songs> songses) {
		this.songses = songses;
	}

}