package cn.edu.zjnu.AutoGenPaperSystem.model;

public class TempSubPermiss {
    private Integer tempsubperid;

    private Integer temporaryid;

    private Integer subjectid;

    private Integer allowpaper;

    private Integer dopaper;

    private Boolean isdelete;

    public TempSubPermiss(Integer tempsubperid, Integer temporaryid, Integer subjectid, Integer allowpaper, Integer dopaper, Boolean isdelete) {
        this.tempsubperid = tempsubperid;
        this.temporaryid = temporaryid;
        this.subjectid = subjectid;
        this.allowpaper = allowpaper;
        this.dopaper = dopaper;
        this.isdelete = isdelete;
    }

    public TempSubPermiss() {
        super();
    }

    public Integer getTempsubperid() {
        return tempsubperid;
    }

    public void setTempsubperid(Integer tempsubperid) {
        this.tempsubperid = tempsubperid;
    }

    public Integer getTemporaryid() {
        return temporaryid;
    }

    public void setTemporaryid(Integer temporaryid) {
        this.temporaryid = temporaryid;
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