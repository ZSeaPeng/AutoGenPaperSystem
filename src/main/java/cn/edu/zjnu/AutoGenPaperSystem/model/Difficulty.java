package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Difficulty {
    private Integer difficultyId;

    private Double uplimit;

    private Double lowlimit;

    private String describe;

    public Difficulty(Integer difficultyId, Double uplimit, Double lowlimit, String describe) {
        this.difficultyId = difficultyId;
        this.uplimit = uplimit;
        this.lowlimit = lowlimit;
        this.describe = describe;
    }

    public Difficulty() {
        super();
    }

    public Integer getDifficultyId() {
        return difficultyId;
    }

    public void setDifficultyId(Integer difficultyId) {
        this.difficultyId = difficultyId;
    }

    public Double getUplimit() {
        return uplimit;
    }

    public void setUplimit(Double uplimit) {
        this.uplimit = uplimit;
    }

    public Double getLowlimit() {
        return lowlimit;
    }

    public void setLowlimit(Double lowlimit) {
        this.lowlimit = lowlimit;
    }

    public String getDescribe() {
        return describe;
    }

    public void setDescribe(String describe) {
        this.describe = describe == null ? null : describe.trim();
    }
}