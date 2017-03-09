package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.model.User;
import cn.edu.zjnu.AutoGenPaperSystem.service.PaperService;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import cn.edu.zjnu.AutoGenPaperSystem.util.SetAllDocx;
import com.github.stuxuhai.jpinyin.PinyinFormat;
import com.github.stuxuhai.jpinyin.PinyinHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.xml.crypto.Data;
import java.util.*;

/**
 * Created by zseapeng on 2016/11/18.
 */
@Controller
@RequestMapping(value = "/api/paper")
@ResponseBody
@SessionAttributes("userid")
public class PaperController {


    @Resource
    private UserService userServiceImpl;
    @Resource
    private QuestionsService questionsServiceImpl;
    @Resource
    private PaperService paperServiceImpl;


    @RequestMapping(value = "/getinfo", method = RequestMethod.GET)
    public Map getInfo(@ModelAttribute("userid") Integer userid) {
        String type = "";
        String subName = "";
        Map infoMap=new HashMap();
        infoMap=userServiceImpl.selectUserChosenByUSerId(userid, type, subName);
        if (infoMap.containsKey("Error")){
            infoMap.clear();
            infoMap.put("Error","有不同学科的题目混合在里面!");
        }
        return infoMap;
    }

    @RequestMapping(value = "/makepaper", method = RequestMethod.POST)
    public Map getTest(@RequestBody Map map, @ModelAttribute("userid") Integer userid,
                                                   HttpServletRequest request) {

        User user = userServiceImpl.selectByPrimaryKey(userid);
        String subjectCan=user.getSubjectcan();

        Calendar now=Calendar.getInstance();
        String date=""+now.get(Calendar.YEAR)+"-"+(now.get(Calendar.MONTH)+1)+"-"+now.get(Calendar.DAY_OF_MONTH);
        String title = (String) map.get("title");
        List<Map> list = (List<Map>) map.get("question");
        Map<String,Object> questionMap=new LinkedHashMap<>();
        Map<String,Object> answerMap=new LinkedHashMap<>();
        questionMap.put("Title",title);
        answerMap.put("Title",title+"答案");
        for (int i=0;i<list.size();i++) {
            List questionList=new ArrayList();
            List answerList=new ArrayList();
            List<Integer> idList= (List<Integer>) list.get(i).get("id");
            for (Integer id:idList){
                Questions questions=questionsServiceImpl.selectByPrimaryKey(id);
                questionList.add(questions.getContent());
                answerList.add(questions.getAnswer());
            }
            questionMap.put(list.get(i).get("type")+"(共"+questionList.size()+"题，共"+list.get(i).get("score")+"分)",questionList );
            answerMap.put(list.get(i).get("type")+"(共"+questionList.size()+"题，共"+list.get(i).get("score")+"分)",answerList );
//            System.out.println("type:  " + tempMap.get("type"));
//            System.out.println("id:  " + tempMap.get("id"));
//            System.out.println("score:  " + tempMap.get("score"));
        }
        try {
            String qurl = request.getServletContext().getRealPath("/upload/temp/" + date+title +"试卷"+ ".docx");
            SetAllDocx.Title(questionMap,request.getServletContext().getRealPath("/upload/template/templateA4Vertical.docx"),qurl);
            String aurl = request.getServletContext().getRealPath("/upload/temp/" +date+ title +"答案"+ ".docx");
            SetAllDocx.Title(answerMap,request.getServletContext().getRealPath("/upload/template/templateA4Vertical.docx"),aurl);
        } catch (Exception e) {
            e.printStackTrace();
        }
        Map paperMap = new HashMap();
        paperMap.put("qurl","localhost:8111/AutoGenPaperSystem/upload/temp/"+date+title +"试卷"+".docx");
        paperMap.put("aurl","localhost:8111/AutoGenPaperSystem/upload/temp/"+ date+ title +"答案"+".docx");

            //String dfileName = new String(fileName.getBytes("gb2312"), "iso8859-1");
            //HttpHeaders headers = new HttpHeaders();
            //headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            //headers.setContentDispositionFormData("attachment", dfileName);
            //return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file), headers, HttpStatus.CREATED);
        return paperMap;
        }


