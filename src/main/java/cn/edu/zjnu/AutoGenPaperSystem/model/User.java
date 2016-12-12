package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.List;

public class User {
    private Integer userid;

    private String username;

    private String userpassword;

    private String salt;

    private Integer downloadable;

    private String subjectcan;

    private String userchosen;

    private String usercollection;

    private String rolesId;

    private String school;

    private Integer isdelete;

    private String phonenum;

    private String email;

    private Integer commanagerId;

    private List add;

    private int type;

    private List historyPaper;

    public User(Integer userid, String username, String userpassword, String salt, Integer downloadable, String subjectcan, String userchosen, String usercollection, String rolesId, String school, Integer isdelete, String phonenum, String email, Integer commanagerId) {
        this.userid = userid;
        this.username = username;
        this.userpassword = userpassword;
        this.salt = salt;
        this.downloadable = downloadable;
        this.subjectcan = subjectcan;
        this.userchosen = userchosen;
        this.usercollection = usercollection;
        this.rolesId = rolesId;
        this.school = school;
        this.isdelete = isdelete;
        this.phonenum = phonenum;
        this.email = email;
        this.commanagerId = commanagerId;
    }

    public User() {
        super();
    }

    public Integer getUserId() {
        return userid;
    }

    public void setUserId(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getUserpassword() {
        return userpassword;
    }

    public void setUserpassword(String userpassword) {
        this.userpassword = userpassword == null ? null : userpassword.trim();
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt == null ? null : salt.trim();
    }

    public Integer getDownloadable() {
        return downloadable;
    }

    public void setDownloadable(Integer downloadable) {
        this.downloadable = downloadable;
    }

    public String getSubjectcan() {
        return subjectcan;
    }

    public void setSubjectcan(String subjectcan) {
        this.subjectcan = subjectcan == null ? null : subjectcan.trim();
    }

    public String getUserchosen() {
        return userchosen;
    }

    public void setUserchosen(String userchosen) {
        this.userchosen = userchosen == null ? null : userchosen.trim();
    }

    public String getUsercollection() {
        return usercollection;
    }

    public void setUsercollection(String usercollection) {
        this.usercollection = usercollection == null ? null : usercollection.trim();
    }

    public String getRolesId() {
        return rolesId;
    }

    public void setRolesId(String rolesId) {
        this.rolesId = rolesId == null ? null : rolesId.trim();
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school == null ? null : school.trim();
    }

    public Integer getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(Integer isdelete) {
        this.isdelete = isdelete;
    }

    public String getPhonenum() {
        return phonenum;
    }

    public void setPhonenum(String phonenum) {
        this.phonenum = phonenum == null ? null : phonenum.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public Integer getCommanagerId() {
        return commanagerId;
    }

    public void setCommanagerId(Integer commanagerId) {
        this.commanagerId = commanagerId;
    }

    public List getAdd() {
        return add;
    }

    public void setAdd(List add) {
        this.add = add;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public List getHistoryPaper() {
        return historyPaper;
    }

    public void setHistoryPaper(List historyPaper) {
        this.historyPaper = historyPaper;
    }
}