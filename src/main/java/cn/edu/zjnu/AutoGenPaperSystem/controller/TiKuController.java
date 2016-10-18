package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.SearchAll;
import cn.edu.zjnu.AutoGenPaperSystem.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by zseapeng on 2016/9/27.
 * 一些实验性内容，并不完善
 */
@Controller
@RequestMapping(value = "/api/tiku")
@ResponseBody
public class TiKuController {

    @Resource
    private QuestionsService questionsServiceImpl;
    @Resource
    private KnowledgeService knowledgeServiceImpl;
    @Resource
    private SubjectService subjectServiceImpl;
    @Resource
    private TypeService typeServiceImpl;
    @Resource
    private DifficultyService difficultyServiceImpl;
    @Resource
    private CharacterService characterServiceImpl;

    private static SearchAll searchAll = new SearchAll();


    private int sub_id = 0;
    private String point_id = "";
    private int grade_id = 0;
    private String sub_name = "";
    private String others = "";
    private String t = "0";
    private String d = "0";
    private String c = "0";

    @RequestMapping(value = "/{grade_id}/{subjectName}/point{point_id}", method = RequestMethod.GET)
    public Map getInfo(@PathVariable int grade_id,
                       @PathVariable String subjectName,
                       @PathVariable String point_id,
                       HttpSession session) {
        t= (String) session.getAttribute("t");
        d= (String) session.getAttribute("d");
        c= (String) session.getAttribute("c");
        if (t==null){
            t="0";
        }
        if (d==null){
            d="0";
        }
        if (c==null){
            c="0";
        }
        Map<String, List> allMap = new HashMap<String, List>();
        setParam(subjectName, grade_id, point_id);
        List knowLedgeList = knowledgeServiceImpl.selectFirstKnowledgeBySubjectId(this.sub_id,
                this.grade_id, this.others, this.point_id, this.sub_name, t, d, c);
        List typesList = typeServiceImpl.selectTypesBySubjectId(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
        List difficultiesList = difficultyServiceImpl.selectAllDifficult(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
        List charactionsList = characterServiceImpl.selectAllCharat(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
        System.out.println("subname---->" + this.sub_name);
        allMap.put("Points", knowLedgeList);
        allMap.put("Types", typesList);
        allMap.put("Difficulty", difficultiesList);
        allMap.put("Charaction", charactionsList);
        return allMap;
    }

    @RequestMapping(value = "/{grade_id}/{subjectName}/point{point_id}/{others}", method = RequestMethod.GET)
    public Map getOthers(@PathVariable String others,
                         @PathVariable int grade_id,
                         @PathVariable String subjectName,
                         @PathVariable String point_id,
                         HttpSession session) {
        setParam(subjectName, grade_id, point_id);
        System.out.println("subnameEnd---->" + this.sub_name);
        this.others = others;
        String reg = "t(\\d+)d(\\d+)c(\\d+)";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(others);
        System.out.println("count---->" + matcher.groupCount());
        if (matcher.find()) {
            System.out.println("t-->" + matcher.group(1));
            session.setAttribute("t",matcher.group(1));
            session.setAttribute("d",matcher.group(2));
            session.setAttribute("c",matcher.group(3));
//            t = matcher.group(1);
//            d = matcher.group(2);
//            c = matcher.group(3);
        }
        System.out.println("other---->" + this.others);
        return null;
    }

    @RequestMapping(value = "/{grade_id}/{subjectName}/point{point_id}/question", method = RequestMethod.GET)
    public Map getQuestionList(@PathVariable int grade_id,
                               @PathVariable String subjectName,
                               @PathVariable String point_id,
                               @RequestParam int page) {

        System.out.println("page--->" + page);
        setParam(subjectName, grade_id, point_id);
        System.out.println("point--->" + this.point_id);
        System.out.println("Integer.valueOf(this.point_id)--->" + Integer.valueOf(this.point_id));
        searchAll.setSub_id(this.sub_id);
        searchAll.setKnow_id(Integer.valueOf(this.point_id));
        System.out.println("searchAll--->" + searchAll);
        //System.out.println();
        return questionsServiceImpl.selectBySearchAll(searchAll, page);
    }

    @RequestMapping(value = "/{grade_id}/{subjectName}/point{point_id}/{others}/question", method = RequestMethod.GET)
    public Map getQuestionList(@PathVariable int grade_id,
                               @PathVariable String subjectName,
                               @PathVariable String point_id,
                               @PathVariable String others,
                               @RequestParam int page) {

        setParam(subjectName, grade_id, point_id);
        this.others = others;
        searchAll.setSub_id(this.sub_id);
        searchAll.setKnow_id(Integer.valueOf(this.point_id));

        String reg = "t(\\d+)d(\\d+)c(\\d+)";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(others);
        System.out.println("count---->" + matcher.groupCount());
        if (matcher.find()) {
            System.out.println("t-->" + matcher.group(1));
            searchAll.setTypes_id(Integer.parseInt(matcher.group(1)));
            searchAll.setDiff_id(Integer.parseInt(matcher.group(2)));
            searchAll.setChar_id(Integer.parseInt(matcher.group(3)));
        }
        System.out.println("searchAll--->" + searchAll);
        return questionsServiceImpl.selectBySearchAll(searchAll, page);
    }

    private void init() {
        sub_id = 0;
        point_id = "";
        grade_id = 0;
        sub_name = "";
        others = "";
        t = "0";
        d = "0";
        c = "0";
    }

    private void setParam(String subjectName, int grade_id, String point_id) {
        this.sub_name = subjectName;
        this.grade_id = grade_id;
        this.point_id = point_id;
        String regEx = "[^0-9]";
        Pattern p = Pattern.compile(regEx);
        Matcher matcher = p.matcher(subjectName);
        this.sub_id = Integer.parseInt(matcher.replaceAll("").trim());
    }
}
//━━━━━━神兽出没━━━━━━
//　　  ┏┓　    ┏┓
//　　 ┏┛┻━━━━━━┛┻┓
//　　 ┃　　　　　 ┃
//　　 ┃　　　━　　┃
//　　 ┃　┳┛　┗┳　 ┃
//　　 ┃　　　　　 ┃
//　　 ┃　　┻　　  ┃
//　　 ┃　　　　　 ┃
//　　 ┗━┓　　　┏━┛           Code is far away from bug with the animal protecting
//　　　　┃　　　┃                         神兽保佑,代码无bug
//　　　　┃　　　┃
//　　　　┃　　　┗━━━┓
//　　　　┃　　　　　 ┣┓
//　　　　┃　　　　　 ┏┛
//　　　　┗┓┓┏━┳┓┏┛
//　　　　 ┃┫┫ ┃┫┫
//　　　　 ┗┻┛ ┗┻┛
