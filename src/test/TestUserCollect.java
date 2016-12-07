import cn.edu.zjnu.AutoGenPaperSystem.dao.DifficultyMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.dao.UserMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Difficulty;
import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import cn.edu.zjnu.AutoGenPaperSystem.util.generation.GA;
import cn.edu.zjnu.AutoGenPaperSystem.util.generation.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.util.generation.Population;
import cn.edu.zjnu.AutoGenPaperSystem.util.generation.RuleBean;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by sgt on 2016/11/8.
 */
public class TestUserCollect {
    @Resource
    private UserService userService;
    private UserMapper userMapper;
    private QuestionsMapper questionsMapper;
    private QuestionsService questionsServiceImpl;
    private DifficultyMapper difficultyMapper;
    @Before
    public void init(){
        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("Beans.xml");
        userService= (UserService) applicationContext.getBean("userServiceImpl");
        userMapper= (UserMapper) applicationContext.getBean("userMapper");
        questionsMapper= (QuestionsMapper) applicationContext.getBean("questionsMapper");
        questionsServiceImpl= (QuestionsService) applicationContext.getBean("questionsServiceImpl");
        difficultyMapper= (DifficultyMapper) applicationContext.getBean("difficultyMapper");
    }

    @Test
    public void a(){
//        System.out.println(userService.updateCollectByUserId("1",1));
        List<String> list=new ArrayList<>();
        list.add("1");
        list.add("2");
        list.add("3");
        System.out.printf(list.toString());
    }
    @Test
    public void b(){
        Paper resultPaper = null;
        // 迭代计数器
        int count = 0;
        int runCount = 10;
        // 适应度期望值
        double expand = 0.98;
        // 可自己初始化组卷规则rule
        List<String> pointIdlist=new ArrayList<>();
        pointIdlist.add("1");
        pointIdlist.add("4");
        pointIdlist.add("5");
        RuleBean ruleBean=new RuleBean();
        ruleBean.setId(1);
        ruleBean.setPointIds(pointIdlist);
        ruleBean.setDifficulty(0.5);
        ruleBean.setQuestionNum(10);
        ruleBean.setSubjecId(1);
        ruleBean.setTypeId(1);
//        ruleBean.setCreateTime();
        if (ruleBean != null) {
            // 初始化种群
            System.out.printf(userMapper.selectByPrimaryKey(20).getUsername());
            Population population = new Population(20, true, ruleBean,questionsServiceImpl);
            System.out.println("初次适应度  " + population.getFitness().getAdaptationDegree());
            while (count < runCount && population.getFitness().getAdaptationDegree() < expand) {
                count++;
                population = GA.evolvePopulation(population, ruleBean,questionsServiceImpl);
                System.out.println("第 " + count + " 次进化，适应度为： " + population.getFitness().getAdaptationDegree());
            }
            System.out.println("进化次数： " + count);
            System.out.println(population.getFitness().getAdaptationDegree());
            resultPaper = population.getFitness();
        }

        System.out.println(resultPaper);
    }



    @Test
    public void c(){
        User user=userMapper.selectByPrimaryKey(20);

        Difficulty difficulty=difficultyMapper.selectByPrimaryKey(5);
        Questions questions=questionsMapper.selectByPrimaryKey(1);
        System.out.println(user.getUsername());
        System.out.println(questions.getQuestionsId());
        System.out.println(difficulty.getDifficultyId());
    }
}
