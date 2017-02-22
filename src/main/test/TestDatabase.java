import cn.edu.zjnu.AutoGenPaperSystem.service.*;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by zseapeng on 2016/9/22.
 */
public class TestDatabase {


    // @Resource
    private GradeService gradeServiceImpl;

    private SubjectService subjectServiceImpl;

    private QuestionsService questionsServiceImpl;

    private KnowledgeService knowledgeServiceImpl;

    private TypeService typeServiceImpl;

    @Test
    public void start() {
        ApplicationContext ac = new ClassPathXmlApplicationContext("Beans.xml");
        gradeServiceImpl = (GradeService) ac.getBean("gradeServiceImpl");
        subjectServiceImpl = (SubjectService) ac.getBean("subjectServiceImpl");
        questionsServiceImpl = (QuestionsService) ac.getBean("questionsServiceImpl");
        knowledgeServiceImpl = (KnowledgeService) ac.getBean("knowledgeServiceImpl");
        typeServiceImpl = (TypeService) ac.getBean("typeServiceImpl");
    }

    @Test
    public void SubjectselectByGradeIdTest() {
        System.out.println(subjectServiceImpl.selectByGradeId(1));
    }

    @Test
    public void getSub() {
        subjectServiceImpl.selectAllSubject();
    }


    @Test
    public void TestReg() {
        String regex = "\\d+";
        String context = "我的QQ是:456456我的电话是:0532214我的邮箱是:aaa@aaa.com";
        Pattern pattern = Pattern.compile(regex);
        String[] str = pattern.split(context);
        for (String s : str) {
            System.out.println(s);
        }
        Matcher matcher = pattern.matcher("22bb23");
        System.out.println(matcher.pattern());
    }

    //@Test
    //public void getTypes(){
    //    System.out.println(typeServiceImpl.selectTypesBySubjectId(1));
    //}
    @Test
    public void testReg() {
        String reg = "t(\\d+)d(\\d+)n(\\d+)";
        String str = "t0d0n0";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(str);
        System.out.println("count---->" + matcher.groupCount());
        if (matcher.find()) {
            System.out.println("t-->" + matcher.group(1));
            System.out.println("d--->" + matcher.group(2));
            System.out.println("n---->" + matcher.group(3));
        }

        System.out.println(Integer.MAX_VALUE);
    }


}
