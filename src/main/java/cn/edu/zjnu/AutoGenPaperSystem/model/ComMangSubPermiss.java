package cn.edu.zjnu.AutoGenPaperSystem.model;

public class ComMangSubPermiss {
    private Integer commangsubperid;

    private Integer subjectid;

    private Integer commanagerid;

    private Integer allowpaper;

    private Integer dopaper;

    private Boolean isdelete;

    public ComMangSubPermiss(Integer commangsubperid, Integer subjectid, Integer commanagerid, Integer allowpaper, Integer dopaper, Boolean isdelete) {
        this.commangsubperid = commangsubperid;
        this.subjectid = subjectid;
        this.commanagerid = commanagerid;
        this.allowpaper = allowpaper;
        this.dopaper = dopaper;
        this.isdelete = isdelete;
    }

    public ComMangSubPermiss() {
        super();
    }

    public Integer getCommangsubperid() {
        return commangsubperid;
    }

    public void setCommangsubperid(Integer commangsubperid) {
        this.commangsubperid = commangsubperid;
    }

    public Integer getSubjectid() {
        return subjectid;
    }

    public void setSubjectid(Integer subjectid) {
        this.subjectid = subjectid;
    }

    public Integer getCommanagerid() {
        return commanagerid;
    }

    public void setCommanagerid(Integer commanagerid) {
        this.commanagerid = commanagerid;
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