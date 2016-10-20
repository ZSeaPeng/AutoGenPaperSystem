package cn.edu.zjnu.AutoGenPaperSystem.model;

/**
 * Created by sgt on 2016/9/29.
 */
public class QuestionsJson {
    private int id;
    private String context;
    private String answer;
    private String qurl;
    private String aurl;

    public QuestionsJson() {
    }

    public QuestionsJson(int id, String context, String answer, String qurl, String aurl) {
        this.id = id;
        this.context = context;
        this.answer = answer;
        this.qurl = qurl;
        this.aurl = aurl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getQurl() {
        return qurl;
    }

    public void setQurl(String qurl) {
        this.qurl = qurl;
    }

    public String getAurl() {
        return aurl;
    }

    public void setAurl(String aurl) {
        this.aurl = aurl;
    }

    @Override
    public String toString() {
        return "QuestionsJson{" +
                "id=" + id +
                ", context='" + context + '\'' +
                ", answer='" + answer + '\'' +
                ", qurl='" + qurl + '\'' +
                ", aurl='" + aurl + '\'' +
                '}';
    }
}
