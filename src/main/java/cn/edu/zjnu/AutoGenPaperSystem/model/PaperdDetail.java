package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.Date;

public class PaperdDetail {
    private Integer paperdetailid;

    private String paperdetailname;

    private Integer subjectId;

    private Integer papertypeid;

    private String city;

    private Integer papertime;

    private Date updatetime;

    public PaperdDetail(Integer paperdetailid, String paperdetailname, Integer subjectId, Integer papertypeid, String city, Integer papertime, Date updatetime) {
        this.paperdetailid = paperdetailid;
        this.paperdetailname = paperdetailname;
        this.subjectId = subjectId;
        this.papertypeid = papertypeid;
        this.city = city;
        this.papertime = papertime;
        this.updatetime = updatetime;
    }

    public PaperdDetail() {
        super();
    }

    public Integer getPaperdetailid() {
        return paperdetailid;
    }

    public void setPaperdetailid(Integer paperdetailid) {
        this.paperdetailid = paperdetailid;
    }

    public String getPaperdetailname() {
        return paperdetailname;
    }

    public void setPaperdetailname(String paperdetailname) {
        this.paperdetailname = paperdetailname == null ? null : paperdetailname.trim();
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public Integer getPapertypeid() {
        return papertypeid;
    }

    public void setPapertypeid(Integer papertypeid) {
        this.papertypeid = papertypeid;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city == null ? null : city.trim();
    }

    public Integer getPapertime() {
        return papertime;
    }

    public void setPapertime(Integer papertime) {
        this.papertime = papertime;
    }

    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }
}