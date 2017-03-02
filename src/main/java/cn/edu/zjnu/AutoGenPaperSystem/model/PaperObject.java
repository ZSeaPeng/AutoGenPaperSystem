package cn.edu.zjnu.AutoGenPaperSystem.model;

import java.util.Arrays;

/**
 * Created by zseapeng on 2017/2/27.
 */
public class PaperObject {
    private String type;
    private int[] id;
    private int[] score;

    public PaperObject(String type, int[] id, int[] score) {
        this.type = type;
        this.id = id;
        this.score = score;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int[] getId() {
        return id;
    }

    public void setId(int[] id) {
        this.id = id;
    }

    public int[] getScore() {
        return score;
    }

    public void setScore(int[] score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "PaperObject{" +
                "type='" + type + '\'' +
                ", id=" + Arrays.toString(id) +
                ", score=" + Arrays.toString(score) +
                '}';
    }
}
