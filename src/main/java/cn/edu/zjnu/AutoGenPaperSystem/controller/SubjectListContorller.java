package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.SubjectService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by zseapeng on 2016/9/26.
 */
@Controller
@RequestMapping(value = "/api/subjectlist")
@ResponseBody
public class SubjectListContorller {

    @Resource
    private SubjectService subjectServiceImpl;

    @RequestMapping(method = RequestMethod.GET)
    public Map getSubjectList() {
        List subList =  subjectServiceImpl.selectAllSubject();
        Map<String,List> map = new HashMap<String, List>();
        List<String> updatesubList = new ArrayList<String>();
        updatesubList.add("语文");
        updatesubList.add("数学");
        updatesubList.add("机械类");
        map.put("subject",subList);
        map.put("update",updatesubList);
        return map;
    }

}
