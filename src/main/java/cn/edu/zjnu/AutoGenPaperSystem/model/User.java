package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.ArrayList;
import java.util.List;

public class User {
    private Integer userId;

    private String username;

    private String userpassword;

    private Integer downloadable;

    private Integer permissionId;

    private String subjectcan;

    private String userchosen;

    private String usercollection;

    private List add;

    private Integer isDelete;

    public User(Integer userId, String username, String userpassword, Integer downloadable, Integer permissionId, String subjectcan, String userchosen, String usercollection) {
        this.userId = userId;
        this.username = username;
        this.userpassword = userpassword;
        this.downloadable = downloadable;
        this.permissionId = permissionId;
        this.subjectcan = subjectcan;
        this.userchosen = userchosen;
        this.usercollection = usercollection;
    }

    public User() {
        super();
        this.add = new ArrayList();
        this.isDelete = 0;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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

    public List getAdd() {
        return add;
    }

    public void setAdd(List add) {
        this.add = add;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", username='" + username + '\'' +
                ", userpassword='" + userpassword + '\'' +
                ", downloadable=" + downloadable +
                ", permissionId=" + permissionId +
                ", subjectcan='" + subjectcan + '\'' +
                ", userchosen='" + userchosen + '\'' +
                ", usercollection='" + usercollection + '\'' +
                '}';
    }
}