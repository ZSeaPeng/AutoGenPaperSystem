package cn.edu.zjnu.AutoGenPaperSystem.model;

public class StatusSub {
    private Integer id;

    private Integer uid;

    private Integer subid;

    private Integer subidStatus;

    private Integer gradeId;

    public StatusSub(Integer id, Integer uid, Integer subid, Integer subidStatus, Integer gradeId) {
        this.id = id;
        this.uid = uid;
        this.subid = subid;
        this.subidStatus = subidStatus;
        this.gradeId = gradeId;
    }

    public StatusSub() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getSubid() {
        return subid;
    }

    public void setSubid(Integer subid) {
        this.subid = subid;
    }

    public Integer getSubidStatus() {
        return subidStatus;
    }

    public void setSubidStatus(Integer subidStatus) {
        this.subidStatus = subidStatus;
    }

    public Integer getGradeId() {
        return gradeId;
    }

    public void setGradeId(Integer gradeId) {
        this.gradeId = gradeId;
    }
}