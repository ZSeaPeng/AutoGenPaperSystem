package cn.edu.zjnu.AutoGenPaperSystem.util.generation;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created by sgt on 2016/11/29.
 */
public class Paper {
    /**
     * 个体id
     */
    private int id;
    /**
     * 适应度
     */
    private double adaptationDegree = 0.00;
    /**
     * 知识点覆盖率
     */
    private double kPCoverage = 0.00;
    /**
     * 习题总分
     */
    private double totalDifficult = 0.00;
    /**
     * 试卷难度系数
     */
    private double difficulty = 0.00;
    /**
     * 个体包含的试题集合
     */
    private List<QuestionBean> questionList = new ArrayList<QuestionBean>();

    public Paper(int size) {
        for (int i = 0; i < size; i++) {
            questionList.add(null);
        }
    }
    public Paper() {
        super();
    }

    public Double getTotalDifficult(){
        if (totalDifficult==0){
            double total = 0;
            for (QuestionBean question : questionList) {
                total += question.getDifficulty();
            }
            totalDifficult = total;
        }
        return totalDifficult;
    }

    /**
     * 计算试卷个体难度系数 计算公式： 每题难度*分数求和除总分
     *
     * @return
     */
    public double getDifficulty() {
        if (difficulty == 0) {
            double _difficulty = 0;
            for (QuestionBean question : questionList) {
                _difficulty += question.getDifficulty();
            }
            difficulty = _difficulty / getTotalDifficult();
        }
        return difficulty;
    }
    /**
     * 获取试题数量
     *
     * @return
     */
    public int getQuestionSize() {
        return questionList.size();
    }

    /**
     * 计算知识点覆盖率 公式为：个体包含的知识点/期望包含的知识点
     *
     * @param rule
     */
    public void setKpCoverage(RuleBean rule) {
        if (kPCoverage == 0) {
            Set<String> result = new HashSet<String>();
            result.addAll(rule.getPointIds());
            Set<String> another = questionList.stream().map(questionBean -> String.valueOf(questionBean.getPointId())).collect(Collectors.toSet());
            // 交集操作
            result.retainAll(another);
            kPCoverage = result.size() / rule.getPointIds().size();
        }
    }
    /**
     * 计算个体适应度 公式为：f=1-(1-M/N)*f1-|EP-P|*f2
     * 其中M/N为知识点覆盖率，EP为期望难度系数，P为种群个体难度系数，f1为知识点分布的权重
     * ，f2为难度系数所占权重。当f1=0时退化为只限制试题难度系数，当f2=0时退化为只限制知识点分布
     *
     * @param rule 组卷规则
     * @param f1   知识点分布的权重
     * @param f2   难度系数的权重
     */
    public void setAdaptationDegree(RuleBean rule, double f1, double f2) {
        if (adaptationDegree == 0) {
            adaptationDegree = 1 - (1 - getkPCoverage()) * f1 - Math.abs(rule.getDifficulty() - getDifficulty()) * f2;
        }
    }

    public boolean containsQuestion(QuestionBean question) {
        if (question == null) {
            for (int i = 0; i < questionList.size(); i++) {
                if (questionList.get(i) == null) {
                    return true;
                }
            }
        } else {
            for (QuestionBean aQuestionList : questionList) {
                if (aQuestionList != null) {
                    if (aQuestionList.equals(question)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    /**
     * 增加问题
     *
     * @param question
     */
    public void saveQuestion(int index, QuestionBean question) {
        this.questionList.set(index, question);
        this.totalDifficult = 0;
        this.adaptationDegree = 0;
        this.difficulty = 0;
        this.kPCoverage = 0;
    }

    public void addQuestion(QuestionBean question) {
        this.questionList.add(question);
        this.totalDifficult = 0;
        this.adaptationDegree = 0;
        this.difficulty = 0;
        this.kPCoverage = 0;
    }


    public QuestionBean getQuestion(int index) {
        return questionList.get(index);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<QuestionBean> getQuestionList() {
        return questionList;
    }

    public void setQuestionList(List<QuestionBean> questionList) {
        this.questionList = questionList;
    }

    public double getAdaptationDegree() {
        return adaptationDegree;
    }

    public void setAdaptationDegree(double adaptationDegree) {
        this.adaptationDegree = adaptationDegree;
    }

    public double getkPCoverage() {
        return kPCoverage;
    }

    public void setkPCoverage(double kPCoverage) {
        this.kPCoverage = kPCoverage;
    }

    public void setTotalDifficult(double totalDifficult) {
        this.totalDifficult = totalDifficult;
    }

    public void setDifficulty(double difficulty) {
        this.difficulty = difficulty;
    }
}
