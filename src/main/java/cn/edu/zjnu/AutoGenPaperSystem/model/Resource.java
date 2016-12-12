package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Resource {
    private Integer resourceId;

    private String resourceName;

    private Integer parentId;

    private String parentIds;

    private String permission;

    private Boolean available;

    public Resource(Integer resourceId, String resourceName, Integer parentId, String parentIds, String permission, Boolean available) {
        this.resourceId = resourceId;
        this.resourceName = resourceName;
        this.parentId = parentId;
        this.parentIds = parentIds;
        this.permission = permission;
        this.available = available;
    }

    public Resource() {
        super();
    }

    public Integer getResourceId() {
        return resourceId;
    }

    public void setResourceId(Integer resourceId) {
        this.resourceId = resourceId;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName == null ? null : resourceName.trim();
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getParentIds() {
        return parentIds;
    }

    public void setParentIds(String parentIds) {
        this.parentIds = parentIds == null ? null : parentIds.trim();
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission == null ? null : permission.trim();
    }

    public Boolean getAvailable() {
        return available;
    }

    public void setAvailable(Boolean available) {
        this.available = available;
    }
}