package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.SubjectService;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * Created by zseapeng on 2016/11/9.
 */
@Controller
@RequestMapping(value = "/api/combine")
@Repository
public class CombineController {
    @Resource
    private SubjectService subjectServiceImpl;
    @RequestMapping(value = "/manual",method = RequestMethod.POST)
    public String Manual(int subid, int wordtype, HttpSession session){
        session.setAttribute("wordsubid",subid);
        session.setAttribute("wordtype",wordtype);
        return subjectServiceImpl.selectByPrimaryKey(subid);
    }
}
