package cn.edu.zjnu.AutoGenPaperSystem.model;

/**
 * Created by zseapeng on 2016/9/29.
 */
public class TypesJson {
    private int id;
    private String name;
    private String url;
    private boolean select = false;

    public TypesJson(String name, String url, boolean select) {
        this.name = name;
        this.url = url;
        this.select = select;
    }

    public TypesJson() {
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

    public boolean isSelect() {
        return select;
    }

    public void setSelect(boolean select) {
        this.select = select;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "TypesJson{" +
                "name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", select=" + select +
                '}';
    }
}
