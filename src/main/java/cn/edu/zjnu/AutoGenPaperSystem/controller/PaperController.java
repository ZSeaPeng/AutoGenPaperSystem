package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/18.
 */
@Controller
@RequestMapping(value = "/api/paper")
@ResponseBody
public class PaperController {

    private static int userId = 9;

    @Resource
    private UserService userServiceImpl;
    @Resource
    private QuestionsService questionsServiceImpl;


    @RequestMapping(value = "/getinfo", method = RequestMethod.GET)
    public Map getInfo() {
        String type = "";
        String subName = "";
        return userServiceImpl.selectUserChosenByUSerId(userId, type, subName);
    }

    @RequestMapping(value = "/paperlist", method = RequestMethod.POST)
    public void getPaperList(@RequestBody Integer[] paperlist) {

    }
}

