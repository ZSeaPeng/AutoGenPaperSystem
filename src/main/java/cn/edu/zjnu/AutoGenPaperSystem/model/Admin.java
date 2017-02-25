package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Admin {
    private Integer id;

    private String adminname;

    private String adminpassword;

    private Integer maxQuantity;

    public Admin(Integer id, String adminname, String adminpassword,Integer maxQuantity) {
        this.id = id;
        this.adminname = adminname;
        this.adminpassword = adminpassword;
        this.maxQuantity = maxQuantity;
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


    public Integer getMaxQuantity() {
        return maxQuantity;
    }

    public void setMaxQuantity(Integer maxQuantity) {
        this.maxQuantity = maxQuantity;
    }

    public void setAdminpassword(String adminpassword) {
        this.adminpassword = adminpassword == null ? null : adminpassword.trim();
    }

    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", adminname='" + adminname + '\'' +
                ", adminpassword='" + adminpassword + '\'' +
                ", maxQuantity=" + maxQuantity +
                '}';
    }
}