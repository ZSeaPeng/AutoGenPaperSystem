package cn.edu.zjnu.AutoGenPaperSystem.model;

public class Difficulty {
    private Integer difficultyId;

    private Double uplimit;

    private Double lowlimit;

    private String describes;

    public Difficulty(Integer difficultyId, Double uplimit, Double lowlimit, String describes) {
        this.difficultyId = difficultyId;
        this.uplimit = uplimit;
        this.lowlimit = lowlimit;
        this.describes = describes;
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

    public String getDescribes() {
        return describes;
    }

    public void setDescribes(String describe) {
        this.describes = describes == null ? null : describes.trim();
    }
}