package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.List;

/**
 * Created by zseapeng on 2016/11/11.
 */
public class UserJson {
    private Integer userId;

    private String username;

    private String userpassword;

    private Integer downloadable;

    private Integer permissionId;

    private List subjectcan;

    public UserJson() {
    }

    public UserJson(Integer userId, String username, String userpassword, Integer downloadable, Integer permissionId, List subjectcan) {
        this.userId = userId;
        this.username = username;
        this.userpassword = userpassword;
        this.downloadable = downloadable;
        this.permissionId = permissionId;
        this.subjectcan = subjectcan;
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

    public List getSubjectcan() {
        return subjectcan;
    }

    public void setSubjectcan(List subjectcan) {
        this.subjectcan = subjectcan;
    }
}
