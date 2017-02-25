package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Annotations {
    private Integer annotateid;

    private Integer userid;

    private Integer questionid;

    private String annotate;

    public Annotations(Integer annotateid, Integer userid, Integer questionid, String annotate) {
        this.annotateid = annotateid;
        this.userid = userid;
        this.questionid = questionid;
        this.annotate = annotate;
    }

    public Annotations() {
        super();
    }

    public Integer getAnnotateid() {
        return annotateid;
    }

    public void setAnnotateid(Integer annotateid) {
        this.annotateid = annotateid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getQuestionid() {
        return questionid;
    }

    public void setQuestionid(Integer questionid) {
        this.questionid = questionid;
    }

    public String getAnnotate() {
        return annotate;
    }

    public void setAnnotate(String annotate) {
        this.annotate = annotate == null ? null : annotate.trim();
    }
}