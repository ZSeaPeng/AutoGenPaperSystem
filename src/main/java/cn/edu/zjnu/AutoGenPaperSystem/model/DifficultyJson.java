package cn.edu.zjnu.AutoGenPaperSystem.model;

/**
 * Created by sgt on 2016/10/14.
 */
public class DifficultyJson {
    private int id;
    private String name;
    private String url;
    private boolean select = false;

    public DifficultyJson(String name, String url, boolean select) {
        this.name = name;
        this.url = url;
        this.select = select;
    }

    public DifficultyJson() {
    }

    @Override
    public String toString() {
        return "DifficultyJson{" +
                ", describe='" + name + '\'' +
                ", url='" + url + '\'' +
                '}';
    }

    public boolean isSelect() {
        return select;
    }

    public void setSelect(boolean select) {
        this.select = select;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
