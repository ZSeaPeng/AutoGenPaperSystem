package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Temporary {
    private Integer temporaryId;

    private String temporaryName;

    private String temporaryPsw;

    private String salt;

    private String subjectcan;

    private String charactioncan;

    private int isDelete;

    public Temporary(Integer temporaryId, String temporaryName, String temporaryPsw, String salt, String subjectcan, String charactioncan,Integer isDelete) {
        this.temporaryId = temporaryId;
        this.temporaryName = temporaryName;
        this.temporaryPsw = temporaryPsw;
        this.salt = salt;
        this.subjectcan = subjectcan;
        this.charactioncan = charactioncan;
        this.isDelete = 0;
    }

    public Temporary() {
        super();
    }

    public Integer getTemporaryId() {
        return temporaryId;
    }

    public void setTemporaryId(Integer temporaryId) {
        this.temporaryId = temporaryId;
    }

    public String getTemporaryName() {
        return temporaryName;
    }

    public void setTemporaryName(String temporaryName) {
        this.temporaryName = temporaryName == null ? null : temporaryName.trim();
    }

    public String getTemporaryPsw() {
        return temporaryPsw;
    }

    public void setTemporaryPsw(String temporaryPsw) {
        this.temporaryPsw = temporaryPsw == null ? null : temporaryPsw.trim();
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt == null ? null : salt.trim();
    }

    public String getSubjectcan() {
        return subjectcan;
    }

    public void setSubjectcan(String subjectcan) {
        this.subjectcan = subjectcan == null ? null : subjectcan.trim();
    }

    public String getCharactioncan() {
        return charactioncan;
    }

    public void setCharactioncan(String charactioncan) {
        this.charactioncan = charactioncan == null ? null : charactioncan.trim();
    }

    public int getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(int isDelete) {
        this.isDelete = isDelete;
    }
}