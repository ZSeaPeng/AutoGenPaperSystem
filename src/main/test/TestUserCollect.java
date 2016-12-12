//import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
//import cn.edu.zjnu.AutoGenPaperSystem.util.generation.GA;
//import cn.edu.zjnu.AutoGenPaperSystem.util.generation.Paper;
//import cn.edu.zjnu.AutoGenPaperSystem.util.generation.Population;
//import cn.edu.zjnu.AutoGenPaperSystem.util.generation.RuleBean;
//import org.junit.Before;
//import org.junit.Test;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.support.ClassPathXmlApplicationContext;
//
//import java.util.ArrayList;
//import java.util.List;
//
///**
// * Created by sgt on 2016/11/8.
// */
//public class TestUserCollect {
//
//    private UserService userServiceImpl;
//
//    @Before
//    public void init(){
//        ApplicationContext applicationContext=new ClassPathXmlApplicationContext("Beans.xml");
//        userServiceImpl= (UserService) applicationContext.getBean("userServiceImpl");
//    }
//
//    @Test
//    public void a(){
////        System.out.println(userService.updateCollectByUserId("1",1));
//        List<String> list=new ArrayList<>();
//        list.add("1");
//        list.add("2");
//        list.add("3");
//        System.out.printf(list.toString());
//    }
//    @Test
//    public void b(){
//        Paper resultPaper = null;
//        // 迭代计数器
//        int count = 0;
//        int runCount = 100;
//        // 适应度期望值
//        double expand = 0.98;
//        // 可自己初始化组卷规则rule
//        List<String> pointIdlist=new ArrayList<>();
//        pointIdlist.add("1");
//        pointIdlist.add("3");
//        pointIdlist.add("5");
//        RuleBean ruleBean=new RuleBean();
//        ruleBean.setId(1);
//        ruleBean.setPointIds(pointIdlist);
//        ruleBean.setDifficulty(0.5);
//        ruleBean.setQuestionNum(10);
//        ruleBean.setSubjecId(1);
//        ruleBean.setTypeId(1);
////        ruleBean.setCreateTime();
//        if (ruleBean != null) {
//            // 初始化种群
//            Population population = new Population(20, true, ruleBean);
//            System.out.println("初次适应度  " + population.getFitness().getAdaptationDegree());
//            while (count < runCount && population.getFitness().getAdaptationDegree() < expand) {
//                count++;
//                population = GA.evolvePopulation(population, ruleBean);
//                System.out.println("第 " + count + " 次进化，适应度为： " + population.getFitness().getAdaptationDegree());
//            }
//            System.out.println("进化次数： " + count);
//            System.out.println(population.getFitness().getAdaptationDegree());
//            resultPaper = population.getFitness();
//        }
//        System.out.println(resultPaper);
//    }
//}
