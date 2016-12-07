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

    private String paperName;

    private byte[] paperhex;

    private int isDelete;

    public Paper(Long paperId, String questionIds, Double paperDifficult, Integer paperNum, String paperPointId, Integer userId, Date generatime, String paperName, byte[] paperhex, int isDelete) {
        this.paperId = paperId;
        this.questionIds = questionIds;
        this.paperDifficult = paperDifficult;
        this.paperNum = paperNum;
        this.paperPointId = paperPointId;
        this.userId = userId;
        this.generatime = generatime;
        this.paperName = paperName;
        this.paperhex = paperhex;
        this.isDelete = isDelete;
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

    public String getPaperName() {
        return paperName;
    }

    public void setPaperName(String paperName) {
        this.paperName = paperName;
    }

    public int getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(int isDelete) {
        this.isDelete = isDelete;
    }
}