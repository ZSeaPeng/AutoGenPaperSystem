package cn.edu.zjnu.AutoGenPaperSystem.controller;

import cn.edu.zjnu.AutoGenPaperSystem.service.QuestionsService;
import cn.edu.zjnu.AutoGenPaperSystem.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import java.util.Map;

/**
 * Created by zseapeng on 2016/11/2.
 */
@Controller
@RequestMapping(value = "/api/question")
public class QuestionController {
    @Resource
    private UserService userServiceImpl;
    @Resource
    private QuestionsService questionsServiceImpl;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Map AddQuestion(Integer userid, String qid) {
        System.out.println("qid----"+qid);
        System.out.println("userid--"+userid);
        return userServiceImpl.updateByUserId(qid, userid);
    }

    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public void RemoveQuestion(Integer userid, String qid) {
        userServiceImpl.updateByUserId(qid, userid);

    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void SaveQuestion(Integer userid, String qid) {


    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public void DeleteQuestion(Integer userid, String qid) {


    }
}
Contact GitHub API Training Shop Blog About
© 2016 GitHub, Inc. Terms 
