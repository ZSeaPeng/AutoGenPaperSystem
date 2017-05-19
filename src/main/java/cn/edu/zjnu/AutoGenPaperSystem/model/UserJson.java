package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.List;

/**
 * Created by zseapeng on 2016/11/11.
 */
public class UserJson {
    private Integer userid;

    private String username;

    private String userpassword;

    private String phonenum;

    private String school;

    private String email;

    private Integer downloadable;

    private Integer permissionId;

    private List<String> subjectcanList;

    private String commanagerName;

    private List historyPaper;

    private List allowpaper;

    private List dopaper;

    private Integer type;
    public UserJson() {
    }

    public UserJson(Integer userid, String username, String userpassword, String phonenum, String school, String email, Integer downloadable, Integer permissionId, List<String> subjectcanList, String commanagerName, List historyPaper, List allowpaper, List dopaper, Integer type) {
        this.userid = userid;
        this.username = username;
        this.userpassword = userpassword;
        this.phonenum = phonenum;
        this.school = school;
        this.email = email;
        this.downloadable = downloadable;
        this.permissionId = permissionId;
        this.subjectcanList = subjectcanList;
        this.commanagerName = commanagerName;
        this.historyPaper = historyPaper;
        this.allowpaper = allowpaper;
        this.dopaper = dopaper;
        this.type = type;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword;
    }

    public Integer getDownloadable() {
        return downloadable;
    }

    public void setDownloadable(Integer downloadable) {
        this.downloadable = downloadable;
    }

    public Integer getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(Integer permissionId) {
        this.permissionId = permissionId;
    }

    public String getPhonenum() {
        return phonenum;
    }

    public void setPhonenum(String phonenum) {
        this.phonenum = phonenum;
    }

    public List<String> getSubjectcanList() {
        return subjectcanList;
    }

    public void setSubjectcanList(List<String> subjectcanList) {
        this.subjectcanList = subjectcanList;
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

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCommanagerName() {
        return commanagerName;
    }

    public void setCommanagerName(String commanagerName) {
        this.commanagerName = commanagerName;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
