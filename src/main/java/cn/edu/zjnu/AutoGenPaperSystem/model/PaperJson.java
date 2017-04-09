package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.Date;
import java.util.List;

/**
 * Created by zseapeng on 2016/12/8.
 */
public class PaperJson {
    private String paperurl;
    private String answerurl;
    private String papername;
    private long paperid;
    private Date generatime;
    private String questionids;

    public PaperJson() {
    }

    public PaperJson(String paperurl, String answerurl, String papername, long paperid, Date generatime, String questionids) {
        this.paperurl = paperurl;
        this.answerurl = answerurl;
        this.papername = papername;
        this.paperid = paperid;
        this.generatime = generatime;
        this.questionids = questionids;
    }

    public String getPaperurl() {
        return paperurl;
    }

    public void setPaperurl(String paperurl) {
        this.paperurl = paperurl;
    }

    public String getAnswerurl() {
        return answerurl;
    }

    public void setAnswerurl(String answerurl) {
        this.answerurl = answerurl;
    }

    public String getPapername() {
        return papername;
    }

    public void setPapername(String papername) {
        this.papername = papername;
    }

    public long getPaperid() {
        return paperid;
    }

    public void setPaperid(long paperid) {
        this.paperid = paperid;
    }

    public Date getGeneratime() {
        return generatime;
    }

    public void setGeneratime(Date generatime) {
        this.generatime = generatime;
    }

    public String getQuestionids() {
        return questionids;
    }

    public void setQuestionids(String questionids) {
        this.questionids = questionids;
    }
}
