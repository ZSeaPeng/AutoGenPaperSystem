package cn.edu.zjnu.AutoGenPaperSystem.model;

public class ComManager {
    private Integer commanagerId;

    private String commanagerName;

    private String commanagerPsw;

    private String commanagerSalt;

    private String subjectcan;

    private String commanagerChosen;

    private String commanagerCollection;

    private String useridlist;

    private Integer school;

    private Boolean isdelete;

    private int type;

    public ComManager(Integer commanagerId, String commanagerName, String commanagerPsw, String commanagerSalt, String subjectcan, String commanagerChosen, String commanagerCollection, String useridlist, Integer school, Boolean isdelete) {
        this.commanagerId = commanagerId;
        this.commanagerName = commanagerName;
        this.commanagerPsw = commanagerPsw;
        this.commanagerSalt = commanagerSalt;
        this.subjectcan = subjectcan;
        this.commanagerChosen = commanagerChosen;
        this.commanagerCollection = commanagerCollection;
        this.useridlist = useridlist;
        this.school = school;
        this.isdelete = isdelete;
    }

    public ComManager() {
        super();
    }

    public Integer getCommanagerId() {
        return commanagerId;
    }

    public void setCommanagerId(Integer commanagerId) {
        this.commanagerId = commanagerId;
    }

    public String getCommanagerName() {
        return commanagerName;
    }

    public void setCommanagerName(String commanagerName) {
        this.commanagerName = commanagerName == null ? null : commanagerName.trim();
    }

    public String getCommanagerPsw() {
        return commanagerPsw;
    }

    public void setCommanagerPsw(String commanagerPsw) {
        this.commanagerPsw = commanagerPsw == null ? null : commanagerPsw.trim();
    }

    public String getCommanagerSalt() {
        return commanagerSalt;
    }

    public void setCommanagerSalt(String commanagerSalt) {
        this.commanagerSalt = commanagerSalt == null ? null : commanagerSalt.trim();
    }

    public String getSubjectcan() {
        return subjectcan;
    }

    public void setSubjectcan(String subjectcan) {
        this.subjectcan = subjectcan == null ? null : subjectcan.trim();
    }

    public String getCommanagerChosen() {
        return commanagerChosen;
    }

    public void setCommanagerChosen(String commanagerChosen) {
        this.commanagerChosen = commanagerChosen == null ? null : commanagerChosen.trim();
    }

    public String getCommanagerCollection() {
        return commanagerCollection;
    }

    public void setCommanagerCollection(String commanagerCollection) {
        this.commanagerCollection = commanagerCollection == null ? null : commanagerCollection.trim();
    }

    public String getUseridlist() {
        return useridlist;
    }

    public void setUseridlist(String useridlist) {
        this.useridlist = useridlist == null ? null : useridlist.trim();
    }

    public Integer getSchool() {
        return school;
    }

    public void setSchool(Integer school) {
        this.school = school;
    }

    public Boolean getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(Boolean isdelete) {
        this.isdelete = isdelete;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}