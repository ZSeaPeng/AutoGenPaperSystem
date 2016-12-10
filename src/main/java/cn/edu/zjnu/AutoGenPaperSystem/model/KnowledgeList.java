package cn.edu.zjnu.AutoGenPaperSystem.model;

/**
 * Created by sgt on 2016/12/9.
 */
public class KnowledgeList {
    private Integer knowledgeId1;

    private Integer knowledgeId2;

    private Integer knowledgeId3;

    private Integer knowledgeId4;

    private Integer subjectId;

    public KnowledgeList(Integer knowledgeId1, Integer knowledgeId2, Integer knowledgeId3, Integer knowledgeId4, Integer subjectId) {
        this.knowledgeId1 = knowledgeId1;
        this.knowledgeId2 = knowledgeId2;
        this.knowledgeId3 = knowledgeId3;
        this.knowledgeId4 = knowledgeId4;
        this.subjectId = subjectId;
    }

    public Integer getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Integer subjectId) {
        this.subjectId = subjectId;
    }

    public Integer getKnowledgeId1() {
        return knowledgeId1;
    }

    public void setKnowledgeId1(Integer knowledgeId1) {
        this.knowledgeId1 = knowledgeId1;
    }

    public Integer getKnowledgeId2() {
        return knowledgeId2;
    }

    public void setKnowledgeId2(Integer knowledgeId2) {
        this.knowledgeId2 = knowledgeId2;
    }

    public Integer getKnowledgeId3() {
        return knowledgeId3;
    }

    public void setKnowledgeId3(Integer knowledgeId3) {
        this.knowledgeId3 = knowledgeId3;
    }

    public Integer getKnowledgeId4() {
        return knowledgeId4;
    }

    public void setKnowledgeId4(Integer knowledgeId4) {
        this.knowledgeId4 = knowledgeId4;
    }
}
