package cn.edu.zjnu.AutoGenPaperSystem.util.generation;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * Created by sgt on 2016/11/28.
 */
public class QuestionBean {
    /**
     * 题目id
     */
    private long id;
    /**
     * 题目类型 1-单选  2-填空 3-主观
     */
    private int typeId;
    /**
     * 难度系数 0.3-1之间
     */
    private double difficulty;
    /**
     *
     */
    private int difficultId;
    /**
     * 对应知识点id
     */
    private long pointId;
    /**
     * 题干
     */
    private String content;
    /**
     * 答案
     */
    private String answer;
//    /**
//     * 出题人id
//     */
//    private long userId;
    /**
     * 试题创建时间，默认为当前时间戳
     */
    private Timestamp createTime;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public double getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(double difficulty) {
        this.difficulty = difficulty;
    }

    public long getPointId() {
        return pointId;
    }

    public void setPointId(long pointId) {
        this.pointId = pointId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getDifficultId() {
        return difficultId;
    }

    public void setDifficultId(int difficultId) {
        this.difficultId = difficultId;
    }
//    public long getUserId() {
//        return userId;
//    }
//
//    public void setUserId(long userId) {
//        this.userId = userId;
//    }

    public Timestamp getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Timestamp createTime) {
        this.createTime = createTime;
    }
}
