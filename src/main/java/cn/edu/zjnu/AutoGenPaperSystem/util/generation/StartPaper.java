package cn.edu.zjnu.AutoGenPaperSystem.util.generation;

import cn.edu.zjnu.AutoGenPaperSystem.dao.UserMapper;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

/**
 * Created by sgt on 2016/12/7.
 */
@Component
public class StartPaper {
    @Resource
    private UserMapper userMapper;
    @Resource
    private QuestionsService questionsServiceImpl;
    Paper resultPaper = null;
    // 迭代计数器
    int count = 0;
    int runCount = 10;
    // 适应度期望值
    double expand = 0.98;
    // 可自己初始化组卷规则rule
    RuleBean ruleBean = new RuleBean();
    /**
     * 错误信息
     */
    private String errorMsg;
    private Boolean errorFlag = false;

    public StartPaper(RuleBean ruleBean) {
        this.ruleBean = ruleBean;
    }

    public void setUserMapper(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public void setQuestionsServiceImpl(QuestionsService questionsServiceImpl) {
        this.questionsServiceImpl = questionsServiceImpl;
    }

    public Paper getPaper() {
        if (ruleBean != null) {
            // 初始化种群
//            System.out.printf(userMapper.selectByPrimaryKey(20).getUsername());
            Population population = new Population(20, true, ruleBean, questionsServiceImpl);
            System.out.println("population.getErrorFlag()" + population.getErrorFlag());
            if (population.getErrorFlag()) {
                errorFlag = true;
                errorMsg = population.getErrorMsg();
            } else {
                System.out.println("初次适应度  " + population.getFitness().getAdaptationDegree());
                while (count < runCount && population.getFitness().getAdaptationDegree() < expand) {
                    count++;
                    population = GA.evolvePopulation(population, ruleBean, questionsServiceImpl);
                }
                resultPaper = population.getFitness();
            }
        }
        return resultPaper;
    }

    public Paper getResultPaper() {
        return resultPaper;
    }

    public void setResultPaper(Paper resultPaper) {
        this.resultPaper = resultPaper;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public int getRunCount() {
        return runCount;
    }

    public void setRunCount(int runCount) {
        this.runCount = runCount;
    }

    public double getExpand() {
        return expand;
    }

    public void setExpand(double expand) {
        this.expand = expand;
    }

    public RuleBean getRuleBean() {
        return ruleBean;
    }

    public void setRuleBean(RuleBean ruleBean) {
        this.ruleBean = ruleBean;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    public Boolean getErrorFlag() {
        return errorFlag;
    }

    public void setErrorFlag(Boolean errorFlag) {
        this.errorFlag = errorFlag;
    }
}
