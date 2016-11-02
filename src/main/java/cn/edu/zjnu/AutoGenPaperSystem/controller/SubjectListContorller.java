package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.UpdateInfoJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.SubjectService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.*;

/**
 * Created by zseapeng on 2016/9/26.
 */
@Controller
@RequestMapping(value = "/api/subjectlist")
@ResponseBody
public class SubjectListContorller {

    @Resource
    private SubjectService subjectServiceImpl;
    @Resource
    private QuestionsService questionsServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public Map getSubjectList() {
        List subList = subjectServiceImpl.selectAllSubject();
        Map<String, List> map = new HashMap<String, List>();
        List<List> updatesubList = new ArrayList<List>();
        updatesubList.clear();
        List<UpdateInfoJson> firstUpdateInfo = questionsServiceImpl.selectUploadTime();
        List<String> dateTemp = new ArrayList<String>();
        List one = new ArrayList();
        one.clear();
        List two = new ArrayList();
        two.clear();
        List three = new ArrayList();
        three.clear();
        for (UpdateInfoJson u : firstUpdateInfo) {
            dateTemp.add(u.getDate().substring(0, 10));
        }
        dateTemp = removeDuplicate(dateTemp);

        for (UpdateInfoJson u : firstUpdateInfo) {
            if (u.getDate().substring(0, 10).equalsIgnoreCase(dateTemp.get(0))) {
                one.add(u);
            } else if (u.getDate().substring(0, 10).equalsIgnoreCase(dateTemp.get(1))) {
                two.add(u);
            } else if (u.getDate().substring(0, 10).equalsIgnoreCase(dateTemp.get(2))) {
                three.add(u);
            }
        }


        updatesubList.add(one);
        updatesubList.add(two);
        updatesubList.add(three);
        map.put("sublist", subList);
        map.put("update", updatesubList);
        return map;
    }


    private List removeDuplicate(List list) {
        Set set = new HashSet();
        List newList = new ArrayList();
        for (Iterator iter = list.iterator(); iter.hasNext(); ) {
            Object element = iter.next();
            if (set.add(element))
                newList.add(element);
        }
        list.clear();
        list.addAll(newList);
        return list;
    }

}
