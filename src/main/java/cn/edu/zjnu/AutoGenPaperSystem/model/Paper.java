package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.Date;

public class Paper {
    private Long paperId;

    private String questionIds;

    private Double paperDifficult;

    private Integer paperNum;

    private String paperPointId;

    private Integer userId;

    private Date generatime;

    private byte[] paperhex;

    public Paper(Long paperId, String questionIds, Double paperDifficult, Integer paperNum, String paperPointId, Integer userId, Date generatime, byte[] paperhex) {
        this.paperId = paperId;
        this.questionIds = questionIds;
        this.paperDifficult = paperDifficult;
        this.paperNum = paperNum;
        this.paperPointId = paperPointId;
        this.userId = userId;
        this.generatime = generatime;
        this.paperhex = paperhex;
    }

    public Paper() {
        super();
    }

    public Long getPaperId() {
        return paperId;
    }

    public void setPaperId(Long paperId) {
        this.paperId = paperId;
    }

    public String getQuestionIds() {
        return questionIds;
    }

    public void setQuestionIds(String questionIds) {
        this.questionIds = questionIds == null ? null : questionIds.trim();
    }

    public Double getPaperDifficult() {
        return paperDifficult;
    }

    public void setPaperDifficult(Double paperDifficult) {
        this.paperDifficult = paperDifficult;
    }

    public Integer getPaperNum() {
        return paperNum;
    }

    public void setPaperNum(Integer paperNum) {
        this.paperNum = paperNum;
    }

    public String getPaperPointId() {
        return paperPointId;
    }

    public void setPaperPointId(String paperPointId) {
        this.paperPointId = paperPointId == null ? null : paperPointId.trim();
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