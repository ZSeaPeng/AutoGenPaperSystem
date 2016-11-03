package cn.edu.zjnu.AutoGenPaperSystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by zseapeng on 2016/11/2.
 */
@Controller
@RequestMapping(value = "/api/question")
public class QuestionController {
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public void AddQuestion(@RequestParam int userid,
                            @RequestParam int qid) {


    }

    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public void RemoveQuestion(@RequestParam int userid,
                               @RequestParam int qid) {


    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void SaveQuestion(@RequestParam int userid,
                             @RequestParam int qid) {


    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public void DeleteQuestion(@RequestParam int userid,
                               @RequestParam int qid) {


    }
}
