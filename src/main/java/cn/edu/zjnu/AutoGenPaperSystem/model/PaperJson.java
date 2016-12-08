package cn.edu.zjnu.AutoGenPaperSystem.model;

/**
 * Created by zseapeng on 2016/12/8.
 */
public class PaperJson {
    private String historyPaperUrl;
    private String paperName;
    private long paperId;

    public PaperJson() {
    }

    public PaperJson(String historyPaperUrl, String paperName) {
        this.historyPaperUrl = historyPaperUrl;
        this.paperName = paperName;
    }

    public PaperJson(String historyPaperUrl, String paperName, long paperId) {
        this.historyPaperUrl = historyPaperUrl;
        this.paperName = paperName;
        this.paperId = paperId;
    }

    public String getHistoryPaperUrl() {
        return historyPaperUrl;
    }

    public void setHistoryPaperUrl(String historyPaperUrl) {
        this.historyPaperUrl = historyPaperUrl;
    }

    public String getPaperName() {
        return paperName;
    }

    public void setPaperName(String paperName) {
        this.paperName = paperName;
    }

    public long getPaperId() {
        return paperId;
    }

    public void setPaperId(long paperId) {
        this.paperId = paperId;
    }
}
