package cn.edu.zjnu.AutoGenPaperSystem.model;

public class UserSubPermiss {
    private Integer subpermissid;

    private Integer userid;

    private Integer subjectid;

    private Integer allowpaper;

    private Integer dopaper;

    private Boolean isdelete;

    public UserSubPermiss(Integer subpermissid, Integer userid, Integer subjectid, Integer allowpaper, Integer dopaper, Boolean isdelete) {
        this.subpermissid = subpermissid;
        this.userid = userid;
        this.subjectid = subjectid;
        this.allowpaper = allowpaper;
        this.dopaper = dopaper;
        this.isdelete = isdelete;
    }

    public UserSubPermiss() {
        super();
    }

    public Integer getSubpermissid() {
        return subpermissid;
    }

    public void setSubpermissid(Integer subpermissid) {
        this.subpermissid = subpermissid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Integer getSubjectid() {
        return subjectid;
    }

    public void setSubjectid(Integer subjectid) {
        this.subjectid = subjectid;
    }

    public Integer getAllowpaper() {
        return allowpaper;
    }

    public void setAllowpaper(Integer allowpaper) {
        this.allowpaper = allowpaper;
    }

    public Integer getDopaper() {
        return dopaper;
    }

    public void setDopaper(Integer dopaper) {
        this.dopaper = dopaper;
    }

    public Boolean getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(Boolean isdelete) {
        this.isdelete = isdelete;
    }
}