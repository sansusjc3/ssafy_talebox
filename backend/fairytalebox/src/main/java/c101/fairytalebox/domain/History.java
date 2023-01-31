package c101.fairytalebox.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
public class History {

    @Id@GeneratedValue
    @Column(name = "history_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "story_id")
    private Story story;

    private int starPoint;

    private LocalDateTime studyDate;

    @OneToMany(mappedBy = "history", cascade = CascadeType.ALL)
    private List<WordResult> wordResults = new ArrayList<>();
}