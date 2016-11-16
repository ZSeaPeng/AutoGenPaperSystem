package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Knowledge {
    private Integer knowledgeId;

    private String knowledgeName;

    private Integer subjectId;

    private Integer superiorId;

    private Integer isDelete;

    public Knowledge(Integer knowledgeId, String knowledgeName, Integer subjectId, Integer superiorId, Integer isDelete) {
        this.knowledgeId = knowledgeId;
        this.knowledgeName = knowledgeName;
        this.subjectId = subjectId;
        this.superiorId = superiorId;
        this.isDelete = isDelete;
    }

    public Knowledge() {
        super();
        this.isDelete = 0;
    }

    public Integer getKnowledgeId() {
        return knowledgeId;
    }

    public void setKnowledgeId(Integer knowledgeId) {
        this.knowledgeId = knowledgeId;
    }

    public String getKnowledgeName() {
        return knowledgeName;
    }

    public void setKnowledgeName(String knowledgeName) {
        this.knowledgeName = knowledgeName == null ? null : knowledgeName.trim();
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public Integer getSuperiorId() {
        return superiorId;
    }

    public void setSuperiorId(Integer superiorId) {
        this.superiorId = superiorId;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    @Override
    public String toString() {
        return "Knowledge{" +
                "knowledgeId=" + knowledgeId +
                ", knowledgeName='" + knowledgeName + '\'' +
                ", subjectId=" + subjectId +
                ", superiorId=" + superiorId +
                '}';
    }
}