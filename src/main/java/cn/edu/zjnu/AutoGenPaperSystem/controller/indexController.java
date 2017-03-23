package cn.edu.zjnu.AutoGenPaperSystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.*;

/**
 * Created by zseapeng on 2016/10/24.
 */
@Controller
@RequestMapping(value = "/api/info")
@ResponseBody
public class indexController {
    @RequestMapping(method = RequestMethod.GET)
    public Map getUpdateInfo() {


        Map<String, List> map = new HashMap<String, List>();
        List<String> subList = new ArrayList<String>();
        subList.add("语文");
        subList.add("数学");
        subList.add("机械类");
        map.put("科目", subList);
        return map;
    }
}
