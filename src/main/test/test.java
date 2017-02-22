import cn.edu.zjnu.AutoGenPaperSystem.dao.QuestionsMapper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.model.UpdateInfoJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.*;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

/**
 * Created by zseapeng on 2016/10/25.
 */
public class test {
    private QuestionsMapper questionsMapper;
    private QuestionsService questionsService;
    private SubjectService subjectService;
    private KnowledgeService knowledgeService;
    private UserService userService;
    private PaperService paperService;
   @Before
    public void init(){
       ApplicationContext ac = new ClassPathXmlApplicationContext("Beans.xml");
       questionsService = (QuestionsService) ac.getBean("questionsServiceImpl");
       subjectService = (SubjectService) ac.getBean("subjectServiceImpl");
       knowledgeService = (KnowledgeService) ac.getBean("knowledgeServiceImpl");
       userService = (UserService) ac.getBean("userServiceImpl");
       paperService = (PaperService) ac.getBean("paperServiceImpl");
   }
   @Test
    public void getData(){
       List<UpdateInfoJson> updateInfoJsons = questionsService.selectUploadTime();
       for (UpdateInfoJson u : updateInfoJsons){
           System.out.println("u---->"+u);
       }

   }
   @Test
    public void getSub(){
       subjectService.selectAllSubjectOnAdmin();
   }

   @Test
    public void getKnow(){
       System.out.println(knowledgeService.selectFirstKnowledgeBySubjectId(1,1,"","","","","",""));
   }
   @Test
    public void getSubId(){
       System.out.println(subjectService.selectBysubName("英语（PETS1）"));
   }
   @Test
    public void deletePoint(){
       knowledgeService.updateIsDeleteById(17);
   }
   @Test
    public void testChosen(){
       //userService.selectUserChosenByUSerId(9);
   }

   @Test
    public void testSubCan(){
       userService.UpdateSubjectCanByUserId("1",10);
   }

   //@Test
   // public void testMapper(){
   //     List<Questions> list = questionsService.selectTest(1,1,1);
   //     for (Questions q:list){
   //         System.out.println(q);
   //     }
   //}

    @Test
    public void show(){
        List<Paper> paperList = paperService.selectByUserId(10);
        for (Paper p:paperList){
            System.out.println(p.toString());
        }
    }


    @Test
    public void testGetPOintId(){
        System.out.println(knowledgeService.selectKnowledgeList("不等式的应用"));
    }
}
