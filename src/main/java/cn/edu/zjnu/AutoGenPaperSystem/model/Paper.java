package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.Date;

public class Paper {
    private Integer paperId;

    private String questionIds;

    private Integer userId;

    private Date generatime;

    private byte[] paperhex;

    public Paper(Integer paperId, String questionIds, Integer userId, Date generatime, byte[] paperhex) {
        this.paperId = paperId;
        this.questionIds = questionIds;
        this.userId = userId;
        this.generatime = generatime;
        this.paperhex = paperhex;
    }

    public Paper() {
        super();
    }

    public Integer getPaperId() {
        return paperId;
    }

    public void setPaperId(Integer paperId) {
        this.paperId = paperId;
    }

    public String getQuestionIds() {
        return questionIds;
    }

    public void setQuestionIds(String questionIds) {
        this.questionIds = questionIds == null ? null : questionIds.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getGeneratime() {
        return generatime;
    }

    public void setGeneratime(Date generatime) {
        this.generatime = generatime;
    }

    public byte[] getPaperhex() {
        return paperhex;
    }

    public void setPaperhex(byte[] paperhex) {
        this.paperhex = paperhex;
    }
}