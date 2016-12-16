package cn.edu.zjnu.AutoGenPaperSystem.util.generation;

import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Random;

/**
 * Created by sgt on 2016/11/29.
 */
@Component
public class Population {
    /**
     * 试卷集合
     */
    private Paper[] papers;

    @Resource
    private QuestionsService questionsServiceImpl;

    public Population(int i, boolean b, RuleBean ruleBean) {
    }

    public Population() {
    }

    /**
     * 初始种群
     *
     * @param populationSize 种群规模
     * @param initFlag       初始化标志 true-初始化
     * @param rule           规则bean
     */
    public Population(int populationSize, boolean initFlag, RuleBean rule,QuestionsService questionsServiceImpl1) {

        questionsServiceImpl=questionsServiceImpl1;
        papers = new Paper[populationSize];
        if (initFlag) {
            Paper paper;
            Random random = new Random();
            for (int i = 0; i < populationSize; i++) {
                paper = new Paper();
                paper.setId(i + 1);
//                while (paper.getTotalScore() != rule.getTotalMark()) {
//                    paper.getQuestionList().clear();
                int subjectId=rule.getSubjecId();
                String pointId = rule.getPointIds().toString();
                int typeId=rule.getTypeId();
                // 单选题
                if (rule.getQuestionNum()> 0) {
                    generateQuestion(typeId, random, rule.getQuestionNum(), pointId, subjectId,"题目数量不够，组卷失败", paper,questionsServiceImpl);
                }
//                    // 填空题
//                    if (rule.getCompleteNum() > 0) {
//                        generateQuestion(2, random, rule.getCompleteNum(), rule.getCompleteScore(), idString,
//                                "填空题数量不够，组卷失败", paper);
//                    }
//                    // 主观题
//                    if (rule.getSubjectiveNum() > 0) {
//                        generateQuestion(3, random, rule.getSubjectiveNum(), rule.getSubjectiveScore(), idString,
//                                "主观题数量不够，组卷失败", paper);
//                    }
//                }
                // 计算试卷知识点覆盖率
                paper.setKpCoverage(rule);
                // 计算试卷适应度
                paper.setAdaptationDegree(rule, Global.KP_WEIGHT, Global.DIFFCULTY_WEIGHt);
                papers[i] = paper;
            }
        }
    }

    private void generateQuestion(int typeId, Random random, int qustionNum, String pointId,int subjectId,
                                  String errorMsg, Paper paper,QuestionsService questionsServiceImpl1) {
        questionsServiceImpl=questionsServiceImpl1;
        QuestionBean[] singleArray = questionsServiceImpl.selectQuestionArray(typeId, pointId.substring(1, pointId.indexOf("]")),subjectId);
        if (singleArray.length < qustionNum) {
            System.out.println(errorMsg);
            return;
        }
        QuestionBean tmpQuestion;
        for (int j = 0; j < qustionNum; j++) {
            int index = random.nextInt(singleArray.length - j);
            // 初始化分数
//            singleArray[index].setScore(score);
            paper.addQuestion(singleArray[index]);
            // 保证不会重复添加试题
            tmpQuestion = singleArray[singleArray.length - j - 1];
            singleArray[singleArray.length - j - 1] = singleArray[index];
            singleArray[index] = tmpQuestion;
        }
    }

    /**
     * 获取种群中最优秀个体
     *
     * @return
     */
    public Paper getFitness() {
        Paper paper = papers[0];
        for (int i = 1; i < papers.length; i++) {
            if (paper.getAdaptationDegree() < papers[i].getAdaptationDegree()) {
                paper = papers[i];
            }
        }
        return paper;
    }

    public Population(int populationSize) {
        papers = new Paper[populationSize];
    }

    /**
     * 获取种群中某个个体
     *
     * @param index
     * @return
     */
    public Paper getPaper(int index) {
        return papers[index];
    }

    /**
     * 设置种群中某个个体
     *
     * @param index
     * @param paper
     */
    public void setPaper(int index, Paper paper) {
        papers[index] = paper;
    }

    /**
     * 返回种群规模
     *
     * @return
     */
    public int getLength() {
        return papers.length;
    }
}
