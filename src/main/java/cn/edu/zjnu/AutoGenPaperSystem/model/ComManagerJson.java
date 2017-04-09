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

    private List historyPaper;

    private List allowpaper;

    private List dopaper;

    private Integer type;

    public ComManagerJson() {
    }

    public ComManagerJson(Integer commanagerId, String commanagerName, String commanagerPsw, String subjectcan, Integer school, List<UserJson> userJsonList, List historyPaper, List allowpaper, List dopaper, Integer type) {
        this.commanagerId = commanagerId;
        this.commanagerName = commanagerName;
        this.commanagerPsw = commanagerPsw;
        this.subjectcan = subjectcan;
        this.school = school;
        this.userJsonList = userJsonList;
        this.historyPaper = historyPaper;
        this.allowpaper = allowpaper;
        this.dopaper = dopaper;
        this.type = type;
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

    public List getHistoryPaper() {
        return historyPaper;
    }

    public void setHistoryPaper(List historyPaper) {
        this.historyPaper = historyPaper;
    }

    public List getAllowpaper() {
        return allowpaper;
    }

    public void setAllowpaper(List allowpaper) {
        this.allowpaper = allowpaper;
    }

    public List getDopaper() {
        return dopaper;
    }

    public void setDopaper(List dopaper) {
        this.dopaper = dopaper;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
