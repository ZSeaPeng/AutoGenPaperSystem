package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Roles {
    private Long rolesId;

    private String roleName;

    private String description;

    private String resourceId;

    private Boolean available;

    public Roles(Long rolesId, String roleName, String description, String resourceId, Boolean available) {
        this.rolesId = rolesId;
        this.roleName = roleName;
        this.description = description;
        this.resourceId = resourceId;
        this.available = available;
    }

    public Roles() {
        super();
    }

    public Long getRolesId() {
        return rolesId;
    }

    public void setRolesId(Long rolesId) {
        this.rolesId = rolesId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName == null ? null : roleName.trim();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public String getResourceId() {
        return resourceId;
    }

    public void setResourceId(String resourceId) {
        this.resourceId = resourceId == null ? null : resourceId.trim();
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }
}