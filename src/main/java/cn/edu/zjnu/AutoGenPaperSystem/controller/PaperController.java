package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.PaperService;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/18.
 */
@Controller
@RequestMapping(value = "/api/paper")
@ResponseBody
//@SessionAttributes("userid")
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
        return userServiceImpl.selectUserChosenByUSerId(userid, type, subName);
    }

    @RequestMapping(value = "/makepaper", method = RequestMethod.POST)
    public String getTest(@RequestBody String string){
        System.out.print("RequestBody String string--->"+string);
        return "success---->"+string;
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

