package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.Date;

/**
 * Created by zseapeng on 2016/12/8.
 */
public class PaperJson {
    private String historyPaperUrl;
    private String historyAnswerUrl;
    private String paperName;
    private long paperId;
    private Date paperDate;

    public PaperJson() {
    }

    public PaperJson(String historyPaperUrl, String historyAnswerUrl, String paperName) {
        this.historyPaperUrl = historyPaperUrl;
        this.historyAnswerUrl = historyAnswerUrl;
        this.paperName = paperName;
    }

    public PaperJson(String historyPaperUrl, String historyAnswerUrl, String paperName, long paperId) {
        this.historyPaperUrl = historyPaperUrl;
        this.historyAnswerUrl = historyAnswerUrl;
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

    public Date getPaperDate() {
        return paperDate;
    }

    public void setPaperDate(Date paperDate) {
        this.paperDate = paperDate;
    }

    public String getHistoryAnswerUrl() {
        return historyAnswerUrl;
    }

    public void setHistoryAnswerUrl(String historyAnswerUrl) {
        this.historyAnswerUrl = historyAnswerUrl;
    }
}