    //public Map getPaperList(@RequestBody PaperObject[] paperObjects, @ModelAttribute("userid") Integer userid,
    //                        HttpServletRequest request) {
    //    System.out.println("--------");
    //    String fileName = "测试文件";
    //    User user = userServiceImpl.selectByPrimaryKey(userid);
    //    user.setUserchosen("0");
    //    user.setAdd(new ArrayList());
    //    user.setUserpassword(null);
    //    userServiceImpl.updateByPrimaryKeySelective(user);
    //    String chosenList = "0";
    //    System.out.println("size--->"+paperObjects.length);
    //    for (PaperObject s:paperObjects){
    //        System.out.println("s---->"+s.toString());
    //    }
    //    return null;
    //
    //}

    //@RequestMapping(value = "/makepaper", method = RequestMethod.POST)
    //public Map getPaperList(@RequestBody Integer[] paperlist, @ModelAttribute("userid") Integer userid,
    //                           HttpServletRequest request) {
    //    String fileName = "测试文档";
    //    User user = userServiceImpl.selectByPrimaryKey(userid);
    //    user.setUserchosen("0");
    //    user.setAdd(new ArrayList());
    //    user.setUserpassword(null);
    //    userServiceImpl.updateByPrimaryKeySelective(user);
    //    String chosenList = "0";
    //    for (int p : paperlist) {
    //        chosenList = chosenList + "," + String.valueOf(p);
    //    }
    //
    //    Paper paper = new Paper();
    //    paper.setUserId(userid);
    //    paper.setQuestionIds(chosenList);
    //
    //    paperServiceImpl.insertSelective(paper);
    //    Map<String,Object> qurMap=new HashMap<>();
    //    Map<String,Object> aurMap=new HashMap<>();
    //    List QurlList = new ArrayList();
    //    List AurlList = new ArrayList();
    //    for (Integer i : paperlist) {
    //        Questions questions = questionsServiceImpl.selectByPrimaryKey(i);
    //        QurlList.add(questions.getContent());
    //        AurlList.add(questions.getAnswer());
    //    }
    //    qurMap.put(" ",QurlList);
    //    aurMap.put(" ",AurlList);
    //    try {
    //        String qurl = request.getServletContext().getRealPath("/upload/temp/" + PinyinHelper.convertToPinyinString(fileName, "", PinyinFormat.WITHOUT_TONE) + ".docx");
    //        SetAllDocx.Title(qurMap,request.getServletContext().getRealPath("/upload/template/templateA4Vertical.docx"),qurl);
    //        String aurl = request.getServletContext().getRealPath("/upload/temp/a_" + PinyinHelper.convertToPinyinString(fileName, "", PinyinFormat.WITHOUT_TONE) + ".docx");
    //        SetAllDocx.Title(aurMap,request.getServletContext().getRealPath("/upload/template/templateA4Vertical.docx"),aurl);
    //        System.out.println("-------------");
    //        Map map = new HashMap();
    //        map.put("qurl","localhost:8111/AutoGenPaperSystem/upload/temp/"+ PinyinHelper.convertToPinyinString(fileName, "", PinyinFormat.WITHOUT_TONE)+".docx");
    //        map.put("aurl","localhost:8111/AutoGenPaperSystem/upload/temp/a_"+ PinyinHelper.convertToPinyinString(fileName, "", PinyinFormat.WITHOUT_TONE)+".docx");
    //        return map;
    //
    //        //return
    //    } catch (Exception e) {
    //        e.printStackTrace();
    //    }
    //    //String dfileName = new String(fileName.getBytes("gb2312"), "iso8859-1");
    //    //HttpHeaders headers = new HttpHeaders();
    //    //headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
    //    //headers.setContentDispositionFormData("attachment", dfileName);
    //    //return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file), headers, HttpStatus.CREATED);
    //    return null;
    //
    //}

    //@RequestMapping(value = "/auto", method = RequestMethod.POST)
    //public void getAutoInfo(@RequestBody Map map) {
    //    System.out.println("--");
    //    System.out.println(map.get("wordtype").toString());
    //
    //    System.out.println(map.get("subject"));
    //    System.out.println(map.get("diff"));
    //    System.out.println(map.get("questions"));
    //    //System.out.println(map.get("questions"));
    //    System.out.println(map.get("points"));
    //}
}

