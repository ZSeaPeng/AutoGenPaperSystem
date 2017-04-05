package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.model.Questions;
import cn.edu.zjnu.AutoGenPaperSystem.model.UserSubPermiss;
import cn.edu.zjnu.AutoGenPaperSystem.service.PaperService;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserSubPermissService;
import cn.edu.zjnu.AutoGenPaperSystem.util.RandomStr;
import cn.edu.zjnu.AutoGenPaperSystem.util.SetAllDocx;
import com.github.stuxuhai.jpinyin.PinyinFormat;
import com.github.stuxuhai.jpinyin.PinyinHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
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
    @Resource
    private UserSubPermissService userSubPermissServiceImpl;

    private SetAllDocx setAllDocx;

    @RequestMapping(value = "/getinfo", method = RequestMethod.GET)
    public Map getInfo(@ModelAttribute("userid") Integer userid) {
        String type = "";
        String subName = "";
        Map infoMap = new HashMap();
        infoMap = userServiceImpl.selectUserChosenByUSerId(userid, type, subName);
        if (infoMap.containsKey("Error")) {
            infoMap.clear();
            infoMap.put("Error", "有不同学科的题目混合在里面!");
        }
        return infoMap;
    }

    @RequestMapping(value = "/makepaper", method = RequestMethod.POST)
    public Map getTest(@RequestBody Map map, @ModelAttribute("userid") Integer userid,
                       HttpServletRequest request) {
        setAllDocx = new SetAllDocx();
        Map paperMap = new HashMap();
        String subName = (String) map.get("subName");
        UserSubPermiss userSubPermiss = userSubPermissServiceImpl.selelctByUseridSubid(userid, (Integer) map.get("subid"));
        //判断是否能够组成这个试卷（允许组卷数量是否已满）
        int dopaper = userSubPermiss.getDopaper();
        int allowpaper = userSubPermiss.getAllowpaper();
        if (dopaper == allowpaper) {
            paperMap.put("Error", "允许下载的试卷数量已满！！");
            return paperMap;
        } else if (dopaper < allowpaper) {
            dopaper++;
            userSubPermiss.setDopaper(dopaper);
            userSubPermissServiceImpl.updateByPrimaryKeySelective(userSubPermiss);
        }

        //清除数据库的存储试题
        userServiceImpl.deleteUserChonce(userid);
        //开始组卷
        String questionids="";
        String randomStr = RandomStr.getRandomString(6);
        Calendar now = Calendar.getInstance();
        String date = "" + now.get(Calendar.YEAR) + (now.get(Calendar.MONTH) + 1) + now.get(Calendar.DAY_OF_MONTH);
        String title = (String) map.get("title");
        List<Map> list = (List<Map>) map.get("question");
        Map<String, Object> questionMap = new LinkedHashMap<>();
        Map<String, Object> answerMap = new LinkedHashMap<>();
        questionMap.put("Title", subName + title);
        answerMap.put("Title", title + "答案");
        questionMap.put("xm", request.getSession().getServletContext().getRealPath("/upload/template/A3Horizontalxingming.docx"));
        questionMap.put("attent", request.getSession().getServletContext().getRealPath("/upload/template/A3HorizontalAttention.docx"));
        for (int i = 0; i < list.size(); i++) {
            List questionList = new ArrayList();
            List answerList = new ArrayList();
            List<Integer> idList = (List<Integer>) list.get(i).get("id");
            for (Integer id : idList) {
                questionids=questionids+id+",";
                Questions questions = questionsServiceImpl.selectByPrimaryKey(id);
                questionList.add("http://papersystem01.oss-cn-hangzhou.aliyuncs.com/"+questions.getContent());
                answerList.add("http://papersystem01.oss-cn-hangzhou.aliyuncs.com/"+questions.getAnswer());
            }

            questionMap.put(list.get(i).get("type") + "(共" + questionList.size() + "题，共" + list.get(i).get("score") + "分)", questionList);
            answerMap.put(list.get(i).get("type") + "(共" + questionList.size() + "题，共" + list.get(i).get("score") + "分)", answerList);
        }
        try {
            String fileName=date + "u" + userid + PinyinHelper.convertToPinyinString(subName, "", PinyinFormat.WITHOUT_TONE) + randomStr;
            String qurl = request.getSession().getServletContext().getRealPath("/upload/temp/" + fileName + ".docx");
            setAllDocx.Title(questionMap, request.getSession().getServletContext().getRealPath("/upload/template/templateA3Horizontal.docx"), qurl);
            String aurl = request.getSession().getServletContext().getRealPath("/upload/temp/a_" + fileName + ".docx");
            setAllDocx.Title(answerMap, request.getSession().getServletContext().getRealPath("/upload/template/templateA3Horizontal.docx"), aurl);
            //纪录组成的试卷
            Paper paper=new Paper();
            paper.setPapername(subName + title);
            paper.setUserid(userid);
            paper.setAnswerurl(aurl);
            paper.setPaperurl(qurl);
            paper.setQuestionids(questionids);
            paperServiceImpl.insertSelective(paper);
            paperMap.put("qurl", "121.196.206.205:8111/AutoGenPaperSystem/upload/temp/" + fileName + ".docx");
            paperMap.put("aurl", "121.196.206.205:8111/AutoGenPaperSystem/upload/temp/a_" + fileName + ".docx");
            return paperMap;
        } catch (Exception e) {
            e.printStackTrace();
        }

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

