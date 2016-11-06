package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.List;

/**
 * Created by zseapeng on 2016/9/28.
 */
public class KnowledgeJson {
    private int level;
    private String name;
    private List pointList;
    private String url;
    private boolean select;

    public KnowledgeJson() {
        this.select = false;
    }

    public KnowledgeJson(int level,String name, List contextList, String url) {
        this.level = level;
        this.name = name;
        this.pointList = contextList;
        this.url = url;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List getPointList() {
        return pointList;
    }

    public void setPointList(List contextList) {
        this.pointList = contextList;
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

    @Override
    public String toString() {
        return "KnowledgeJson{" +
                "level=" + level +
                ", name='" + name + '\'' +
                ", pointList=" + pointList +
                ", url='" + url + '\'' +
                '}';
    }
}
