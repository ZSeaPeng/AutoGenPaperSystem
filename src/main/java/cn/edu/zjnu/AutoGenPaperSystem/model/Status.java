package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Status {
    private Integer id;

    private Integer uid;

    private Integer uidStatus;

    private Integer subid;

    private Integer subidStatus;

    public Status(Integer id, Integer uid, Integer uidStatus, Integer subid, Integer subidStatus) {
        this.id = id;
        this.uid = uid;
        this.uidStatus = uidStatus;
        this.subid = subid;
        this.subidStatus = subidStatus;
    }

    public Status() {
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

    public Integer getUidStatus() {
        return uidStatus;
    }

    public void setUidStatus(Integer uidStatus) {
        this.uidStatus = uidStatus;
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
}