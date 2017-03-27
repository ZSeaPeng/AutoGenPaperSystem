package cn.edu.zjnu.AutoGenPaperSystem.model;

public class PaperType {
    private Integer papertypeid;

    private String papertypename;

    public PaperType(Integer papertypeid, String papertypename) {
        this.papertypeid = papertypeid;
        this.papertypename = papertypename;
    }

    public PaperType() {
        super();
    }

    public Integer getPapertypeid() {
        return papertypeid;
    }

    public void setPapertypeid(Integer papertypeid) {
        this.papertypeid = papertypeid;
    }

    public String getPapertypename() {
        return papertypename;
    }

    public void setPapertypename(String papertypename) {
        this.papertypename = papertypename == null ? null : papertypename.trim();
    }
}