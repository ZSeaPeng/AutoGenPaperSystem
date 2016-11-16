package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Subject {
    private Integer subjectId;

    private String subjectName;

    private Integer gradeId;

    private Integer isDelete;


    public Subject(Integer subjectId, String subjectName, Integer gradeId, Integer isDelete) {
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.gradeId = gradeId;
        this.isDelete = isDelete;
    }


    public Subject() {
        super();
        this.isDelete = 0;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName == null ? null : subjectName.trim();
    }

    public Integer getGradeId() {
        return gradeId;
    }

    public void setGradeId(Integer gradeId) {
        this.gradeId = gradeId;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }

    @Override
    public String toString() {
        return "Subject{" +
                "subjectId=" + subjectId +
                ", subjectName='" + subjectName + '\'' +
                ", gradeId=" + gradeId +
                '}';
    }
}