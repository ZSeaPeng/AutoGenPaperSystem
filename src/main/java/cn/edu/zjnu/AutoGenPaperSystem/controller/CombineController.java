package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.SubjectService;
import cn.edu.zjnu.AutoGenPaperSystem.util.generation.Paper;
import cn.edu.zjnu.AutoGenPaperSystem.util.generation.RuleBean;
import cn.edu.zjnu.AutoGenPaperSystem.util.generation.StartPaper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/9.
 */
@Controller
@RequestMapping(value = "/api/combine")
@ResponseBody
public class CombineController {
    @Resource
    private SubjectService subjectServiceImpl;
    @Resource
    private QuestionsService questionsServiceImpl;

    @RequestMapping(value = "/manual", method = RequestMethod.POST)
    public String Manual(Integer subid, Integer wordtype, HttpSession session) {
        System.out.println("sbid---" + subid);
        session.setAttribute("wordsubid", subid);
        session.setAttribute("wordtype", wordtype);
        String url = "{\"url\":" + "\"" + subjectServiceImpl.selectByPrimaryKey(subid) + "\"}";

        return url;
    }

    @RequestMapping(value = "/auto", method = RequestMethod.POST)
    public List Auto(@RequestBody Map map, HttpServletRequest request) {

        String diff = (String) map.get("diff");
        String wordtype = (String) map.get("wordtype");
        String subject = (String) map.get("subject");

        List typeId = (List) map.get("typeId");
        List typeNum = (List) map.get("typeNum");

        List typeName = (List) map.get("typeName");


        System.out.println("typeid  :  ");
        for (Object id : typeId) {
            System.out.print(id + " ");
        }
        System.out.println();
        System.out.println("typeNum:   ");
        for (Object num : typeNum) {
            System.out.print(num + " ");
        }
        System.out.println();
        System.out.println("typeName:   ");
        for (Object name : typeName) {
            System.out.print(name + " ");
        }
        System.out.println();

        List<Integer> pointsList = new ArrayList<>();
        pointsList = (List<Integer>) map.get("points");
        System.out.println("points  ");
        for (Integer s : pointsList) {
            System.out.print(s + "  ");
        }

        List<Paper> paperList = new ArrayList<>();
        for (int i = 0; i < typeId.size(); i++) {
            RuleBean ruleBean = new RuleBean();
            ruleBean.setDifficulty(Double.parseDouble(diff));
            ruleBean.setPointIds(pointsList);
            ruleBean.setSubjecId(Integer.parseInt(subject));
            ruleBean.setTypeId(Integer.valueOf(String.valueOf(typeId.get(i))));
            ruleBean.setQuestionNum(Integer.valueOf(String.valueOf(typeNum.get(i))));
            StartPaper startPaper = new StartPaper(ruleBean);
            startPaper.setQuestionsServiceImpl(questionsServiceImpl);
            paperList.add(startPaper.getPaper());
        }


        //Map<String,Object> map1 = new HashMap<String,Object>();
        //
        //map1.put("Title","xxxxxx");
        //for (int i=0;i<paperList.size();i++){
        //    map1.put("选择题",paperList.get(i).getQuestionPath());
        //}
        //try {
        //    SetAllDocx.Title(map1,request.getServletContext().getRealPath("/upload/template/templateA4Vertical.docx"),request.getServletContext().getRealPath("/upload/temp/ceshi.docx"));
        //} catch (Exception e) {
        //    e.printStackTrace();
        //}

        for (Paper paper : paperList) {
            System.out.println("paper:  " + paper.getQuestionList());
        }

        return paperList;
    }

}
