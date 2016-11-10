package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.SubjectService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

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
        System.out.println("sbid---"+subid);
        session.setAttribute("wordsubid", subid);
        session.setAttribute("wordtype", wordtype);
        String url = "{\"url\":" +"\""+subjectServiceImpl.selectByPrimaryKey(subid) + "\"}";

        return url;
    }

    @RequestMapping(value = "/auto",method = RequestMethod.POST)
    public void Auto(){


    }
}
