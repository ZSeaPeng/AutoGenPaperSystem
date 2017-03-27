package cn.edu.zjnu.AutoGenPaperSystem.model;

public class PaperItem {
    private Integer paperitemid;

    private Integer paperdetailid;

    private Integer questionsId;

    private Integer order;

    public PaperItem(Integer paperitemid, Integer paperdetailid, Integer questionsId, Integer order) {
        this.paperitemid = paperitemid;
        this.paperdetailid = paperdetailid;
        this.questionsId = questionsId;
        this.order = order;
    }

    public PaperItem() {
        super();
    }

    public Integer getPaperitemid() {
        return paperitemid;
    }

    public void setPaperitemid(Integer paperitemid) {
        this.paperitemid = paperitemid;
    }

    public Integer getPaperdetailid() {
        return paperdetailid;
    }

    public void setPaperdetailid(Integer paperdetailid) {
        this.paperdetailid = paperdetailid;
    }

    public Integer getQuestionsId() {
        return questionsId;
    }

    public void setQuestionsId(Integer questionsId) {
        this.questionsId = questionsId;
    }

    public Integer getOrder() {
        return order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }
}