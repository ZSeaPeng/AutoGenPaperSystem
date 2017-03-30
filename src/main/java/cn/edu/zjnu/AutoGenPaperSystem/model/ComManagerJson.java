package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.List;

/**
 * Created by sgt on 2017/3/29.
 */
public class ComManagerJson {
    private Integer commanagerId;

    private String commanagerName;

    private String commanagerPsw;

    private String subjectcan;

    private Integer school;

    private List<UserJson> userJsonList;

    public ComManagerJson() {
    }

    public ComManagerJson(Integer commanagerId, String commanagerName, String commanagerPsw, String subjectcan, Integer school, List<UserJson> userJsonList) {
        this.commanagerId = commanagerId;
        this.commanagerName = commanagerName;
        this.commanagerPsw = commanagerPsw;
        this.subjectcan = subjectcan;
        this.school = school;
        this.userJsonList = userJsonList;
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
        this.commanagerName = commanagerName;
    }

    public String getCommanagerPsw() {
        return commanagerPsw;
    }

    public void setCommanagerPsw(String commanagerPsw) {
        this.commanagerPsw = commanagerPsw;
    }

    public String getSubjectcan() {
        return subjectcan;
    }

    public void setSubjectcan(String subjectcan) {
        this.subjectcan = subjectcan;
    }

    public Integer getSchool() {
        return school;
    }

    public void setSchool(Integer school) {
        this.school = school;
    }

    public List<UserJson> getUserJsonList() {
        return userJsonList;
    }

    public void setUserJsonList(List<UserJson> userJsonList) {
        this.userJsonList = userJsonList;
    }
}
