package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Admin {
    private Integer id;

    private String adminname;

    private String adminpassword;

    public Admin(Integer id, String adminname, String adminpassword) {
        this.id = id;
        this.adminname = adminname;
        this.adminpassword = adminpassword;
    }

    public Admin() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAdminname() {
        return adminname;
    }

    public void setAdminname(String adminname) {
        this.adminname = adminname == null ? null : adminname.trim();
    }

    public String getAdminpassword() {
        return adminpassword;
    }

    public void setAdminpassword(String adminpassword) {
        this.adminpassword = adminpassword == null ? null : adminpassword.trim();
    }
}