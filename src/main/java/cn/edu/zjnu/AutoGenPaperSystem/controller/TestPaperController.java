package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.model.QuestionsJson;
import cn.edu.zjnu.AutoGenPaperSystem.service.PaperService;
import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zseapeng on 2016/12/8.
 */
@Controller
@RequestMapping("/api/history")
@ResponseBody
@SessionAttributes("userid")
public class TestPaperController {
    @Resource
    private QuestionsService questionsServiceImpl;
    @Resource
    private PaperService paperServiceImpl;

    @RequestMapping(value = "/testpaper", method = RequestMethod.GET)
    public List<QuestionsJson> getQuestion(@RequestParam int paper) {


        return paperServiceImpl.getListQuestions(paper);

    }
}
