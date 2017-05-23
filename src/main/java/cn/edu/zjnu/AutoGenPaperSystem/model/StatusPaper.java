package cn.edu.zjnu.AutoGenPaperSystem.model;

public class StatusPaper {
    private Integer id;

    private Integer uid;

    private Integer paperId;

    private Integer paperStatus;

    private Integer gradeId;

    public StatusPaper(Integer id, Integer uid, Integer paperId, Integer paperStatus, Integer gradeId) {
        this.id = id;
        this.uid = uid;
        this.paperId = paperId;
        this.paperStatus = paperStatus;
        this.gradeId = gradeId;
    }

    public StatusPaper() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getPaperId() {
        return paperId;
    }

    public void setPaperId(Integer paperId) {
        this.paperId = paperId;
    }

    public Integer getPaperStatus() {
        return paperStatus;
    }

    public void setPaperStatus(Integer paperStatus) {
        this.paperStatus = paperStatus;
    }

    public Integer getGradeId() {
        return gradeId;
    }

    public void setGradeId(Integer gradeId) {
        this.gradeId = gradeId;
    }
}