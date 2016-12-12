package cn.edu.zjnu.AutoGenPaperSystem.model;

/**
 * Created by zseapeng on 2016/9/27.
 */
public class SearchAll {
    private boolean isdelete;
    private int sub_id;
    private int char_id;
    private int types_id;
    private int know_id;
    private int diff_id;

    public SearchAll() {
    }

    public SearchAll(boolean isdelete, int sub_id, int char_id, int types_id, int know_id, int diff_id) {
        this.isdelete = isdelete;
        this.sub_id = sub_id;
        this.char_id = char_id;
        this.types_id = types_id;
        this.know_id = know_id;
        this.diff_id = diff_id;
    }

    public int getDiff_id() {
        return diff_id;
    }

    public void setDiff_id(int diff_id) {
        this.diff_id = diff_id;
    }

    public boolean getIsdelete() {
        return isdelete;
    }

    public void setIsdelete(boolean isdelete) {
        this.isdelete = isdelete;
    }

    public int getSub_id() {
        return sub_id;
    }

    public void setSub_id(int sub_id) {
        this.sub_id = sub_id;
    }

    public int getChar_id() {
        return char_id;
    }

    public void setChar_id(int char_id) {
        this.char_id = char_id;
    }

    public int getTypes_id() {
        return types_id;
    }

    public void setTypes_id(int types_id) {
        this.types_id = types_id;
    }

    public int getKnow_id() {
        return know_id;
    }

    public void setKnow_id(int know_id) {
        this.know_id = know_id;
    }

    @Override
    public String toString() {
        return "SearchAll{" +
                "isdelete=" + isdelete +
                ", sub_id=" + sub_id +
                ", char_id=" + char_id +
                ", types_id=" + types_id +
                ", know_id=" + know_id +
                ", diff_id=" + diff_id +
                '}';
    }
}
