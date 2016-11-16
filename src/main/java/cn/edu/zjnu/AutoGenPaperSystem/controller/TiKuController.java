package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.*;
import cn.edu.zjnu.AutoGenPaperSystem.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Iterator;
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
    private static int userId = 3;


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
        t = (String) session.getAttribute("t");
        d = (String) session.getAttribute("d");
        c = (String) session.getAttribute("c");
        if (t == null) {
            t = "0";
        }
        if (d == null) {
            d = "0";
        }
        if (c == null) {
            c = "0";
        }
        Map<String, List> allMap = new HashMap<String, List>();
        setParam(subjectName, grade_id, point_id);
        List knowLedgeList = knowledgeServiceImpl.selectFirstKnowledgeBySubjectId(this.sub_id,
                this.grade_id, this.others, this.sub_name, this.point_id, t, d, c);
        List typesList = typeServiceImpl.selectTypesBySubjectId(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
        List difficultiesList = difficultyServiceImpl.selectAllDifficult(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
        List charactionsList = characterServiceImpl.selectAllCharat(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
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
        this.others = others;
        String reg = "t(\\d+)d(\\d+)c(\\d+)";
        Pattern pattern = Pattern.compile(reg);
        Matcher matcher = pattern.matcher(others);

        if (matcher.find()) {
            session.setAttribute("d", matcher.group(2));
            session.setAttribute("c", matcher.group(3));
            if (!matcher.group(1).equals("0")) {
                session.setAttribute("t", matcher.group(1));
                t = matcher.group(1);
            }
            if (!matcher.group(2).equals("0")) {
                session.setAttribute("d", matcher.group(2));
                d = matcher.group(2);
            }
            if (!matcher.group(3).equals("0")) {
                session.setAttribute("c", matcher.group(3));
                c = matcher.group(3);
            }
        }

        //为测试代码
        Map<String, List> allMap = new HashMap<String, List>();
        setParam(subjectName, grade_id, point_id);
        List knowLedgeList = knowledgeServiceImpl.selectFirstKnowledgeBySubjectId(this.sub_id,
                this.grade_id, this.others, this.sub_name, this.point_id, t, d, c);

        //---------------------------------------------
        //Iterator<KnowledgeJson> iteratorKnow = knowLedgeList.iterator();
        //String regKnow = "/point(\\d+)/";
        //Pattern patternKnow = Pattern.compile(regKnow);
        //while (iteratorKnow.hasNext()) {
        //    KnowledgeJson knowledgeJson = iteratorKnow.next();
        //    Matcher matcherKnow = patternKnow.matcher(knowledgeJson.getUrl());
        //
        //   //matcherKnow.find();
        //    if (matcherKnow.find()) {
        //        System.out.println("point_id--->"+point_id);
        //        System.out.println("matcherKnow.group(1)-----"+matcherKnow.group(1));
        //        if (matcherKnow.group(1).equals(point_id)) {
        //            knowledgeJson.setSelect(true);
        //            break;
        //        }
        //    }
        //
        //}





        List typesList = typeServiceImpl.selectTypesBySubjectId(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
//---------------------------------------------
        Iterator<TypesJson> iteratorTy = typesList.iterator();
        String regTy = "t(\\d+)";
        Pattern patternTy = Pattern.compile(regTy);
        while (iteratorTy.hasNext()) {
            TypesJson typesJson = iteratorTy.next();
            Matcher matcherTy = patternTy.matcher(typesJson.getUrl());
            matcherTy.find();
            if (matcherTy.find()) {
                if (matcherTy.group(1).equals(t)) {
                    typesJson.setSelect(true);
                    break;
                }
            }

        }


        //--------------------------------------------------------
        List difficultiesList = difficultyServiceImpl.selectAllDifficult(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
        //---------------------------------------------
        Iterator<DifficultyJson> iteratorDi = difficultiesList.iterator();
        String regDi = "d(\\d+)";
        Pattern patternDi = Pattern.compile(regDi);
        while (iteratorDi.hasNext()) {
            DifficultyJson difficultyJson = iteratorDi.next();
            Matcher matcherDi = patternDi.matcher(difficultyJson.getUrl());
            if (matcherDi.find()) {
                if (matcherDi.group(1).equals(d)) {
                    difficultyJson.setSelect(true);
                    break;
                }
            }

        }


        //--------------------------------------------------------
        List charactionsList = characterServiceImpl.selectAllCharat(sub_id, grade_id, sub_name, others, this.point_id, t, d, c);
        //---------------------------------------------
        Iterator<CharactionJson> iteratorchar = charactionsList.iterator();
        String regchar = "c(\\d+)";
        Pattern patternchar = Pattern.compile(regchar);
        while (iteratorchar.hasNext()) {
            CharactionJson charactionJson = iteratorchar.next();
            Matcher matcherchar = patternchar.matcher(charactionJson.getUrl());
            if (matcherchar.find()) {
                if (matcherchar.group(1).equals(c)) {
                    charactionJson.setSelect(true);
                    break;
                }
            }

        }


        //--------------------------------------------------------
        allMap.put("Points", knowLedgeList);
        allMap.put("Types", typesList);
        allMap.put("Difficulty", difficultiesList);
        allMap.put("Charaction", charactionsList);
        //weiceshi
        return allMap;
    }

    @RequestMapping(value = "/{grade_id}/{subjectName}/point{point_id}/question", method = RequestMethod.GET)
    public Map getQuestionList(@PathVariable int grade_id,
                               @PathVariable String subjectName,
                               @PathVariable String point_id,
                               @RequestParam int page) {

        setParam(subjectName, grade_id, point_id);
        searchAll.setSub_id(this.sub_id);
        searchAll.setKnow_id(Integer.valueOf(this.point_id));


        return questionsServiceImpl.selectBySearchAll(searchAll, page, userId);
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
        if (matcher.find()) {
            searchAll.setTypes_id(Integer.parseInt(matcher.group(1)));
            searchAll.setDiff_id(Integer.parseInt(matcher.group(2)));
            searchAll.setChar_id(Integer.parseInt(matcher.group(3)));
        }

        //userid
        return questionsServiceImpl.selectBySearchAll(searchAll, page, userId);
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
