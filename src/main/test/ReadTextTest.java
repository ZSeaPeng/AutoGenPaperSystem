import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.KnowledgeList;
import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.service.*;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.*;
import java.util.*;

/**
 * Created by zseapeng on 2016/12/9.
 */
public class ReadTextTest {
    private QuestionsMapper questionsMapper;
    private QuestionsService questionsService;
    private SubjectService subjectService;
    private KnowledgeService knowledgeService;
    private UserService userService;
    private PaperService paperService;
    private CharacterService characterService;
    private TypeService typeService;
    private DifficultyService difficultyService;

    @Before
    public void init() {
        ApplicationContext ac = new ClassPathXmlApplicationContext("Beans.xml");
        questionsService = (QuestionsService) ac.getBean("questionsServiceImpl");
        subjectService = (SubjectService) ac.getBean("subjectServiceImpl");
        knowledgeService = (KnowledgeService) ac.getBean("knowledgeServiceImpl");
        userService = (UserService) ac.getBean("userServiceImpl");
        paperService = (PaperService) ac.getBean("paperServiceImpl");
        characterService = (CharacterService) ac.getBean("characterServiceImpl");
        typeService = (TypeService) ac.getBean("typeServiceImpl");
    }

    @Test
    public void test() throws IOException {
        String pathname = "E:\\Desktop\\DBST\\stlist.txt";
        File filename = new File(pathname); // 要读取以上路径的input。txt文件
        InputStreamReader reader = null; // 建立一个输入流对象reader
        try {
            reader = new InputStreamReader(
                    new FileInputStream(filename));
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        BufferedReader br = new BufferedReader(reader); // 建立一个对象，它把文件内容转成计算机能读懂的语言
        String line = "";
        try {
            line = br.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Set<String> pointSet = new HashSet<>();
        while (line != null) {
            line = br.readLine(); // 一次读入一行数据
            if (line != null) {
                String[] text = line.split("\t");

                if (!text[8].equals("") && !text[2].equals("") && !text[3].equals("") && !text[4].equals("") ) {
                    List<KnowledgeList> knowledgeListTemp = new ArrayList<>();
                    knowledgeListTemp.clear();
                    //System.out.println(text[8]);
                    knowledgeListTemp = knowledgeService.selectKnowledgeList(text[8]);

                   //System.out.println(knowledgeListTemp);

                    String[] a = text[2].split("\\\\");
                    String qurl = "localhost:8111/AutoGenPaperSystem/upload/question/" + a[2];
                    String[] b = text[4].split("\\\\");
                    String aurl = "localhost:8111/AutoGenPaperSystem/upload/answer/"+b[2];
                    Questions questions = new Questions();

                    questions.setSubjectId(knowledgeListTemp.get(0).getSubjectId());
                    questions.setKnowledgeId1(knowledgeListTemp.get(0).getKnowledgeId4());
                    questions.setKnowledgeId2(knowledgeListTemp.get(0).getKnowledgeId3());
                    questions.setKnowledgeId3(knowledgeListTemp.get(0).getKnowledgeId2());
                    questions.setKnowledgeId4(knowledgeListTemp.get(0).getKnowledgeId1());

                    int diff = (int) (Math.random()*5+1);

                    questions.setDifficultyId(diff);
                    questions.setTypeId(typeService.selectIdByName(text[5],knowledgeListTemp.get(0).getSubjectId()));
                    questions.setAnswer(text[3]);
                    questions.setAnswerPic_URL(aurl);
                    questions.setContent(text[1]);
                    questions.setQuesPic_URL(qurl);
                    questions.setCharactId(characterService.selectIdByName(text[9]));

                   if (questionsService.insertSelective(questions)!=0){
                       System.out.println(questions);
                   }

                }


                //System.out.println("id  " + text[0] + "题目图片  " + text[2]);
                //if (!text[2].equals("")) {
                //    String[] a = text[2].split("\\\\");
                //    System.out.println("a--->" + a[2]);
                //} else {
                //    System.out.println("a--->" + text[2]);
                //}
                //System.out.print("id  " + text[0] + "   题型：" + text[5] + "   知识点：" + text[8] + "   特点： " + text[9]);
                //pointSet.add(text[5]);
                //System.out.println();
            }

            //
        }
    }


    @Test
    public void test002() {
        Map<String, Integer> map = knowledgeService.selectKnowledgeByName("现代科学技术");
        for (Map.Entry<String, Integer> m : map.entrySet()) {
            if (m.getKey().equals("Superior_ID")) {
                System.out.println("SuperiorID---" + m.getValue());
            } else if (m.getKey().equals("Knowledge_ID")) {
                System.out.println("KnowledgeID--" + m.getValue());
            }
        }
    }
    @Test
    public void testSelect(){
        System.out.println(knowledgeService.selectKnowledgeList("等差数列"));
    }
}
