package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Types {
    private Integer typeId;

    private String typeName;

    private Integer subjectId;

    public Types(Integer typeId, String typeName, Integer subjectId) {
        this.typeId = typeId;
        this.typeName = typeName;
        this.subjectId = subjectId;
    }

    public Types() {
        super();
    }

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName == null ? null : typeName.trim();
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }
}