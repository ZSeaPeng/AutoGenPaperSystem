package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.Date;

public class Paper {
    private Long paperid;

    private String questionids;

    private Double paperdifficult;

    private String paperpointid;

    private String papername;

    private Integer userid;

    private Date generatime;

    private Integer isdelete;

    private String paperurl;

    private String answerurl;

    public Paper(Long paperid, String questionids, Double paperdifficult, String paperpointid, String papername, Integer userid, Date generatime, Integer isdelete, String paperurl, String answerurl) {
        this.paperid = paperid;
        this.questionids = questionids;
        this.paperdifficult = paperdifficult;
        this.paperpointid = paperpointid;
        this.papername = papername;
        this.userid = userid;
        this.generatime = generatime;
        this.isdelete = isdelete;
        this.paperurl = paperurl;
        this.answerurl = answerurl;
    }

    public Paper() {
        super();
    }

    public Long getPaperid() {
        return paperid;
    }

    public void setPaperid(Long paperid) {
        this.paperid = paperid;
    }

    public String getQuestionids() {
        return questionids;
    }

    public void setQuestionids(String questionids) {
        this.questionids = questionids == null ? null : questionids.trim();
    }

    public Double getPaperdifficult() {
        return paperdifficult;
    }

    public void setPaperdifficult(Double paperdifficult) {
        this.paperdifficult = paperdifficult;
    }

    public String getPaperpointid() {
        return paperpointid;
    }

    public void setPaperpointid(String paperpointid) {
        this.paperpointid = paperpointid == null ? null : paperpointid.trim();
    }

    public String getPapername() {
        return papername;
    }

    public void setPapername(String papername) {
        this.papername = papername == null ? null : papername.trim();
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Date getGeneratime() {
        return generatime;
    }

    public void setGeneratime(Date generatime) {
        this.generatime = generatime;
    }

    public Integer getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(Integer isdelete) {
        this.isdelete = isdelete;
    }

    public String getPaperurl() {
        return paperurl;
    }

    public void setPaperurl(String paperurl) {
        this.paperurl = paperurl == null ? null : paperurl.trim();
    }

    public String getAnswerurl() {
        return answerurl;
    }

    public void setAnswerurl(String answerurl) {
        this.answerurl = answerurl == null ? null : answerurl.trim();
    }
}