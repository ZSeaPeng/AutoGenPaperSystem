package cn.edu.zjnu.AutoGenPaperSystem.model;

/**
 * Created by zseapeng on 2016/10/27.
 */
public class UpdateInfoJson {
    private String sub;
    private String url;
    private String date;


    public UpdateInfoJson() {
    }

    public UpdateInfoJson(String sub, String url, String date) {
        this.sub = sub;
        this.url = url;
        this.date = date;
    }

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
