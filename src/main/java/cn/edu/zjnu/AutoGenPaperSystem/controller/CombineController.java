package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.SubjectService;
import cn.edu.zjnu.AutoGenPaperSystem.util.SetAllDocx;
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
import java.util.HashMap;
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

    @RequestMapping(value = "/manual", method = RequestMethod.POST)
    public String Manual(Integer subid, Integer wordtype, HttpSession session) {
        System.out.println("sbid---" + subid);
        session.setAttribute("wordsubid", subid);
        session.setAttribute("wordtype", wordtype);
        String url = "{\"url\":" + "\"" + subjectServiceImpl.selectByPrimaryKey(subid) + "\"}";

        return url;
    }

    @RequestMapping(value = "/auto", method = RequestMethod.POST)
    public void Auto(@RequestBody Map map, HttpServletRequest request) {

        String diff = (String) map.get("diff");
        String wordtype = (String) map.get("wordtype");
        String subject = (String) map.get("subject");

        List typeId = (List) map.get("typeId");
        List typeNum = (List) map.get("typeNum");


        System.out.println("typeid");
        for (Object id : typeId) {
            System.out.print(id + " ");
        }
        System.out.println("typeNum");
        for (Object num : typeNum) {
            System.out.print(num + " ");
        }
        System.out.println();

        Map pointsMap = (Map) map.get("points");
        List<String> pointsList = new ArrayList<>();
        pointsList.clear();
        for (Object point : pointsMap.values()) {
            pointsList.add(String.valueOf(point));
            //System.out.println("point---" + point);
        }

        List<Paper> paperList = new ArrayList<>();
        for (int i=0; i < typeId.size(); i++) {
            RuleBean ruleBean = new RuleBean();
            ruleBean.setDifficulty(Double.parseDouble(diff));
            ruleBean.setPointIds(pointsList);
            ruleBean.setSubjecId(Integer.parseInt(subject));
            ruleBean.setTypeId(Integer.valueOf(String.valueOf(typeId.get(i))));
            ruleBean.setQuestionNum(Integer.valueOf(String.valueOf(typeNum.get(i))));
            StartPaper startPaper = new StartPaper(ruleBean);
            paperList.add(startPaper.getPaper());
        }

        Map<String,Object> map1 = new HashMap<String,Object>();

        map1.put("Title","xxxxxx");
        for (int i=0;i<paperList.size();i++){

            map1.put("选择题",paperList.get(i).getQuestionPath());
        }

        try {
            SetAllDocx.Title(map1,request.getServletContext().getRealPath("/upload/template/templateA4Vertical.docx"),request.getServletContext().getRealPath("/upload/temp/ceshi.docx"));
        } catch (Exception e) {
            e.printStackTrace();
        }


    }
}
