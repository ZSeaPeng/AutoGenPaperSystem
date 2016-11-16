package cn.edu.zjnu.AutoGenPaperSystem.model;

/**
 * Created by sgt on 2016/10/14.
 */
public class CharactionJson {
    private int id;
    private String name;
    private String url;
    private boolean select = false;

    public CharactionJson() {
    }

    public CharactionJson(String name, String url, boolean select) {
        this.name = name;
        this.url = url;
        this.select = select;
    }

    public boolean isSelect() {
        return select;
    }

    public void setSelect(boolean select) {
        this.select = select;
    }

    @Override
    public String toString() {
        return "CharactionJson{" +
                "name='" + name + '\'' +
                ", url='" + url + '\'' +
                '}';
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
